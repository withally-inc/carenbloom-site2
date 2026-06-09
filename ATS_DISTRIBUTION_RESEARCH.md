# ATS / Job Distribution Research

Updated: 2026-06-09

## Executive Recommendation

Use a job-distribution-first tool before replacing the current recruiting workflow.

Recommended buying path:

1. Pilot JobTarget or eQuestXpress with 2-3 roles.
2. Add lightweight site upgrades so every external posting can route cleanly into Care & Bloom's form/Notion.
3. Compare JazzHR, Workable, and Ashby only as fallback ATS options if distribution-first tools cannot preserve the required apply path or source tracking.

Why:

- The main pain is one post -> many job boards, not candidate workflow.
- The current site already has a role-aware application form and Notion intake.
- LinkedIn, Indeed, and ZipRecruiter direct automation is gated enough that DIY alone is not a reliable "post everywhere" strategy.
- At 10-20 active roles/month and 100-300+ applicants/role, source tracking, resume capture, and bulk triage matter more than elegant ATS features.

## Requirements

Target operating model:

- 10-20 active roles/month.
- 100-300+ applicants per role.
- Software budget under $1K/month, excluding paid board spend.
- Remote/global hiring, with priority on US, Philippines/Asia, and Europe.
- Hybrid apply is acceptable: native board apply is allowed only when all required fields arrive cleanly; otherwise use redirect to Care & Bloom form.

Pricing interpretation:

- Do not treat missing public pricing as free.
- "No platform fee" means no extra subscription/platform charge was found; it does not mean postings, delivery, campaigns, premium products, or job-board inventory are free.
- "Pay as you go" still means spend per posting/product/board/campaign; exact totals require vendor/cart/demo confirmation.
- "Free boards" can still have distributor delivery/processing fees in some partner flows. Confirm exact charge per board before piloting.
- "Quote-only", "custom", or "opaque" pricing is budget risk until a quote proves it fits under $1K/month.

Required application fields:

- role / role slug
- first name / last name
- email
- phone
- resume file or usable resume URL
- location
- timezone availability
- monthly income
- role-specific questions
- intro video when required
- source board/referrer

Current Care & Bloom constraints verified in repo:

- Form is at `/talents/apply/?role=...`.
- API writes applications to Notion through `/api/applications`.
- Source URL is stored, but `referrer` is collected client-side and not currently mapped into the Notion payload.
- Resume and additional attachment inputs only store filenames, not uploaded files or file URLs.
- No current Google Jobs `JobPosting` schema or external XML/job feed was found.

## Ranked Shortlist

| Rank | Tool | Type | Fit | Verdict |
| --- | --- | --- | --- | --- |
| 1 | JobTarget | Distribution-first | Strong | Best first call. Huge board marketplace and no subscription/platform fee found, but postings/products/campaigns are still paid à la carte. Can operate without ATS, and public materials explicitly mention candidates being directed back to employer site. |
| 2 | eQuest / eQuestXpress | Distribution-first | Strong | Best second call. Strong global distribution and pay-as-you-go path. Not free: postings/boards still cost money, with exact cart pricing to confirm. AutoPost/career-site scrape option, and public materials say candidates can be brought back to your career site. |
| 3 | JOIN | Distribution + light ATS | Strong if 15 active jobs is enough | Transparent low pricing, multiposting, 250+ premium boards, candidate export/API. Watch active-job cap. |
| 4 | JazzHR | ATS with multiposting | Strong ATS fallback | Under budget, competitor-used, 30-200 active-job paths, free/premium boards, bulk actions, source reports, workflow helpers. |
| 5 | Workable | ATS with multiposting | Strong ATS fallback | Stronger workflow/API/source tracking than JazzHR, 200+ boards, custom questions. Video/interview add-ons may push cost. |
| 6 | Ashby | ATS with multiposting | Medium/strong | Excellent forms/source tracking/workflow, but distribution is mostly LinkedIn/Indeed/Google/ZipRecruiter-style, not broad marketplace. Include for workflow quality. |
| 7 | Recruitee | ATS with multiposting | Medium | 20+ free and 1,500 paid boards, strong workflow. Pricing is quote/annual and less clear. |
| 8 | Teamtailor | ATS/recruitment marketing | Medium | Strong UX, unlimited jobs/users, marketplace/job-board integrations. Quote-only; needs demo confirmation for board/apply details. |
| 9 | Zoho Recruit | ATS | Medium/low | Very cheap, transparent, active jobs per recruiter. Good budget fallback, less compelling distribution/workflow. |
| 10 | Pinpoint | ATS | Medium/low | Polished ATS, job board advertising, likely under/near $1K for some company sizes. Quote-only and ATS-first. |
| 11 | Loxo | Recruiting CRM/ATS + programmatic posting | Medium/low | Loxo Boost claims 30,000+ job boards/social sites, but product is oriented around recruiting CRM/sourcing, not preserving current apply flow. |
| 12 | Manatal | ATS | Low/medium | Cheap and broad channels, but mostly ATS/social/job-board posting; needs account verification and likely weaker direct fit. |
| 13 | BambooHR | HRIS + ATS | Low | Useful if BambooHR is already HRIS. Job posting exists, but not distribution-first enough for this need. |
| 14 | Broadbean | Distribution-first | Powerful but likely enterprise | Excellent distribution/source tracking/multiple apply paths; likely custom/enterprise and better for larger recruiting operations. |
| 15 | VONQ | Distribution/API | Powerful but likely enterprise/partner-led | Strong programmatic and API ecosystem; direct fit depends on sales packaging and integrations. |
| 16 | Greenhouse | ATS | Low for budget/goal | Strong ATS, custom pricing, likely overkill for distribution-first problem. |
| 17 | Lever | ATS/CRM | Low for budget/goal | Strong ATS/CRM, custom pricing, not distribution-first. |
| 18 | SmartRecruiters | ATS | Not viable under budget | Public pricing starts at $14,995/year; likely outside target. |
| 19 | Recruiterflow | Recruiting CRM/ATS | Low | Agency/sourcing orientation; public review evidence says no Indeed/ZipRecruiter posting partnership. |
| 20 | 50skills / 50hire | Unclear/low | Low | Current 50skills positioning is HR workflow automation; 50hire mentions job-board posting but evidence is too thin. |

