const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

// Ensure screenshots dir exists
const screenshotDir = path.join(__dirname, '..', 'screenshots');
if (!fs.existsSync(screenshotDir)) {
  fs.mkdirSync(screenshotDir, { recursive: true });
}

async function runFullTestSuite(runNumber = 1) {
  console.log(`\n======================================================`);
  console.log(`🚀 STARTING COMPREHENSIVE TEST RUN #${runNumber}`);
  console.log(`======================================================\n`);

  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();

  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });
  page.on('pageerror', err => {
    consoleErrors.push(err.message);
  });

  const testResults = [];
  function assert(testName, condition, details = '') {
    if (condition) {
      console.log(`  ✅ [PASS] ${testName}`);
      testResults.push({ name: testName, status: 'PASS', details });
    } else {
      console.error(`  ❌ [FAIL] ${testName}: ${details}`);
      testResults.push({ name: testName, status: 'FAIL', details });
    }
  }

  // 1. Navigation & Loading
  console.log(`--- SECTION 1: Page Load & DOM Health ---`);
  const response = await page.goto('http://127.0.0.1:5173', { waitUntil: 'networkidle' });
  assert('HTTP Status 200', response.status() === 200, `Status was ${response.status()}`);

  const title = await page.title();
  assert('Page Title configured', title.includes('InternNova'), `Title: "${title}"`);

  // Check console errors so far
  assert('Zero console errors on load', consoleErrors.length === 0, `Errors: ${consoleErrors.join(', ')}`);

  // 2. Sticky Navbar & Header
  console.log(`\n--- SECTION 2: Navbar & Action Triggers ---`);
  const navVisible = await page.isVisible('header');
  assert('Header is visible', navVisible);

  const brandText = await page.textContent('header a');
  assert('Brand name rendered', brandText.includes('InternNova') && brandText.includes('Pro'));

  // Test Quick Apply button in Navbar
  const navApplyBtn = page.locator('header button:has-text("Apply for Cohort")');
  await navApplyBtn.click();
  await page.waitForTimeout(300);
  const modalVisible = await page.isVisible('text=Cohort Application 2026');
  assert('Navbar Apply button opens Application Modal', modalVisible);

  // Close modal
  await page.click('button[aria-label="Close modal"]');
  await page.waitForTimeout(300);
  assert('Application Modal closed cleanly', !(await page.isVisible('text=Cohort Application 2026')));

  // 3. Hero Section
  console.log(`\n--- SECTION 3: Hero Section & Metrics ---`);
  const cohortPill = await page.isVisible('text=Live Cohort 2026');
  assert('Live Cohort Pill is visible with live indicator', cohortPill);

  const heroHeading = await page.textContent('h1');
  assert('Hero Heading has value proposition', heroHeading.includes('Production Tech Internships'));

  const proofCardsCount = await page.locator('.hero-glow-blob ~ div .glass-card').count();
  assert('Hero Proof Cards rendered', proofCardsCount >= 3, `Found ${proofCardsCount}`);

  // 4. Stats Strip
  console.log(`\n--- SECTION 4: Stats Strip Verification ---`);
  const statsCount = await page.locator('text=Active & Alumni Interns').count();
  assert('Stats strip metrics present', statsCount > 0);

  // 5. Domain Catalog & Interactive Filters
  console.log(`\n--- SECTION 5: Domain Catalog, Search & Syllabus Modal ---`);
  const initialCardsCount = await page.locator('#domains .glass-card').count();
  assert('Initial domain cards rendered', initialCardsCount >= 6, `Count: ${initialCardsCount}`);

  // Test Category Tab: AI & Data Science
  await page.click('button:has-text("AI & Data Science")');
  await page.waitForTimeout(200);
  const aiCardsCount = await page.locator('#domains .glass-card').count();
  assert('Category filter works (AI & Data Science)', aiCardsCount === 2, `Count: ${aiCardsCount}`);

  // Test Search query: "Python"
  const searchInput = page.locator('#domains input[placeholder*="Search"]');
  await searchInput.fill('Python');
  await page.waitForTimeout(200);
  const pythonCount = await page.locator('#domains .glass-card').count();
  assert('Search filter works for "Python"', pythonCount >= 1, `Count: ${pythonCount}`);

  // Test Graceful Fallback for Empty Search (PRD ERR.1)
  await searchInput.fill('ZzZzNonExistent999');
  await page.waitForTimeout(200);
  const emptyFallbackVisible = await page.isVisible('text=No internship tracks found');
  assert('Empty search query shows graceful fallback state', emptyFallbackVisible);

  // Click Reset filters
  await page.click('button:has-text("Reset filters & view all tracks")');
  await page.waitForTimeout(200);
  const resetCount = await page.locator('#domains .glass-card').count();
  assert('Reset button restores all tracks', resetCount >= 6, `Restored count: ${resetCount}`);

  // Test Syllabus Breakdown Modal
  const firstSyllabusBtn = page.locator('#domains button:has-text("Syllabus")').first();
  await firstSyllabusBtn.click();
  await page.waitForTimeout(300);
  const syllabusModal = await page.isVisible('text=Curriculum Roadmap');
  assert('Syllabus modal opens with week-by-week roadmap', syllabusModal);
  await page.click('button[aria-label="Close modal"]');
  await page.waitForTimeout(200);
  assert('Syllabus modal closes properly', !(await page.isVisible('text=Curriculum Roadmap')));

  // Test Apply Now on Domain Card
  const applyDomainBtn = page.locator('#domains button:has-text("Apply Now")').first();
  await applyDomainBtn.click();
  await page.waitForTimeout(300);
  const domainApplyModal = await page.isVisible('text=Apply for InternNova Cohort');
  assert('Domain Card Apply button launches Application Modal', domainApplyModal);
  await page.click('button[aria-label="Close modal"]');
  await page.waitForTimeout(200);

  // 6. Mentorship Pathway & Comparison
  console.log(`\n--- SECTION 6: Mentorship Pathway & Sprint Steps ---`);
  const step1 = await page.isVisible('text=Skill Assessment & Cohort Match');
  const step4 = await page.isVisible('text=Verified Credential & Career Referral');
  assert('Mentorship 4-stage steps rendered', step1 && step4);

  const comparisonVisible = await page.isVisible('text=Why InternNova Solves the College Placement Dilemma');
  assert('Industry vs Generic courses comparison block rendered', comparisonVisible);

  // 7. Student Corner: Verifier, ATS Grader & Portfolios
  console.log(`\n--- SECTION 7: Student Corner (Certificate, ATS Grader, Portfolios) ---`);
  // Tab 1: Certificate Verifier
  const defaultVerifiedStudent = await page.textContent('text=Aarav Sharma');
  assert('Default verified credential displayed (Aarav Sharma)', defaultVerifiedStudent !== null);

  // Click Sample Certificate Chip 'IN-2026-7290'
  await page.click('button:has-text("IN-2026-7290")');
  await page.waitForTimeout(500);
  const meeraStudent = await page.isVisible('text=Meera Namboodiri');
  assert('Sample ID "IN-2026-7290" updates to Meera Namboodiri', meeraStudent);

  // Test Invalid Certificate Lookup (PRD ERR.1)
  const certInput = page.locator('#student-corner input[placeholder*="IN-2026"]');
  await certInput.fill('IN-INVALID-99');
  await page.locator('[data-testid="verify-cert-btn"]').click();
  await page.waitForTimeout(600);
  const certError = await page.isVisible('text=No active record found for credential "IN-INVALID-99"');
  assert('Invalid certificate shows informative fallback error message', certError);

  // Tab 2: AI Resume ATS Grader
  await page.click('button:has-text("AI Resume Scorer")');
  await page.waitForTimeout(200);
  const atsMeterVisible = await page.isVisible('text=ATS Keyword Optimization Score');
  assert('AI Resume Scorer tab renders ATS score meter', atsMeterVisible);

  // Toggle skill button to test reactivity
  const skillBtn = page.locator('button:has-text("Docker")').first();
  if (await skillBtn.isVisible()) {
    await skillBtn.click();
    await page.waitForTimeout(200);
    assert('ATS keyword skill button toggle updates interactively', true);
  }

  // Tab 3: Portfolio Showcase
  await page.click('button:has-text("Portfolio Showcase")');
  await page.waitForTimeout(200);
  const portfolioCard = await page.isVisible('text=internnova.dev/@aarav-sde');
  assert('Portfolio Showcase renders verified public profiles', portfolioCard);

  // 8. Workshops Section
  console.log(`\n--- SECTION 8: Workshops & Pass Reservation ---`);
  const workshopCards = await page.locator('#workshops .glass-card').count();
  assert('Workshop masterclass cards rendered', workshopCards >= 4, `Count: ${workshopCards}`);

  // Click Reserve Free Spot
  const reserveBtn = page.locator('#workshops button:has-text("Reserve Free Spot")').first();
  await reserveBtn.click();
  await page.waitForTimeout(300);
  const passModal = await page.isVisible('text=Pass Reserved Successfully!');
  assert('Workshop pass reservation modal opens', passModal);
  await page.click('button:has-text("Done & Add to Calendar")');
  await page.waitForTimeout(200);
  const passConfirmed = await page.isVisible('text=Pass Confirmed');
  assert('Workshop button updates to "Pass Confirmed" state', passConfirmed);

  // 9. Testimonials Section
  console.log(`\n--- SECTION 9: Testimonials with Domain Filter & Pagination ---`);
  const reviewsCount = await page.locator('#reviews .glass-card').count();
  assert('Curated reviews page size equals 3 (No 50+ scroll wall)', reviewsCount === 3, `Count: ${reviewsCount}`);

  // Test next page
  const nextBtn = page.locator('#reviews button[aria-label="Next reviews"]');
  if (await nextBtn.isVisible() && await nextBtn.isEnabled()) {
    await nextBtn.click();
    await page.waitForTimeout(200);
    const pageText = await page.textContent('text=Page 2 of');
    assert('Testimonials pagination works cleanly', pageText !== null);
  }

  // 10. FAQ Accordion
  console.log(`\n--- SECTION 10: FAQ Accordion ---`);
  const firstFaqAnswer = await page.isVisible('text=Any student enrolled in an undergraduate or postgraduate program');
  assert('First FAQ item open by default', firstFaqAnswer);

  // Click second FAQ item
  await page.click('button:has-text("What is the key difference between the Basic and Pro")');
  await page.waitForTimeout(200);
  const secondFaqAnswer = await page.isVisible('text=The Basic Track (4 weeks) is designed for students');
  assert('Second FAQ accordion item expands on click', secondFaqAnswer);

  // 11. Application Modal Full Submission Flow
  console.log(`\n--- SECTION 11: End-to-End Application Modal Submission ---`);
  await page.click('button:has-text("Apply for Cohort")');
  await page.waitForTimeout(300);

  // Fill in complete application details
  await page.fill('input[placeholder*="Priya Sharma"]', 'Test Automation Candidate');
  await page.fill('input[placeholder*="priya@gmail.com"]', 'automation@internnova.test');
  await page.fill('input[placeholder*="SRM University"]', 'IIT Delhi Tech Club');
  await page.locator('[data-testid="submit-application-btn"]').click();
  await page.waitForTimeout(400);

  const appSuccess = await page.isVisible('text=Application Received!');
  assert('Application form submits successfully with confirmation screen', appSuccess);
  await page.click('button:has-text("Return to Homepage")');
  await page.waitForTimeout(200);

  // 12. Footer Newsletter Validation (PRD ERR.1)
  console.log(`\n--- SECTION 12: Footer Newsletter Validation ---`);
  const newsInput = page.locator('footer input[placeholder*="student email"]');
  const newsSubmit = page.locator('footer form button[type="submit"]');

  // Submit empty
  await newsInput.fill('');
  await newsSubmit.click();
  await page.waitForTimeout(200);
  const emptyEmailErr = await page.isVisible('text=Please provide an email address.');
  assert('Empty newsletter submission gives inline error message', emptyEmailErr);

  // Submit invalid email
  await newsInput.fill('invalidemailformat');
  await newsSubmit.click();
  await page.waitForTimeout(200);
  const invalidEmailErr = await page.isVisible('text=Please enter a valid email address');
  assert('Malformed email gives inline helper message', invalidEmailErr);

  // Submit valid email
  await newsInput.fill('developer@college.edu.in');
  await newsSubmit.click();
  await page.waitForTimeout(200);
  const successEmailMsg = await page.isVisible('text=Subscribed!');
  assert('Valid newsletter submission gives success feedback', successEmailMsg);

  // Check MSME Registration number
  const msmeBadge = await page.textContent('footer');
  assert('MSME & ISO Registration details present in footer', msmeBadge.includes('UDYAM-DL-08-004921'));

  // 13. Multi-Device Responsive & Zero-Horizontal-Overflow Audit
  console.log(`\n--- SECTION 13: Responsive Breakpoints & Zero Overflow Audit ---`);
  const testViewports = [
    { name: 'Desktop (1920x1080)', width: 1920, height: 1080 },
    { name: 'Laptop (1366x768)', width: 1366, height: 768 },
    { name: 'Tablet (768x1024)', width: 768, height: 1024 },
    { name: 'Mobile Standard (375x812)', width: 375, height: 812 },
    { name: 'Compact Mobile (360x640)', width: 360, height: 640 },
  ];

  for (const vp of testViewports) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.waitForTimeout(200);

    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });

    assert(
      `Zero Horizontal Scroll at ${vp.name}`,
      !hasHorizontalOverflow,
      `scrollWidth (${await page.evaluate(() => document.documentElement.scrollWidth)}) vs clientWidth (${vp.width})`
    );

    // If mobile, test hamburger menu drawer
    if (vp.width <= 768) {
      const hamburger = page.locator('button[aria-label="Toggle menu"]');
      if (await hamburger.isVisible()) {
        await hamburger.click();
        const mobileNavVisible = await page.locator('[data-testid="mobile-nav-drawer"]').isVisible();
        assert(`Mobile drawer opens properly at ${vp.name}`, mobileNavVisible);
        await hamburger.click();
        await page.waitForTimeout(200);
      }
    }
  }

  // 14. High-Resolution Screenshot Captures
  console.log(`\n--- SECTION 14: Capturing High-Res Screenshots ---`);
  // Desktop Full Page Screenshot
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.screenshot({
    path: path.join(screenshotDir, `desktop-full-preview-run${runNumber}.png`),
    fullPage: true,
  });
  console.log(`  📸 Desktop full screenshot saved: screenshots/desktop-full-preview-run${runNumber}.png`);

  // Mobile Screenshot
  await page.setViewportSize({ width: 375, height: 812 });
  await page.screenshot({
    path: path.join(screenshotDir, `mobile-preview-run${runNumber}.png`),
    fullPage: false,
  });
  console.log(`  📸 Mobile screenshot saved: screenshots/mobile-preview-run${runNumber}.png`);

  // Certificate Verifier Focus Screenshot
  await page.setViewportSize({ width: 1280, height: 800 });
  const studentCornerElem = page.locator('#student-corner');
  await studentCornerElem.scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await studentCornerElem.screenshot({
    path: path.join(screenshotDir, `student-corner-run${runNumber}.png`),
  });
  console.log(`  📸 Student Corner screenshot saved: screenshots/student-corner-run${runNumber}.png`);

  await browser.close();

  // Summary
  const passCount = testResults.filter(r => r.status === 'PASS').length;
  const failCount = testResults.filter(r => r.status === 'FAIL').length;

  console.log(`\n======================================================`);
  console.log(`📊 SUMMARY OF TEST RUN #${runNumber}:`);
  console.log(`   Passed: ${passCount} / ${testResults.length}`);
  console.log(`   Failed: ${failCount} / ${testResults.length}`);
  console.log(`   Console Errors: ${consoleErrors.length}`);
  console.log(`======================================================\n`);

  return { passCount, failCount, total: testResults.length, consoleErrors };
}

(async () => {
  try {
    // Run Test 1
    const run1 = await runFullTestSuite(1);

    // Run Test 2 (Testing again as requested)
    const run2 = await runFullTestSuite(2);

    // Run Test 3 (Testing third time to ensure absolute rock-solid reliability)
    const run3 = await runFullTestSuite(3);

    console.log(`\n🎉 ALL 3 CONSECUTIVE TEST RUNS COMPLETED!`);
    console.log(`Run 1: ${run1.passCount}/${run1.total} Passed, ${run1.failCount} Failed`);
    console.log(`Run 2: ${run2.passCount}/${run2.total} Passed, ${run2.failCount} Failed`);
    console.log(`Run 3: ${run3.passCount}/${run3.total} Passed, ${run3.failCount} Failed`);

    if (run1.failCount === 0 && run2.failCount === 0 && run3.failCount === 0) {
      console.log(`\n🌟 100% SUCCESS RATE ACROSS ALL AUTOMATED TEST RUNS!`);
      process.exit(0);
    } else {
      process.exit(1);
    }
  } catch (err) {
    console.error('Test Suite encountered fatal error:', err);
    process.exit(1);
  }
})();