## Distribution-First Options

### JobTarget

Best use case: standalone multiposting marketplace while keeping Care & Bloom application workflow.

Verified:

- Marketplace claims 25,000+ job sites.
- Pricing support page says no additional platform fee; you pay for postings/products/campaigns selected.
- Partner FAQ materials indicate selected paid sites cost the job-site advertising price, and some no-cost/free job sites may still have a small delivery/posting fee in partner flows. Treat board-level charges as demo/cart-confirmed, not free.
- Supports integrated ATS, manual job creation, and job importer/career-page scrape paths.
- Public marketplace copy includes recruiter quote that candidates are directed back to employer website so every resume/application is in one database.

Fit:

- Strongest match for "one post to multiple boards" without buying a full ATS.
- Best first demo.

Risks / demo questions:

- Can every selected board use `https://careandbloom.com/talents/apply/?role={slug}&source={board}`?
- Which boards allow redirect apply vs JobTarget Easy Apply?
- Can they import from static job pages or a JSON/XML feed?
- Exact coverage for LinkedIn, Indeed, ZipRecruiter, Google Jobs, Wellfound, Remote OK, We Work Remotely, FlexJobs, JobStreet, Kalibrr, OnlineJobs.ph, Bossjob, Glints, Talent.com.

### eQuest / eQuestXpress

Best use case: pay-as-you-go/global posting with current careers site as source of truth.

Verified:

- eQuestXpress is positioned as pay-as-you-go with no contract needed.
- eQuestXpress says "free delivery", "no setup fees", "no minimums", and "no hidden fees to join", but also says to have a credit card ready and positions the product around discounted job board fees. Treat it as pay-per-use, not free.
- Global posting page claims 5,000+ commercial boards and coverage in 183 countries/territories.
- Search/organic list includes Google Jobs, LinkedIn Organic, Glassdoor Organic, Indeed Organic.
- Public material says eQuest can scrape a career site through AutoPost and bring candidates back to the career site for application.

Fit:

- Excellent for global/remote distribution.
- Strong second demo after JobTarget.

Risks / demo questions:

- Exact cost per job/board bundle.
- Whether PH/Asia boards are available and practical.
- Whether AutoPost can scrape current static pages or needs a feed.
- How source tracking works when candidates redirect to Care & Bloom form.

### JOIN

Best use case: cheap multiposting + light ATS if active job cap works.

Verified:

- Pricing page lists Standard at 20 EUR/job/month and Advanced at 40 EUR/job/month, with up to 15 active jobs.
- Standard includes 10+ job boards; Advanced includes 15+ job boards, custom screening questions, API access, and candidate export.
- Multiposting page claims 15+ free job boards and 250+ premium boards.
- JOIN says candidates from multiposting are collected centrally in JOIN.

Fit:

- Very good if 15 active jobs is enough or if "10-20/month" rarely exceeds 15 concurrent active jobs.
- More Europe-oriented than JobTarget/eQuest; still worth testing.

Risks / demo questions:

- Can Care & Bloom use its own apply URL instead of JOIN candidate collection?
- What happens at 16-20 active jobs?
- Board coverage for US and Philippines/Asia.

### Broadbean

Best use case: enterprise-grade distribution and source analytics.

Verified:

- Claims 7,000+ job boards in 100+ countries.
- Supports multiple apply paths, source tracking, integrated ATS/CRM workflows, and posting to employer website.
- Integrated with 120+ ATS/CRM systems.

Fit:

- Capability fit is excellent.
- Commercial fit is uncertain and likely more enterprise than needed.

Recommendation:

- Quick screen only. Ask pricing and whether they sell direct to small teams under $1K/month.

### VONQ

Best use case: programmatic job marketing and ATS/HCM embedded distribution.

Verified:

- HAPI references 2,500+ media channels/job boards for ATS/CRM/HCM partners.
- Job Post references 1,000+ channels and automated distribution.
- VONQ job marketing references 5,000+ job boards/niche/social channels.
- HAPI Direct Apply and Job Board Marketplace exist, but HAPI is designed for platforms/ATS partners.

Fit:

- Very strong technically.
- Probably not simplest direct buyer path.

Recommendation:

- Quick screen only unless JobTarget/eQuest fail.

## ATS Fallbacks

### JazzHR

Best use case: budget ATS with strong enough multiposting.

Verified:

- Pricing page lists Hero $1,000/year, Plus $3,480/year, Pro $5,508/year; Plus monthly equivalent shown as $290/month over annual commitment.
- Plus includes up to 200 active jobs in the public pricing page; RBO pricing pages show alternate 30-job base with add-on blocks.
- Job posting/syndication is subject to eligibility and third-party board restrictions.
- Plan page lists free job boards, premium listings, LinkedIn Recruiter integration, custom workflows, knockout questions, bulk actions, workflow helpers, source reports, interview guides, candidate evaluation templates, and video interview integrations.

Fit:

- Strongest ATS benchmark because it is cheap and competitor-used.
- Under budget even with likely add-ons.

Risks:

- Need exact board list and whether Care & Bloom can redirect to its own form.
- Some pricing variants exist; confirm which applies to Care & Bloom.
- Native board apply may not capture monthly income/timezone/role questions cleanly unless configured in JazzHR.

### Workable

Best use case: ATS workflow fallback with strong distribution and APIs.

Verified:

- Workable help says monthly Standard offers unlimited active jobs sized for company.
- Job-board help references 200+ boards and specific support for Google Jobs, ZipRecruiter premium through Workable, Indeed, LinkedIn, and Resume-Library.
- Custom application forms support custom questions; answers are viewable/filterable/exportable.
- API docs say custom questions/custom fields and answers are retrievable through API.
- Source tracking is available in candidate profiles and reports, including job boards and custom UTM links.

Fit:

- Best ATS if workflow usability matters more than lowest cost.
- Stronger than JazzHR for API/custom question/source-tracking confidence.

Risks:

- Video interviews, assessments, texting, and premium support can be add-ons or higher-tier features.
- Need quote for current company size under $1K/month.
- Candidates would likely apply through Workable form unless redirect/native handling is confirmed.

### Ashby

Best use case: high-quality workflow/forms/source tracking if you are willing to use ATS as workflow source of truth.

Verified:

- Supports free limited listings to LinkedIn, Indeed, and Google Jobs.
- ZipRecruiter integration appears in Ashby job board docs/integrations.
- Application forms are reusable and customizable; form field connectors can map answers to candidate fields.
- Custom tracking links can tag inbound sources; built-in job board integrations apply source automatically.
- Zapier/API support exists for syncing custom fields.

Fit:

- Best workflow/data architecture among ATS options.
- Not strongest for broad board distribution.

Risks:

- Pricing public page is quote/light; third-party sources put Ashby Foundations around $400/month for startups, but final quote needed.
- May be overpowered if the only real need is job distribution.

### Recruitee

Verified:

- Help center says Recruitee promotes vacancies on 20+ free and 1,500 paid boards worldwide.
- Published jobs are sent automatically to Indeed and Google for Jobs.
- Integrations include JOIN and VONQ.
- Start plan allows up to five job slots; newer packages include Start/Advance/Optimize with annual minimum.

Fit:

- Worth demoing if JOIN/VONQ integrations make distribution easy.

Risks:

- Pricing is not transparent enough.
- May require switching candidate workflow into Recruitee.

### Teamtailor

Verified:

- Pricing page says unlimited job postings and unlimited users; custom quote.
- Marketplace has job board integrations and promotion under a job's Promote tab.
- Always-included/free channels include Google Jobs and LinkedIn Basic Jobs/Limited Listings; Indeed eligibility is reviewed by Indeed.
- API supports application/candidate objects and embedded application form.

Fit:

- Strong candidate experience and workflow option.
- Good if quoted under budget.

Risks:

- Board coverage and apply-path control need demo confirmation.
- Quote-only pricing.

### Zoho Recruit

Verified:

- Corporate pricing PDF lists Standard at $30/recruiter/month monthly or $25 annually, Enterprise at $60/recruiter/month monthly or $50 annually.
- Standard includes 10 active jobs/recruiter; Enterprise includes 20 active jobs/recruiter.
- Free and premium job boards, social posting, assessments, candidate review forms, interview feedback forms, APIs/webhooks on higher features.

Fit:

- Cheapest ATS that can plausibly handle active-job volume.

Risks:

- Likely less polished.
- Distribution quality and candidate UX likely weaker than JazzHR/Workable/Ashby.

## Lower-Priority Players

| Tool | Finding |
| --- | --- |
| BambooHR | HRIS-first; ATS posts to leading boards like Indeed/ZipRecruiter. Good only if BambooHR is already HRIS. |
| SmartRecruiters | Strong ATS/distribution, but public pricing starts at $14,995/year. Outside budget. |
| Manatal | Very affordable and posts to many free/premium/social channels, but less evidence for preserving custom apply flow. |
| Loxo | Loxo Boost claims 30,000+ boards/social sites including Indeed/ZipRecruiter/Monster/CareerBuilder/Talroo/Jobcase/Snagajob; likely better for recruiting agencies/sourcing than current need. |
| Recruiterflow | Agency CRM/ATS. Public review evidence says no Indeed/ZipRecruiter ad partnership; low fit. |
| Pinpoint | Strong ATS and job-board advertising; likely under/near budget, but quote-only and ATS-first. |
| 50skills / 50hire | Current 50skills is HR workflow automation, not clearly ATS/distribution-first. 50hire mentions job-board posting, but evidence is too thin for shortlist. |
| Greenhouse | Excellent ATS, quote-only, likely overkill/over budget. |
| Lever | Excellent ATS/CRM, quote-only, likely overkill/over budget. |

## Board Coverage Reality

Core boards:

- Google Jobs: easiest DIY path through structured data on public role pages.
- Indeed: XML/feed and Indeed Apply exist, but approvals, quality checks, and sponsorship/eligibility rules matter.
- LinkedIn: official Job Posting API is for authorized third parties/ATS/job distributors; practical access is partner-gated.
- ZipRecruiter: partner Job API and Apply Webhook exist; practical access is partner-oriented.

Remote/global boards:

- Distribution tools are more likely than ATSs to cover long-tail boards like FlexJobs, We Work Remotely, Remote OK, niche boards, diversity boards, and regional boards.
- Exact board coverage is not reliably public across vendors; require a demo/vendor response for the specific target board list.

Asia/Philippines:

- None of the public docs conclusively prove coverage for OnlineJobs.ph, Kalibrr, Bossjob, Glints, or JobStreet across the shortlist.
- This should be a top demo question for JobTarget/eQuest/JOIN/Broadbean/VONQ.

## DIY Feasibility

DIY alone should not be the main path.

Feasible and recommended:

- Add `JobPosting` structured data to role pages for Google Jobs.
- Add URL source parameters to all external apply links.
- Store `source` and `referrer` in Notion.
- Store actual resume files or upload URLs, not filenames.
- Build `/jobs-feed.xml` or `/jobs-feed.json` so vendors can import/scrape reliably.

Not realistic as a complete substitute:

- Direct LinkedIn job posting automation without being an approved partner.
- Full Indeed/ZipRecruiter native apply without approval and compliance work.
- Maintaining separate board APIs and policy changes manually.

## Implementation Prerequisites

Before piloting any vendor:

1. Add source capture to the current form/API.
   - Example apply URL: `/talents/apply/?role=video-editor&source=linkedin&utm_vendor=jobtarget`.
   - Store `source`, `utm_vendor`, and `referrer` in Notion.

2. Add real file handling.
   - Current form only sends filenames.
   - Need upload-to-storage or resume URL field if applications stay in Notion.

3. Add Google Jobs schema.
   - Current public role pages can be made Google-indexable with `JobPosting` JSON-LD.

4. Create a feed.
   - JSON/XML feed with title, slug, location/remote, description, salary if published, role URL, apply URL, and close date.
   - Useful for JobTarget/eQuest imports and future DIY posting.

## Integration Research: Options To Take Forward

Baseline verified in the current site:

- Roles are currently static site data, not vendor-owned jobs.
- Apply flow is `/talents/apply/?role={slug}` -> `/api/applications` -> Notion.
- The browser collects `referrer`, but the API/Notion payload does not currently store it.
- Resume/additional files are submitted as filenames only, not file contents or hosted URLs.
- There is no current public jobs feed or Google Jobs schema.

Shared foundation work for all options:

1. Add persistent source fields.
   - Capture `source`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_vendor`, `referrer`, and landing URL.
   - Store them in Notion even if the ATS also stores source.

2. Fix resume handling.
   - Either upload files to storage and save URLs, or require a resume URL field.
   - This is required before native board apply, JazzHR Apply API, Ashby custom apply, or JOIN API sync can be trusted.

3. Create a vendor-ready job feed.
   - Minimum fields: external job id, title, slug, public role URL, apply URL, remote/location, description, requirements, role type, department, date posted, close date/status.
   - Use stable ids so imported jobs do not duplicate.

4. Decide source of truth per vendor.
   - Distribution-first path: Care & Bloom form + Notion remain source of truth.
   - ATS path: ATS owns workflow and Notion becomes reporting/backup.
   - Hybrid path: submit to both systems, but this adds drift risk.

### Integration Workload Matrix

| Option | Integration model | Can keep Care & Bloom form? | Sync direction | Work level | Main risk | Next proof |
| --- | --- | --- | --- | --- | --- | --- |
| [JobTarget](https://www.jobtarget.com/job-site-marketplace) | Job importer/feed or manual jobs, then board distribution with apply URL | Yes, best path | Care & Bloom -> Notion; JobTarget handles distribution | Medium-low | Some boards may force Easy Apply/hosted apply or lose source params | Demo importer + redirect apply on target boards |
| [eQuestXpress](https://www.equest.com/xpress/) | AutoPost/career-site scrape or feed, source-coded apply URL, optional apply pixel | Yes, best path | Care & Bloom -> Notion; eQuest handles distribution/analytics | Medium | Feed/scrape format and completed-apply tracking need setup | Confirm AutoPost from static site/feed and source-code passthrough |
| [JOIN](https://join.com/features/multiposting) | JOIN multiposting + light ATS, or API bridge | Maybe, unclear | JOIN -> Notion or Care & Bloom -> JOIN | Medium/high | Custom apply URL unclear; API/export likely requires Advanced | Confirm custom apply URL and API tier |
| [JazzHR](https://www.jazzhr.com/pricing) | JazzHR jobs + Apply API custom form, or Candidate Export webhook | Yes, plausible | Care & Bloom -> JazzHR + Notion, or JazzHR -> Notion | Medium | API access, 48h token, 2MB resume limit | Test Apply API questions + create application |
| [Workable](https://help.workable.com/hc/en-us/articles/115012441868-Which-job-boards-can-I-post-to-through-Workable) | Workable hosted forms/shortlinks + API/webhook sync | Less likely | Workable -> Notion | Medium/high | Custom form preservation less proven than JazzHR/Ashby | Demo shortlink/source flow and candidate API/export |
| [Ashby](https://docs.ashbyhq.com/how-do-i-set-up-job-board-connections) | Ashby as ATS source of truth, custom careers/apply API | Yes, but requires rebuild | Care & Bloom/Ashby unified; Notion reporting | High | Secure proxy, field-path mapping, source-of-truth migration | Prototype `applicationForm.submit` with resume + UTM |

### JobTarget Integration

Recommended model:

- Keep Care & Bloom as application source of truth.
- Give JobTarget either manually-created jobs, an imported career page, or a feed.
- Each distributed job should point to a role-specific apply URL like `/talents/apply/?role=ea&source={board}&utm_vendor=jobtarget`.

Work required:

1. Build or expose a stable jobs feed/careers page for JobTarget import.
2. Add source/referrer/UTM persistence to Notion.
3. Fix resume upload/URL handling in the current application form.
4. Confirm which target boards support redirect apply vs JobTarget Easy Apply/Candidate Manager.
5. If any important board forces Easy Apply, map required fields and candidate export back into Notion.

Potential difficulties:

- Importer sync can be delayed, with public support docs referencing daily/nightly import behavior.
- Some boards may require hosted/native apply, which would weaken field parity.
- Free/no-cost board delivery may still have small posting/delivery fees in partner flows.
- Source tracking must survive board redirects and any JobTarget redirect layer.

Decision check:

- Choose JobTarget if the demo proves custom apply URLs work on the boards you actually want.
- Do not choose it just because the platform fee is zero; posting/campaign/board spend still applies.

Relevant docs:

- Job import paths: https://support.jobtarget.com/jobtarget-help-center/jt101-how-do-jobs-land-in-jobtarget
- Marketplace: https://www.jobtarget.com/job-site-marketplace
- Pricing: https://support.jobtarget.com/jobtarget-help-center/how-much-does-it-cost-to-use-jobtarget
- Partner fee nuance: https://platform.jobtarget.com/oc/partner/faq

### eQuestXpress Integration

Recommended model:

- Keep Care & Bloom as application source of truth.
- Use eQuestXpress/AutoPost to distribute jobs from the current career site or a feed.
- Use eQuest source codes and, if available, a completed-application pixel/event to tie clicks to applications.

Work required:

1. Create a feed or ensure current job pages are structured enough for AutoPost/career-site scrape.
2. Add source-code passthrough into apply URLs.
3. Add a thank-you/completion event or pixel if eQuest supports it for your account.
4. Persist source/referrer/UTM fields in Notion.
5. Confirm exact board list, especially US remote, Europe, and Philippines/Asia boards.

Potential difficulties:

- eQuest can work from ATS or career-site scrape, but exact setup needs vendor configuration.
- Completed-apply attribution may need a thank-you page or event that current form may not have.
- Board-level apply behavior and costs are not fully knowable from public pages.

Decision check:

- Choose eQuest if it proves global board reach plus clean redirect/source tracking.
- It is not "free"; it is pay-as-you-go with paid board/cart spend.

Relevant docs:

- eQuestXpress: https://www.equest.com/xpress/
- AutoPost: https://www.equest.com/solutions/autopost/
- Job board integrations: https://kb.equest.com/docs/job-board-integrations
- Apply URL handling: https://support.equest.com/index.php?id=4255&pg=kb.page
- Click/apply tracking: https://support.equest.com/index.php?id=3846&pg=kb.page

### JOIN Integration

Recommended model:

- Treat JOIN as a trialable hybrid: multiposting plus light ATS.
- First decide whether JOIN will collect candidates or whether Care & Bloom keeps the application form.

Work required if JOIN owns applications:

1. Configure JOIN jobs/forms and required screening questions.
2. Map Care & Bloom required fields into JOIN fields/questions.
3. Use JOIN export/API/Zapier-style sync into Notion if Notion remains needed.
4. Decide how role-specific workflows are represented in JOIN.

Work required if Care & Bloom form stays:

1. Confirm JOIN can use a custom apply URL for multiposted jobs.
2. If not, build a bridge from Care & Bloom applications into JOIN using `POST /v2/applications`.
3. Map resume/documents into JOIN attachment/document fields.
4. Store JOIN application ids in Notion to prevent duplicates.

Potential difficulties:

- Public docs prove JOIN has API/application endpoints, but they do not prove every multiposted board can redirect to your form.
- API, candidate export, and custom screening questions appear tied to higher plan functionality.
- JOIN's 15 active-job cap may collide with 10-20 active roles/month if many are open simultaneously.

Decision check:

- Trial JOIN only if 15 active jobs is enough and the apply path is acceptable.
- If JOIN must own applications, compare its workflow against JazzHR before committing.

Relevant docs:

- JOIN API docs: https://help.join.com/join-api/api-documentation
- Create application endpoint: https://docs.join.com/reference/createapplication-1
- Candidate/application export: https://help.join.com/candidates-and-applications/application-export
- Pricing/API tier: https://join.com/pricing

### JazzHR Integration

Recommended model:

- Best budget ATS fallback if you want to preserve the Care & Bloom form.
- Use JazzHR's Apply API for custom application submission, or use JazzHR workflow/export webhooks if JazzHR becomes the candidate system.

Work required:

1. Create each role in JazzHR and map current role slugs to JazzHR `jobBoardCode`.
2. Fetch JazzHR questions per role and map them to Care & Bloom form fields.
3. Update `/api/applications` or add a server-side integration endpoint that submits to JazzHR Apply API.
4. Add real resume upload/base64 handling within JazzHR limits.
5. Manage Apply API authentication/token refresh.
6. Optionally add Candidate Export webhook to sync JazzHR stage changes back to Notion.

Potential difficulties:

- Apply API token lifetime is short, so server-side token refresh/cache is needed.
- Resume file limits and MIME rules are stricter than the current filename-only flow.
- Required JazzHR questions can change by job; field mapping should not be hardcoded blindly.
- If submitting to both Notion and JazzHR, dedupe and failure handling matter.

Decision check:

- JazzHR is the strongest "budget ATS but keep our form" candidate because the public Apply API is explicit.
- Demo should include a real application submit test, not just workflow screenshots.

Relevant docs:

- JazzHR API overview: https://apidoc.jazzhrapis.com/
- Apply API/custom apply: https://apidoc.jazzhrapis.com/custom-apply/
- Candidate Export webhook: https://apidoc.jazzhrapis.com/candidate-export/
- Pricing: https://www.jazzhr.com/pricing

### Workable Integration

Recommended model:

- Workable is strongest if Workable owns application intake and recruiting workflow.
- Care & Bloom can still show jobs on the site, but the likely apply path is Workable forms/shortlinks plus API/webhook sync into Notion if needed.

Work required:

1. Configure jobs, custom application forms, stages, and source tracking in Workable.
2. Use Workable shortlinks/tracking links for distributed postings.
3. Optionally use Workable API to list open jobs on Care & Bloom's site.
4. Map required fields into Workable custom questions.
5. Build a Notion sync from Workable candidate API/export/webhooks if Notion remains part of reporting.

Potential difficulties:

- Public Workable docs found a clear path for listing jobs and retrieving candidate/question data, but not the same clean custom-apply submission path JazzHR/Ashby expose.
- Workable source tracking can become "Unknown" in some visitor/session cases.
- Hosted Workable forms may be a bigger workflow change than desired.
- Quote/add-ons are needed to prove the budget.

Decision check:

- Demo Workable if you are open to moving workflow into the ATS.
- Do not pick it purely for distribution unless custom apply URL/source handling is proven.

Relevant docs:

- Job boards: https://help.workable.com/hc/en-us/articles/115012441868-Which-job-boards-can-I-post-to-through-Workable
- Job shortlinks: https://help.workable.com/hc/en-us/articles/115012301427-Using-the-job-shortlink
- Source tracking: https://help.workable.com/hc/en-us/articles/115012901987-Tracking-candidate-sources
- API docs: https://help.workable.com/hc/en-us/articles/115013356548-Workable-API-Documentation
- Careers page API: https://help.workable.com/hc/en-us/articles/115012771647-Using-the-Workable-API-to-create-a-careers-page

### Ashby Integration

Recommended model:

- Use Ashby only if it becomes the recruiting source of truth.
- It can support a custom Care & Bloom careers/apply experience, but this is a real integration build, not just a distributor setup.

Work required:

1. Create jobs and application forms in Ashby.
2. Map current role slugs to Ashby job posting ids.
3. Build a server-side proxy for Ashby API calls; do not call Ashby's private API directly from the browser.
4. Use `jobPosting.list`/`jobPosting.info` to render jobs/forms, or keep current role pages and map fields manually.
5. Submit applications with `applicationForm.submit`, including files via multipart/form-data or upload handles.
6. Pass `utmData` so source/campaign data is preserved.
7. Decide whether Notion becomes reporting-only, or sync Ashby data back into Notion via API/Zapier.

Potential difficulties:

- Highest architecture lift because Ashby should own workflow to justify the migration.
- Custom form field `path` values and connectors need careful mapping.
- File upload and application submission require secure backend work.
- Ashby custom forms have reporting nuances, so analytics should be checked in demo.
- Pricing remains quote-needed.

Decision check:

- Choose Ashby if workflow/data rigor is more important than broad marketplace distribution.
- Do not choose Ashby if the only job is cheap one-click posting to many niche boards.

Relevant docs:

- Custom careers page: https://developers.ashbyhq.com/docs/creating-a-custom-careers-page
- Application form submit: https://developers.ashbyhq.com/reference/applicationformsubmit
- Application forms: https://docs.ashbyhq.com/application-forms
- Source tracking: https://docs.ashbyhq.com/tracking-the-source-of-an-application
- Lightweight job posting API: https://docs.ashbyhq.com/using-the-lightweight-job-posting-api-to-list-openings-on-your-site

## Demo / Vendor Questions

Use these exact questions in demos:

1. Can every posted job use our custom apply URL with source parameters?
2. Which boards force native apply or hosted apply instead of redirect?
3. For native apply, can we collect: phone, resume file/URL, location, timezone availability, monthly income, role-specific questions, and intro video URL?
4. Can you pass source board and campaign into the application URL or webhook?
5. Can you import jobs from a static careers site, XML feed, JSON feed, or manually-created jobs?
6. Which of these boards are supported: LinkedIn, Indeed, Google Jobs, ZipRecruiter, Wellfound, Remote OK, We Work Remotely, FlexJobs, JobStreet, Kalibrr, OnlineJobs.ph, Bossjob, Glints, Talent.com?
7. Are LinkedIn/Indeed postings organic, sponsored, limited listings, or paid slots?
8. What is included under $1K/month for 10-20 active roles and 100-300+ applicants/role?
9. Are there usage limits, posting caps, feed eligibility requirements, or moderation risks?
10. Can we export candidates/applications to Notion via API, webhook, Zapier/Make, CSV, or candidate export?
11. Can we run a live pilot with 2-3 real roles before committing annually?

## Final Recommendation

Do not lead with Greenhouse/Lever/BambooHR/SmartRecruiters unless the strategy changes from "distribution" to "full recruiting system replacement."

Run this sequence:

1. JobTarget demo.
2. eQuestXpress demo.
3. JOIN trial/demo if active-job cap works.
4. JazzHR demo as competitor benchmark and budget ATS fallback.
5. Workable demo if ATS workflow might replace Notion.
6. Ashby demo only if you are open to making the ATS the recruiting source of truth.

Decision rule:

- If JobTarget or eQuest can redirect to Care & Bloom apply URLs with source tracking and cover the key boards, choose distribution-first.
- If no distribution-first tool preserves field parity/source tracking, choose JazzHR or Workable.
- If workflow/data rigor becomes more important than broad board posting, choose Ashby.

## Sources

- JobTarget Marketplace: https://www.jobtarget.com/job-site-marketplace
- JobTarget pricing: https://support.jobtarget.com/jobtarget-help-center/how-much-does-it-cost-to-use-jobtarget
- JobTarget partner FAQ fees: https://platform.jobtarget.com/oc/partner/faq
- JobTarget job creation/import paths: https://support.jobtarget.com/jobtarget-help-center/jt101-how-do-jobs-land-in-jobtarget
- eQuestXpress: https://www.equest.com/xpress/
- eQuest global posting: https://www.equest.com/solutions/global-job-postings/
- eQuest AutoPost: https://www.equest.com/solutions/autopost/
- eQuest integrations/AutoPost: https://kb.equest.com/docs/job-board-integrations
- eQuest apply URL handling: https://support.equest.com/index.php?id=4255&pg=kb.page
- eQuest click/apply tracking: https://support.equest.com/index.php?id=3846&pg=kb.page
- JOIN pricing: https://join.com/pricing
- JOIN multiposting: https://join.com/features/multiposting
- JOIN API documentation: https://help.join.com/join-api/api-documentation
- JOIN create application API: https://docs.join.com/reference/createapplication-1
- JOIN application export: https://help.join.com/candidates-and-applications/application-export
- JazzHR pricing: https://www.jazzhr.com/pricing
- JazzHR high-volume/plan features: https://www.jazzhr.com/plans/pro-high-volume/
- JazzHR API/webhooks: https://apidoc.jazzhrapis.com/
- JazzHR Apply API: https://apidoc.jazzhrapis.com/custom-apply/
- JazzHR Candidate Export webhook: https://apidoc.jazzhrapis.com/candidate-export/
- Workable pricing/plans: https://help.workable.com/hc/en-us/articles/115011955988-Workable-plans-packages-and-pricing
- Workable job boards: https://help.workable.com/hc/en-us/articles/115012441868-Which-job-boards-can-I-post-to-through-Workable
- Workable job shortlinks: https://help.workable.com/hc/en-us/articles/115012301427-Using-the-job-shortlink
- Workable custom forms: https://help.workable.com/hc/en-us/articles/115012231948-Customizing-the-application-form
- Workable source tracking: https://help.workable.com/hc/en-us/articles/115012901987-Tracking-candidate-sources
- Workable API: https://help.workable.com/hc/en-us/articles/115013356548-Workable-API-Documentation
- Workable careers page API: https://help.workable.com/hc/en-us/articles/115012771647-Using-the-Workable-API-to-create-a-careers-page
- Ashby job board connections: https://docs.ashbyhq.com/how-do-i-set-up-job-board-connections
- Ashby custom careers page API: https://developers.ashbyhq.com/docs/creating-a-custom-careers-page
- Ashby application form submit: https://developers.ashbyhq.com/reference/applicationformsubmit
- Ashby application forms: https://docs.ashbyhq.com/application-forms
- Ashby source tracking: https://docs.ashbyhq.com/tracking-the-source-of-an-application
- Ashby lightweight job posting API: https://docs.ashbyhq.com/using-the-lightweight-job-posting-api-to-list-openings-on-your-site
- Ashby pricing: https://www.ashbyhq.com/pricing
- Recruitee overview/boards: https://support.recruitee.com/en/articles/2116811-what-is-recruitee
- Recruitee job board posting: https://support.recruitee.com/en/articles/1066253-post-your-jobs-to-job-boards
- Recruitee pricing/slots: https://support.recruitee.com/en/articles/9263941-feature-comparison-for-subscription-changes
- Teamtailor pricing: https://www.teamtailor.com/en-us/pricing/
- Teamtailor marketplace: https://support.teamtailor.com/en/articles/2861357-teamtailor-marketplace
- Teamtailor free channels: https://support.teamtailor.com/en/articles/5402774-overview-of-the-free-channels
- Teamtailor LinkedIn limited listings: https://support.teamtailor.com/en/articles/5543488-publish-jobs-on-linkedin-limited-listings
- Zoho Recruit pricing PDF: https://www.zoho.com/sites/default/files/recruit/zoho-recruit-corporate-usd.pdf
- BambooHR pricing/features: https://www.bamboohr.com/pricing/
- BambooHR hiring: https://www.bamboohr.com/hr-software/hiring-and-onboarding
- SmartRecruiters pricing: https://www.smartrecruiters.com/pricing/
- SmartRecruiters SmartDistribute: https://ta.smartrecruiters.com/rs/664-NIC-529/images/SR-Product-Sheet-SmartDistribute.pdf
- Manatal pricing: https://www.manatal.com/pricing
- Manatal job board posting: https://support.manatal.com/docs/premium-job-board-posting
- Loxo Boost: https://www.loxo.co/products/boost
- Recruiterflow pricing: https://recruiterflow.com/pricing
- Pinpoint job board advertising: https://www.pinpointhq.com/features/job-board-advertising-software/
- 50skills: https://www.50skills.com/
- 50hire: https://www.50hire.com/
- Broadbean distribution: https://www.broadbean.com/product-suite/job-distribution-platform/
- VONQ HAPI: https://www.vonq.com/hapi/
- VONQ Job Post: https://www.vonq.com/job-post-fast-load/
- Google JobPosting schema: https://developers.google.com/search/docs/appearance/structured-data/job-posting
- Indeed XML/feed/API: https://docs.indeed.com/indeed-apply/xml-feed
- Indeed API guides: https://docs.indeed.com/api-guides/
- LinkedIn Job Posting API: https://learn.microsoft.com/en-us/linkedin/talent/job-postings/api/overview
- ZipRecruiter Apply Webhook: https://www.ziprecruiter.com/partner/documentation/apply-webhook/
