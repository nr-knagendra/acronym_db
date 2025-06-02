// In data.js
const acronymData = [
    {
        "acronym": "3PAO",
        "context": "Technology",
        "shortExplanation": "Third Party Assessment Organization\t",
        "longExplanation": "Organization that performs audits of FedRAMP providers",
        "link": ""
    },
    {
        "acronym": "401",
        "context": "Project Name",
        "shortExplanation": "Project 401 also know as the Issue Tracker",
        "longExplanation": "Unified Quality System - all engineering, product, and roadmap work is tracked in a single system (Jira)",
        "link": ""
    },
    {
        "acronym": "A&C",
        "context": "Go to Market ",
        "shortExplanation": "Alliances and Channels",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/ac"
    },
    {
        "acronym": "AAA",
        "context": "NR Internal Name",
        "shortExplanation": "Account, Authentication, Access",
        "longExplanation": "An internal New Relic product team",
        "link": ""
    },
    {
        "acronym": "ABM",
        "context": "Go to Market ",
        "shortExplanation": "Account-based Marketing",
        "longExplanation": "Strategic approach to business marketing",
        "link": "https://en.wikipedia.org/wiki/Account-based_marketing"
    },
    {
        "acronym": "ABR",
        "context": "NR Lingo",
        "shortExplanation": "Account-based Routing",
        "longExplanation": "part of the cell based architecture",
        "link": ""
    },
    {
        "acronym": "Absinthe",
        "context": "Technology",
        "shortExplanation": "Elixir's GraphQL library, used in NerdGraph",
        "longExplanation": "",
        "link": "https://hexdocs.pm/absinthe/overview.html"
    },
    {
        "acronym": "ABSM",
        "context": "Go to Market ",
        "shortExplanation": "Account-based Sales & Marketing",
        "longExplanation": "Strategic approach to business marketing",
        "link": "https://en.wikipedia.org/wiki/Account-based_marketing"
    },
    {
        "acronym": "AC",
        "context": "NR Internal Name",
        "shortExplanation": "",
        "longExplanation": "work started under the \"super agent\" name, but in 2024 this was rebranded to NR Control",
        "link": ""
    },
    {
        "acronym": "ACE",
        "context": "NR Internal Name",
        "shortExplanation": "AWS Customer Engagement",
        "longExplanation": "an AWS portal that New Relic (as an AWS partner vendor) interacts with",
        "link": "https://nerdlife.datanerd.us/new-relic/aws-isv-accelerate-program"
    },
    {
        "acronym": "ACR",
        "context": "Go to Market ",
        "shortExplanation": "Annual Committed Revenue",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "ADR",
        "context": "NR Lingo",
        "shortExplanation": "Architectural Decision Record",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/process-improvement-architectural-decision-records-adrs"
    },
    {
        "acronym": "AE",
        "context": "Corporate Lingo",
        "shortExplanation": "Account Executive",
        "longExplanation": " Responsible for the overall account strategy, account plan, and the face between the customer and New Relic",
        "link": ""
    },
    {
        "acronym": "AEB",
        "context": "Technology",
        "shortExplanation": "Analytical Event Batches",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "AEP",
        "context": "Go to Market ",
        "shortExplanation": "Account Entitlement Package",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "AES/GCM",
        "context": "Security and Compliance",
        "shortExplanation": "Advanced Encryption Standard, Galois/Counter Mode",
        "longExplanation": "Cryptographic method",
        "link": "https://docs.google.com/document/d/1epmbNJKILJMw3hBJTCf5E_dfZzUTmiGITLoMa6OMNHA/edit"
    },
    {
        "acronym": "AGC",
        "context": "Corporate Lingo",
        "shortExplanation": "Assistant General Counsel",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "AHC",
        "context": "NR Lingo",
        "shortExplanation": "All Hands Call",
        "longExplanation": "Informational meeting for \"all hands\" or all roles",
        "link": ""
    },
    {
        "acronym": "AICU",
        "context": "NR Lingo",
        "shortExplanation": "Application Instance Compute Unit",
        "longExplanation": "Deprecated pricing model ",
        "link": "https://nerdlife.datanerd.us/new-relic/aicu-deprecated-pricing-model"
    },
    {
        "acronym": "AIG",
        "context": "NR Internal Name",
        "shortExplanation": "Alerts & Intelligence Group",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "AIOPS",
        "context": "Go to Market ",
        "shortExplanation": "Artificial Intelligence for IT Operations",
        "longExplanation": "A term coined by Gartner in 2016 as an industry category for machine learning analytics technology that enhances IT operations analytics.",
        "link": ""
    },
    {
        "acronym": "AIR",
        "context": "NR Internal Name",
        "shortExplanation": "Applied Intelligence Research",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "AIS",
        "context": "NR Internal Name",
        "shortExplanation": "Applied Intelligence Services",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/applied-intelligence-aiops"
    },
    {
        "acronym": "AMA",
        "context": "NR Lingo",
        "shortExplanation": "Ask Me Anything",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "AMCN",
        "context": "Go to Market ",
        "shortExplanation": "AMC Networks (a customer of NR)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "AMER",
        "context": "Corporate Lingo",
        "shortExplanation": "Americas",
        "longExplanation": "Refers to timezones or other details related to the Americas/Western hemisphere",
        "link": ""
    },
    {
        "acronym": "AMI",
        "context": "Technology",
        "shortExplanation": "Amazon Machine Images",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "AMPIL",
        "context": "NR Internal Name",
        "shortExplanation": "AWS Marketplace Integration Layer",
        "longExplanation": "",
        "link": "https://newrelic.atlassian.net/wiki/spaces/GROW/pages/2617376876/AWS+Marketplace+Integration+Layer+AMPIL"
    },
    {
        "acronym": "AMQP",
        "context": "Technology",
        "shortExplanation": "Advanced Messgae Queuing Protocol",
        "longExplanation": "An open standard application layer protocol for message-oriented middleware.",
        "link": ""
    },
    {
        "acronym": "AMS ",
        "context": "NR Internal Name",
        "shortExplanation": "Authorization Management Service",
        "longExplanation": "",
        "link": "https://source.datanerd.us/account-auth-and-access/authorization_management_service/blob/master/db/seeds.rb"
    },
    {
        "acronym": "ANR",
        "context": "NR Lingo",
        "shortExplanation": "Application Not Responding",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "AOP",
        "context": "Corporate Lingo",
        "shortExplanation": "Annual Operating Plan",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "APAC",
        "context": "Corporate Lingo",
        "shortExplanation": "Asia-Pacific",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "Apdex",
        "context": "Technology",
        "shortExplanation": "Application Performance Index - an open standard to measure how well an app works",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "APEC",
        "context": "Corporate Lingo",
        "shortExplanation": "Asia Pacific Economic Cooperation",
        "longExplanation": "",
        "link": "https://www.apec.org/"
    },
    {
        "acronym": "API",
        "context": "Technology",
        "shortExplanation": "Application Programming Interface",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "APIKS",
        "context": "",
        "shortExplanation": "API Key Service (run by the ASE team)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "APJ",
        "context": "Corporate Lingo",
        "shortExplanation": "Asia-Pacific & Japan",
        "longExplanation": "Refers to timezones or other details related to the Asia-Pacific and Japanese time zones and markets",
        "link": "https://nerdlife.datanerd.us/new-relic/apj"
    },
    {
        "acronym": "APM",
        "context": "Technology",
        "shortExplanation": "Application Performance Monitoring",
        "longExplanation": "https://newrelic.com/products/application-monitoring",
        "link": "https://nerdlife.datanerd.us/new-relic/apm-11f689de-e839-4714-a884-7c1c456d4590"
    },
    {
        "acronym": "APN",
        "context": "Technology",
        "shortExplanation": "Amazon Partner Network",
        "longExplanation": "",
        "link": "https://aws.amazon.com/partners/"
    },
    {
        "acronym": "APoF",
        "context": "Technology",
        "shortExplanation": "Annual Pool of Funds",
        "longExplanation": "One of the Buying Programs detailed under the Pricing Options section of FY21 Corporate Announcements",
        "link": "https://sites.google.com/newrelic.com/pricing-strategy/pricing/pricing-options"
    },
    {
        "acronym": "AppD",
        "context": "Go to Market ",
        "shortExplanation": "App Dynamics",
        "longExplanation": "A New Relic competitor",
        "link": ""
    },
    {
        "acronym": "AppD",
        "context": "Technology",
        "shortExplanation": "App Dynamics",
        "longExplanation": "APM competitor ",
        "link": "https://en.wikipedia.org/wiki/AppDynamics"
    },
    {
        "acronym": "AQR",
        "context": "Go to Market ",
        "shortExplanation": "AQR Capital Management",
        "longExplanation": "simply a customer name, but looks like our typical 3-letter technology acronym",
        "link": ""
    },
    {
        "acronym": "ARC",
        "context": "NR Lingo",
        "shortExplanation": "Accelerating Relic Careers",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/accelerating-relic-careers-arc"
    },
    {
        "acronym": "ARNs",
        "context": "Technology",
        "shortExplanation": "Amazon Resource Names",
        "longExplanation": "",
        "link": "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html"
    },
    {
        "acronym": "ARR",
        "context": "Corporate Lingo",
        "shortExplanation": "Annual Recurring Revenue",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "ARS",
        "context": "",
        "shortExplanation": "Archive-reprocessing-service",
        "longExplanation": "seen on a 2025 tech talk about Metrics processing",
        "link": ""
    },
    {
        "acronym": "ASE",
        "context": "NR Internal Name",
        "shortExplanation": "API & Service Ecosystem Team",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "ASM",
        "context": "NR Internal Name",
        "shortExplanation": "Account Stream Monitor",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "ASN",
        "context": "Technology",
        "shortExplanation": "Autonomous System Number",
        "longExplanation": "",
        "link": "https://docs.newrelic.com/attribute-dictionary/pageview/asn"
    },
    {
        "acronym": "ATG",
        "context": "Corporate Lingo",
        "shortExplanation": "Advanced Technology Group",
        "longExplanation": "Successor program to \"Wizards\"",
        "link": ""
    },
    {
        "acronym": "ATM",
        "context": "NR Internal Name",
        "shortExplanation": "Account Telemetry Management",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "ATO",
        "context": "Security and Compliance",
        "shortExplanation": "Authorized To Operate",
        "longExplanation": "Under FedRAMP",
        "link": "https://www.fedramp.gov/issuing-an-authority-to-operate/"
    },
    {
        "acronym": "ATO",
        "context": "",
        "shortExplanation": "Authorized To Operate",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "ATR",
        "context": "Go to Market ",
        "shortExplanation": "Available to Renew",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "ATS",
        "context": "Corporate Lingo",
        "shortExplanation": "Applicant Tracking System",
        "longExplanation": "NR uses Jobvite https://app.jobvite.com",
        "link": ""
    },
    {
        "acronym": "ATSE",
        "context": "NR Lingo",
        "shortExplanation": "Associate technical support engineer",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "AUM",
        "context": "NR Internal Name",
        "shortExplanation": "Automated User Management",
        "longExplanation": "",
        "link": "https://docs.google.com/document/d/1GwCBYfnvo39OzD2gYS6_9WVKDhmALzUIqFvs9XNkUZg/"
    },
    {
        "acronym": "AUP",
        "context": "Corporate Lingo",
        "shortExplanation": "Acceptable Use Policy",
        "longExplanation": "Rules for customers when using New Relic services",
        "link": "https://docs.newrelic.com/docs/licenses/license-information/general-usage-licenses/acceptable-use-policy"
    },
    {
        "acronym": "AWS",
        "context": "Technology",
        "shortExplanation": "Amazon Web Services",
        "longExplanation": "See also glossary in https://nerdlife.datanerd.us/new-relic/aws-security-best-practices",
        "link": "https://aws.amazon.com/"
    },
    {
        "acronym": "AZ",
        "context": "Technology",
        "shortExplanation": "Availability Zone (in AWS)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "Azure",
        "context": "Technology",
        "shortExplanation": "Microsoft Azure",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "B2B",
        "context": "Go to Market ",
        "shortExplanation": "Business-to-Business",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "B2C",
        "context": "Go to Market ",
        "shortExplanation": "Business-to-Consumer",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "B2G",
        "context": "Go to Market ",
        "shortExplanation": "Business to Government",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "BA",
        "context": "Technology",
        "shortExplanation": "Background Aggregation",
        "longExplanation": "A feature within Dirac Platform that allow metrics to be aggregated once at-rest for better query performance",
        "link": "https://newrelic.atlassian.net/wiki/spaces/TDP/pages/3253764649/Background+Aggregation+-+Feature+roadmap"
    },
    {
        "acronym": "BA",
        "context": "NR Internal Name",
        "shortExplanation": "Business Application",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "BAA",
        "context": "Legal",
        "shortExplanation": "Business Associate Agreement",
        "longExplanation": "Agreement between a company dealing with specific data (ie. Personal Health Information) and their business associates. See also HIPAA",
        "link": ""
    },
    {
        "acronym": "BAL",
        "context": "Legal",
        "shortExplanation": "Berry Appleman & Leiden",
        "longExplanation": "External immigration counsel",
        "link": "https://www.balglobal.com/"
    },
    {
        "acronym": "BAMS",
        "context": "Corporate Lingo",
        "shortExplanation": "Business Applications Marketing Systems",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "BCCC",
        "context": "Go to Market ",
        "shortExplanation": "Brand, Customer, Content, Comms",
        "longExplanation": "",
        "link": "https://docs.google.com/presentation/d/1zqRzcibaVqlel0Sufiyp5ezWSWPAFSuEj4kYwYJlUQw/"
    },
    {
        "acronym": "BCM",
        "context": "NR Internal Name",
        "shortExplanation": "Billable Consumption Metric (or Monthly ?)",
        "longExplanation": "meant to replace CRR in 2025 as the leading product analytics messure ",
        "link": ""
    },
    {
        "acronym": "BCP",
        "context": "Security and Compliance",
        "shortExplanation": "Business Continuity Plan",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "BDR",
        "context": "Corporate Lingo",
        "shortExplanation": "Business Development Representative",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "BE",
        "context": "NR Internal Name",
        "shortExplanation": "either Business Engineering or (in EPD) Back End (FE/BE)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "BI",
        "context": "Corporate Lingo",
        "shortExplanation": "Business Intelligence",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "BIC",
        "context": "NR Lingo",
        "shortExplanation": "Billion Inspected Count",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "BMDS",
        "context": "NR Lingo",
        "shortExplanation": "Basic MetaData Service",
        "longExplanation": "Tool to aggregate data from APM agents as they connect to NR.",
        "link": ""
    },
    {
        "acronym": "BoFu",
        "context": "Go to Market ",
        "shortExplanation": "Bottom of the Funnel (in Marketing)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "BOM",
        "context": "",
        "shortExplanation": "Bill of materials",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "BOQ",
        "context": "Finance",
        "shortExplanation": "Bill of quantities (similar to BOM)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "BRB",
        "context": "NR Lingo",
        "shortExplanation": "Big Red Button",
        "longExplanation": "Used during incidents to call in the NERF (New Relic Emergency Response Force)",
        "link": ""
    },
    {
        "acronym": "BSA",
        "context": "Corporate Lingo",
        "shortExplanation": "Business Systems Analyst ",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "BSE",
        "context": "Go to Market ",
        "shortExplanation": "Billion Scanned Events",
        "longExplanation": "Used to calculate QBP ",
        "link": ""
    },
    {
        "acronym": "BSE",
        "context": "NR Internal Name",
        "shortExplanation": "Billion scanned events",
        "longExplanation": "CCU is the unit of measure customers are charged for, and therefore is the core of our analysis.  Billion Scanned Events (BSE) is the current measure we can query today as work to have CCU in one Event is still in progress\n",
        "link": ""
    },
    {
        "acronym": "BSE",
        "context": "NR Internal Name",
        "shortExplanation": "Business Support Engineers",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "BV&S",
        "context": "Go to Market ",
        "shortExplanation": "Business Value & Strategy",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/bv-s-team"
    },
    {
        "acronym": "BVA",
        "context": "Go to Market ",
        "shortExplanation": "Business Value Analysis",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "CA",
        "context": "NR Internal Name",
        "shortExplanation": "Customer Adoption   ",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "CAB",
        "context": "NR Lingo",
        "shortExplanation": "Change Acceptance Board",
        "longExplanation": "See also Change Advisory Board, https://upboard.datanerd.us/changes",
        "link": "https://pages.datanerd.us/engineering-management/processes/software-development-process/cab.html"
    },
    {
        "acronym": "CAB",
        "context": "Corporate Lingo",
        "shortExplanation": "Customer Advisory Board",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/search/Customer%20advisory%20board/all"
    },
    {
        "acronym": "CAGR",
        "context": "Corporate Lingo",
        "shortExplanation": "Compound Annual Growth Rate",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "CAIQ",
        "context": "Security and Compliance",
        "shortExplanation": "Consensus Assessment Initiative Questionnaire",
        "longExplanation": "Security questionnaire",
        "link": "https://cloudsecurityalliance.org/blog/2021/09/01/what-is-caiq/"
    },
    {
        "acronym": "Cancel",
        "context": "NR Lingo",
        "shortExplanation": "Account that was paid is no longer paid nor active cc on file, generally downgraded to free tier",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "CAOS",
        "context": "Technology",
        "shortExplanation": "Core Agent & Open Standards",
        "longExplanation": "Infrastructure agent product team",
        "link": ""
    },
    {
        "acronym": "CAP",
        "context": "NR Internal Name",
        "shortExplanation": "Customer Adoption Platform",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/our-departments/product/customer-adoption"
    },
    {
        "acronym": "CAS",
        "context": "Go to Market ",
        "shortExplanation": "Cloud Adoption Solution",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/cloud-adoption-f345627b-cb6c-46b3-859b-f92c1ed40cf5"
    },
    {
        "acronym": "CASB",
        "context": "Security and Compliance",
        "shortExplanation": "Cloud Access Security Broker",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "CASH",
        "context": "NR Internal Name",
        "shortExplanation": "Cloud Architecture Savings Hub",
        "longExplanation": "Tiger team of experts that drive savings across the business",
        "link": ""
    },
    {
        "acronym": "CAT",
        "context": "NR Internal Name",
        "shortExplanation": "Cross-Application Tracing",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/new-apm-workflows-with-better-cat"
    },
    {
        "acronym": "CATS",
        "context": "",
        "shortExplanation": "seen in \"CATS SDK\" for Cell Automation, replacing the ArgoWorkflow. The TS doesn't stand for anything.",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "CBC",
        "context": "Security and Compliance",
        "shortExplanation": "Cipher Block Chaining",
        "longExplanation": "Cryptographic method, see also CTR and GCM",
        "link": ""
    },
    {
        "acronym": "CBPR",
        "context": "Technology",
        "shortExplanation": "APEC Cross-Border Privacy Rules",
        "longExplanation": "APIC privacy regulations. Ironically, they do not provide a securely accessible website",
        "link": "http://cbprs.org/"
    },
    {
        "acronym": "CBR",
        "context": "Go to Market ",
        "shortExplanation": "Customer Business Review",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "CCO",
        "context": "NR Internal Name",
        "shortExplanation": "Cloud Cost Optimization",
        "longExplanation": "The Cloud Cost Optimization team is driving FinOps across the business",
        "link": ""
    },
    {
        "acronym": "CCPA",
        "context": "Corporate Lingo",
        "shortExplanation": "California Consumer Privacy Act",
        "longExplanation": "",
        "link": "https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201720180SB1121"
    },
    {
        "acronym": "CCU",
        "context": "NR Internal Name",
        "shortExplanation": "Compute Capacity Units",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "CDC",
        "context": "Technology",
        "shortExplanation": "Change Data Capture (in the context of data processing)",
        "longExplanation": "Initially, CDC became popular as an alternative solution to batch data replication for populating data warehouses for Extract Transform Load (ETL) jobs. In recent years, CDC has become the de facto method for migrating to the cloud.",
        "link": "https://www.confluent.io/learn/change-data-capture/"
    },
    {
        "acronym": "CDD",
        "context": "",
        "shortExplanation": "Change Design Document",
        "longExplanation": "",
        "link": "https://newrelic.atlassian.net/wiki/spaces/TDP/pages/2277539989/TDP+Change+Design+Docs"
    },
    {
        "acronym": "CDP",
        "context": "NR Internal Name",
        "shortExplanation": "Core Data Platform",
        "longExplanation": "previous name of the Telemetry Data Platform, see also https://nerdlife.datanerd.us/new-relic/core-data-platform-cdp",
        "link": "https://nerdlife.datanerd.us/new-relic/architecture-overview-march-2020-3e138cec-ed93-4f68-b840-11c872ccfd89"
    },
    {
        "acronym": "CDS",
        "context": "NR Internal Name",
        "shortExplanation": "Chart Data Service",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "cdstrm",
        "context": "NR Internal Name",
        "shortExplanation": "Codestream (team)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "Cell",
        "context": "NR Internal Name",
        "shortExplanation": "Cellular Architecture",
        "longExplanation": "Cell Architecture is our technical strategy to, Enable an incremental move to the public cloud, unlock repeatable scaling for our services, and limit the blast radius of incidents",
        "link": "https://pages.datanerd.us/site-engineering/nr-platform-docs/cell/index.html"
    },
    {
        "acronym": "CEO",
        "context": "Go to Market ",
        "shortExplanation": "Chief executive officer (the highest managing director) / Customer Engagement Objects / Consumption engagement Opportunity",
        "longExplanation": "A Salesforce (SFDC) record that captures measurable business outcomes associated with Sales Plays and CVP Milestones that the Pods are working to achieve CRR growth. This was rolled out in September FY23 to Pods as how we will track CRR Pipeline moving forward.",
        "link": "Job Aid"
    },
    {
        "acronym": "CEOs",
        "context": "Go to Market ",
        "shortExplanation": "Customer Engagement Objects",
        "longExplanation": "For Sales and CA to create in SFDC to track activities being done to drive consumption within an account.",
        "link": ""
    },
    {
        "acronym": "CF",
        "context": "NR Internal Name",
        "shortExplanation": "Container Fabric",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/container-fabric-kubernetes-platform-update-57278461-fbbc-4bbf-9777-5b84a2af3327"
    },
    {
        "acronym": "CFN",
        "context": "Technology",
        "shortExplanation": "AWS CloudFormation (sometimes \"CFn\")",
        "longExplanation": "",
        "link": "https://docs.aws.amazon.com/cloudformation/"
    },
    {
        "acronym": "CFP",
        "context": "Technology",
        "shortExplanation": "Call For Papers/Proposals",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "CFT",
        "context": "",
        "shortExplanation": "Cloud Formation Template (Guided Install)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "CGO",
        "context": "",
        "shortExplanation": "lets Go (go-lang) packages call C code",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "Churn",
        "context": "Corporate Lingo",
        "shortExplanation": "customer loss / attrition, from \"churn rate\"",
        "longExplanation": "Customer who paid us last month but is not paying us this month (includes Regressions and Cancel) ",
        "link": "https://en.wikipedia.org/wiki/Churn_rate"
    },
    {
        "acronym": "CI",
        "context": "NR Internal Name",
        "shortExplanation": "Competitive Intelligence",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/competitive-intelligence"
    },
    {
        "acronym": "CI",
        "context": "NR Lingo",
        "shortExplanation": "Custom Instrumentation",
        "longExplanation": "A custom way for agents to instrument apps.",
        "link": "https://docs.newrelic.com/docs/apm/agents/manage-apm-agents/agent-data/custom-instrumentation/"
    },
    {
        "acronym": "CI/CD",
        "context": "Technology",
        "shortExplanation": "Continuous Integration, Continuous Deployment",
        "longExplanation": "",
        "link": "https://en.wikipedia.org/wiki/CI/CD"
    },
    {
        "acronym": "CIDR",
        "context": "Technology",
        "shortExplanation": "Classless Inter-Domain Routing",
        "longExplanation": "(not heavily used, but confusingly shows up on in NR onboarding training)",
        "link": ""
    },
    {
        "acronym": "CISSP",
        "context": "Security and Compliance",
        "shortExplanation": "Certified Information Systems Security Professional",
        "longExplanation": "",
        "link": "https://en.wikipedia.org/wiki/Certified_Information_Systems_Security_Professional"
    },
    {
        "acronym": "CJS",
        "context": "Corporate Lingo",
        "shortExplanation": "Customer Journey Solutions",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/customer-journey"
    },
    {
        "acronym": "CKS",
        "context": "NR Internal Name",
        "shortExplanation": "CLM10-Keda-Scaler",
        "longExplanation": "",
        "link": "https://source.datanerd.us/streaming-sre/clm10-keda-scaler"
    },
    {
        "acronym": "CKU",
        "context": "Technology",
        "shortExplanation": "Confluent Unit for Kafka (sic!)",
        "longExplanation": "",
        "link": "https://docs.confluent.io/_glossary.html#term-Confluent-Unit-for-Kafka-CKU"
    },
    {
        "acronym": "CL",
        "context": "NR Lingo",
        "shortExplanation": "Communication Lead",
        "longExplanation": "Person who interfaces with customer/GTSE during incidents",
        "link": ""
    },
    {
        "acronym": "CLCA",
        "context": "Corporate Lingo",
        "shortExplanation": "Closed Loop Corrective Action",
        "longExplanation": "Describes an end to end process for identifying issues and taking corrective steps to ensure no recurrance.",
        "link": ""
    },
    {
        "acronym": "CLI",
        "context": "Technology",
        "shortExplanation": "Command Line Interface (for NR1)",
        "longExplanation": "",
        "link": "https://source.datanerd.us/pages/wanda/cli-docs/plugins/package/README.html"
    },
    {
        "acronym": "CLM",
        "context": "NR Internal Name",
        "shortExplanation": "Code-Level Metrics",
        "longExplanation": "",
        "link": "https://source.datanerd.us/agents/agent-specs/pull/571/files"
    },
    {
        "acronym": "CLM",
        "context": "NR Internal Name",
        "shortExplanation": "Consumer Lag Monitor",
        "longExplanation": "often as \"CLM-10\"",
        "link": "https://source.datanerd.us/edge/consumer-lag-monitor/blob/master/README.md"
    },
    {
        "acronym": "CLR",
        "context": "Technology",
        "shortExplanation": "Common Language Runtime",
        "longExplanation": " Common Language Runtime (CLR) is the virtual machine component of Microsoft .NET Framework.",
        "link": "https://en.wikipedia.org/wiki/Common_Language_Runtime"
    },
    {
        "acronym": "CLS",
        "context": "Technology",
        "shortExplanation": "Cumulative Layout Shift",
        "longExplanation": "part of Web Core Vitals (Google), measures visual stability.",
        "link": "https://web.dev/articles/vitals"
    },
    {
        "acronym": "CM",
        "context": "NR Lingo",
        "shortExplanation": "Communication Manager / (or K8s' \"ConfigMaps\")",
        "longExplanation": "Coordinates emergency communication strategy across teams during an incident.",
        "link": "https://docs.google.com/document/d/13G3fPc0yjmbRRahokzFVs5A87wOwIm3pL6hvK5M4CuM/edit#heading=h.fxidx3uhd8il"
    },
    {
        "acronym": "CMO",
        "context": "Corporate Lingo",
        "shortExplanation": "Chief Marketing Officer",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "CMP",
        "context": "NR Internal Name",
        "shortExplanation": "Cloud Monitoring Platform (team)",
        "longExplanation": "Team in charge of ingesting Metrics from Cloud Providers (AWS, Azure, GCP...)",
        "link": ""
    },
    {
        "acronym": "CNCF",
        "context": "Technology",
        "shortExplanation": "Cloud Native Computing Foundation, a sub-foundation under The Linux Foundation",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "CO",
        "context": "",
        "shortExplanation": "Compile Once / Compile Once Initiative",
        "longExplanation": "",
        "link": "https://newrelic.atlassian.net/wiki/spaces/TDP/pages/3187900799/Query+Language+Development+-+Compile+Once+Initiative+or+Epic"
    },
    {
        "acronym": "CO",
        "context": "Go to Market ",
        "shortExplanation": "Consumption Opportunity",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "CO2",
        "context": "",
        "shortExplanation": "Compile Once Phase 2",
        "longExplanation": "",
        "link": "https://newrelic.atlassian.net/wiki/spaces/TDP/pages/3187900799/Query+Language+Development+-+Compile+Once+Initiative+or+Epic"
    },
    {
        "acronym": "CO3",
        "context": "",
        "shortExplanation": "Compile Once Phase 3",
        "longExplanation": "",
        "link": "https://newrelic.atlassian.net/wiki/spaces/TDP/pages/3187900799/Query+Language+Development+-+Compile+Once+Initiative+or+Epic"
    },
    {
        "acronym": "CofE",
        "context": "NR Lingo",
        "shortExplanation": "Centre of Excellence",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/observability-centre-of-excellence"
    },
    {
        "acronym": "COGS",
        "context": "Corporate Lingo",
        "shortExplanation": "Cost of Goods Sold",
        "longExplanation": "",
        "link": "https://newrelic.atlassian.net/wiki/spaces/TDP/pages/2384592913/COGS+Program+Plan+-+FY22+and+FY23"
    },
    {
        "acronym": "COI",
        "context": "Corporate Lingo",
        "shortExplanation": "Certificate of Insurance",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/coi-request"
    },
    {
        "acronym": "CoM",
        "context": "Go to Market ",
        "shortExplanation": "Command of the Message",
        "longExplanation": "Method to conduct sales discussions with customers",
        "link": ""
    },
    {
        "acronym": "COM (COMM)",
        "context": "Go to Market ",
        "shortExplanation": "Commercial",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "COMM",
        "context": "Go to Market ",
        "shortExplanation": "Commercial",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "CoP",
        "context": "Corporate Lingo",
        "shortExplanation": "Community of Practice",
        "longExplanation": "",
        "link": "https://hbr.org/2000/01/communities-of-practice-the-organizational-frontier"
    },
    {
        "acronym": "CORS",
        "context": "Technology",
        "shortExplanation": "Cross-Origin Resource Sharing",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "CPM",
        "context": "Corporate Lingo",
        "shortExplanation": "Consumption Pricing Model (corporate initiative)",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/consumption-pricing-models-program"
    },
    {
        "acronym": "CPM",
        "context": "NR Internal Name",
        "shortExplanation": "Containerized Private Minion",
        "longExplanation": "",
        "link": "https://docs.newrelic.com/docs/synthetics/new-relic-synthetics/private-locations/containerized-private-minion-cpm-configuration"
    },
    {
        "acronym": "CPO",
        "context": "Corporate Lingo",
        "shortExplanation": "Chief Product Officer",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "CPPO",
        "context": "Go to Market ",
        "shortExplanation": "Channel Partner Private Offers",
        "longExplanation": "enables Independent Software Vendors (ISVs) to authorize Consulting Partners to receive wholesale pricing on their software.",
        "link": "https://aws.amazon.com/marketplace/partners/channel-programs"
    },
    {
        "acronym": "CPQ",
        "context": "Go to Market ",
        "shortExplanation": "Configure Price Quote",
        "longExplanation": "The Quote Calculation and Creation tool in Salesforce and Order Form Generation Tool (which the customer signs)",
        "link": "https://en.wikipedia.org/wiki/Configure,_price_and_quote"
    },
    {
        "acronym": "CPS",
        "context": "NR Internal Name",
        "shortExplanation": "Cloud Platform Services",
        "longExplanation": "Within TDP - Infrastructure Services+Developer Platform Group",
        "link": ""
    },
    {
        "acronym": "CRA",
        "context": "NR Lingo",
        "shortExplanation": "Compute Readiness Assessment",
        "longExplanation": "\"GTM needs to perform CRA\" - a process done individually, customer by customer... The Compute Readiness Assessment (CRA) sets a standard, systemic protocol for the account team (AE and CA, SC or TAM, depending on the account)  to research, analyze, and understand customer’s historical Compute usage patterns and optimizations with internal stakeholders and the customer, and confirm go-forward Compute usage needs to obtain pricing approvals from the GTM Pricing team",
        "link": "https://docs.google.com/document/d/1oletD3NNzhDhIafc5YgG_ra6Iclgmtkm8CfTj4hDEDw/edit#heading=h.dj2w8nvkfqvg"
    },
    {
        "acronym": "CRO",
        "context": "Go to Market ",
        "shortExplanation": "Conversion Rate Optimization",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "CRR",
        "context": "Corporate Lingo",
        "shortExplanation": "Consumption Run Rate",
        "longExplanation": "How much data ingest revenue we're making from accounts in a given month",
        "link": "https://docs.google.com/presentation/d/1XHBiQ88rv8lqSsY7SfX9BGc6BShkM5kFc0XymJLnL-M/edit#slide=id.g13c02d880e4_0_34"
    },
    {
        "acronym": "CRUD",
        "context": "Technology",
        "shortExplanation": "Create, Read, Update, Delete",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "CSAE",
        "context": "Corporate Lingo",
        "shortExplanation": "Corporate Sales Account Executive",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "CSAE",
        "context": "Go to Market ",
        "shortExplanation": "Customer Success Account Executive",
        "longExplanation": "As of FY23, not a currently role in Go to Market at New Relic ",
        "link": ""
    },
    {
        "acronym": "CSE",
        "context": "NR Internal Name",
        "shortExplanation": "Customer Success Engineering",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/customer-success-engineering"
    },
    {
        "acronym": "CSERV",
        "context": "NR Lingo",
        "shortExplanation": "Correlation Services (team)",
        "longExplanation": "Now part of III; sometimes interchangeably used to describe the applications and pipeline",
        "link": ""
    },
    {
        "acronym": "CSG",
        "context": "NR Internal Name",
        "shortExplanation": "Customer Solutions Group",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "CSH",
        "context": "Corporate Lingo",
        "shortExplanation": "Community Service Hours",
        "longExplanation": "See also VTO (Volunteer Time Off)",
        "link": ""
    },
    {
        "acronym": "CSH",
        "context": "Corporate Lingo",
        "shortExplanation": "Customer Solutions Hub",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/introducing-the-customer-solutions-hub"
    },
    {
        "acronym": "CSI",
        "context": "NR Internal Name",
        "shortExplanation": "Cloud Secrets & Identity team",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "CSM",
        "context": "NR Internal Name",
        "shortExplanation": "Customer Success Manager",
        "longExplanation": "Existing customers technical relationship management ",
        "link": "https://nerdlife.datanerd.us/new-relic/influencing-the-digital-customer-success-manager-sales-and-tss-workshops-00aa697d-6f12-4409-b175-3cbbf1a803cb"
    },
    {
        "acronym": "CSO",
        "context": "NR Internal Name",
        "shortExplanation": "Chief Strategy Office",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/chief-strategy-office"
    },
    {
        "acronym": "CSP",
        "context": "NR Internal Name",
        "shortExplanation": "Client-Side Performance (1 of 4)",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/client-side-performance-group-formation-faq/introducing-the-client-side-performance-product-group"
    },
    {
        "acronym": "CSP",
        "context": "Technology",
        "shortExplanation": "Cloud Service Provider (1 of 4)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "CSP",
        "context": "Technology",
        "shortExplanation": "Configurable Security Policies (1 of 4)",
        "longExplanation": "Previously named LASP, see also HSM",
        "link": "https://nerdlife.datanerd.us/new-relic/configurable-security-policies-beta-is-here"
    },
    {
        "acronym": "CSP",
        "context": "Technology",
        "shortExplanation": "Content Security Policy (1 of 4)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "CSR",
        "context": "Corporate Lingo",
        "shortExplanation": "Corporate Social Responsibility",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "CSS",
        "context": "NR Internal Name",
        "shortExplanation": "Customer Success & Services",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/css-customer-success-services"
    },
    {
        "acronym": "CSS",
        "context": "NR Internal Name",
        "shortExplanation": "Customer Secret Store / Customer Secret Service",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "CTA",
        "context": "Corporate Lingo",
        "shortExplanation": "Call to Action",
        "longExplanation": "Marketing term",
        "link": ""
    },
    {
        "acronym": "CTR",
        "context": "Go to Market ",
        "shortExplanation": "Click-thru Rate",
        "longExplanation": "For email, (delivered emails/clicks).",
        "link": ""
    },
    {
        "acronym": "CTR",
        "context": "Security and Compliance",
        "shortExplanation": "CounTeR mode",
        "longExplanation": "Cryptographic method, see also AES, CBC and GCM",
        "link": ""
    },
    {
        "acronym": "Cumulus",
        "context": "Project Name",
        "shortExplanation": "Project to move from NR's own data centers into the AWS cloud (2023)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "CVP",
        "context": "Go to Market ",
        "shortExplanation": "Customer Value Plan",
        "longExplanation": "CVPs are a single \"living plan\" that defines the strategic goals we’re pursuing with  a customer, and the tactical everyday tasks executed to realize those goals. We are documenting our CVPs in Asana projects for each account.\n",
        "link": "Job Aid"
    },
    {
        "acronym": "CW",
        "context": "",
        "shortExplanation": "CloudWatch",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "CwC",
        "context": "Go to Market ",
        "shortExplanation": "Consumption with Commit",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/are-you-about-to-create-a-new-event-type-e72c0c9d-0c46-4005-96ef-ebc3d797f3da"
    },
    {
        "acronym": "CWMS",
        "context": "",
        "shortExplanation": "CloudWatch Metric Streams",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "CXPUI",
        "context": "NR Internal Name",
        "shortExplanation": "IO Community  ",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "CZ",
        "context": "NR Internal Name",
        "shortExplanation": "Cloud Zero",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "DACH",
        "context": "Go to Market ",
        "shortExplanation": "Germany, Austria, Switzerland",
        "longExplanation": "from Deutschland, Austria and the .ch country TLD",
        "link": ""
    },
    {
        "acronym": "DACI",
        "context": "Corporate Lingo",
        "shortExplanation": "Driver-Approver-Contributor-Informed (Decision Roles)",
        "longExplanation": "Part of the New Relic Decision Framework",
        "link": "https://nerdlife.datanerd.us/new-relic/services-support/other-services/decision-resource-center"
    },
    {
        "acronym": "DAQS",
        "context": "NR Internal Name",
        "shortExplanation": "Dirac Asynchronous Query System",
        "longExplanation": "Part of the New Relic Database",
        "link": "https://nerdlife.datanerd.us/new-relic/nrdb-dirac-daqs-huh"
    },
    {
        "acronym": "DART",
        "context": "Security and Compliance",
        "shortExplanation": "Detection and Response Team",
        "longExplanation": "Part of our Enterprise Security team, focused on corporate/New Relic information security event and incident management ",
        "link": ""
    },
    {
        "acronym": "DAU",
        "context": "Go to Market ",
        "shortExplanation": "Daily Active User",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "DB",
        "context": "Technology",
        "shortExplanation": "Database",
        "longExplanation": "Typically used in relation to services provided by the Database Engineering team.",
        "link": "https://pages.datanerd.us/site-engineering/nr-platform-docs/database-engineering/database-engineering.html"
    },
    {
        "acronym": "DBS",
        "context": "Corporate Lingo",
        "shortExplanation": "Digital Business Strategy",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "DC-Ops",
        "context": "NR Internal Name",
        "shortExplanation": "Data Center Operations",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "DCON",
        "context": "NR Internal Name",
        "shortExplanation": "Detection Configuration Team",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "DCOV",
        "context": "NR Lingo",
        "shortExplanation": "Detection Coverage (team)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "DCSM",
        "context": "NR Internal Name",
        "shortExplanation": "Digital Customer Success Manager",
        "longExplanation": "",
        "link": "https://team-store.datanerd.us/teams?teamId=84"
    },
    {
        "acronym": "DCX",
        "context": "Corporate Lingo",
        "shortExplanation": "Digital Customer eXperience",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/digital-customer-experience-dcx-93bed0f8-edd3-44bf-9a30-74cc9416c13f"
    },
    {
        "acronym": "DD",
        "context": "",
        "shortExplanation": "might mean DataDog (a competitor) or our internal Dropping Debatcher",
        "longExplanation": "Dropping Debatcher - It's the thing that sends all the data to dirac, alerting, drop rules, and a couple more",
        "link": ""
    },
    {
        "acronym": "DDC",
        "context": "Go to Market ",
        "shortExplanation": "Deep Discovery Call",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "DDOG (DD)",
        "context": "Technology",
        "shortExplanation": "Data Dog",
        "longExplanation": "NYSE Ticker for competitor, often referred to as DD",
        "link": "https://en.wikipedia.org/wiki/Datadog"
    },
    {
        "acronym": "DDoS",
        "context": "Technology",
        "shortExplanation": "Distributed Denial of Service",
        "longExplanation": "A method to attack websites and make them unreachable",
        "link": ""
    },
    {
        "acronym": "DDT",
        "context": "NR Internal Name",
        "shortExplanation": "Distributed Data Team",
        "longExplanation": "tl;dr Kafka and Friends. May now be known as Kafka Platform Team (DDT)",
        "link": "https://source.datanerd.us/ddt"
    },
    {
        "acronym": "DE&I",
        "context": "Corporate Lingo",
        "shortExplanation": "Diversity, Equity & Inclusion",
        "longExplanation": "also: Diverse, Equitable & Inclusive",
        "link": "https://nerdlife.datanerd.us/new-relic/diversity-equity-inclusion"
    },
    {
        "acronym": "DEI",
        "context": "NR Internal Name",
        "shortExplanation": "Dirac Event Inserter",
        "longExplanation": "Part of the New Relic Database",
        "link": "https://nerdlife.datanerd.us/new-relic/nrdb-dirac-daqs-huh"
    },
    {
        "acronym": "DEK",
        "context": "Security and Compliance",
        "shortExplanation": "Data Encryption Key",
        "longExplanation": "Cryptographic method",
        "link": "https://docs.google.com/document/d/1epmbNJKILJMw3hBJTCf5E_dfZzUTmiGITLoMa6OMNHA/"
    },
    {
        "acronym": "DEM",
        "context": "NR Lingo",
        "shortExplanation": "Digital Experience Monitoring",
        "longExplanation": "should not get confused with Digital Experience Management",
        "link": "https://nerdlife.datanerd.us/new-relic/digital-customer-experience-dcx-93bed0f8-edd3-44bf-9a30-74cc9416c13f"
    },
    {
        "acronym": "Demotron",
        "context": "NR Lingo",
        "shortExplanation": "",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "DEMPLA",
        "context": "NR Lingo",
        "shortExplanation": "Digital Experience Monitoring Platform",
        "longExplanation": "Ingest group within TDP",
        "link": ""
    },
    {
        "acronym": "DERS",
        "context": "NR Internal Name",
        "shortExplanation": "Dirac Enhanced Resource Sharing",
        "longExplanation": "",
        "link": "https://newrelic.atlassian.net/wiki/spaces/CPE1/pages/2777088001/Dirac+Evolved+Resource+Sharing+DERS+CDD"
    },
    {
        "acronym": "DET",
        "context": "NR Internal Name",
        "shortExplanation": "Dirac Event Transformer",
        "longExplanation": "Part of the New Relic Database",
        "link": "https://nerdlife.datanerd.us/new-relic/nrdb-dirac-daqs-huh"
    },
    {
        "acronym": "DEVA",
        "context": "NR Lingo",
        "shortExplanation": "Detection Evaluation ",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "DFD",
        "context": "",
        "shortExplanation": "Data Flow Diagram",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "DFEH",
        "context": "Legal",
        "shortExplanation": "Department of Fair Employment and Housing",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "DIBCAC",
        "context": "Security and Compliance",
        "shortExplanation": "Defense Industrial Base Cybersecurity Assessment Center",
        "longExplanation": "often used to describe the assessment itself, FIPS modules and FIPS mode might get reviewed",
        "link": ""
    },
    {
        "acronym": "Diego",
        "context": "Project Name",
        "shortExplanation": "Codename for the new homepage being built by the EntityUI team #project-diego",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "Dirac",
        "context": "NR Internal Name",
        "shortExplanation": "New Relic Database",
        "longExplanation": "Almost a synonym for the New Relic Database",
        "link": "https://nerdlife.datanerd.us/new-relic/nrdb-dirac-daqs-huh"
    },
    {
        "acronym": "DIS",
        "context": "Corporate Lingo",
        "shortExplanation": "Digital Intelligence Services",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/dis-the-thing-announcing-digital-intelligence-services-lead-by-zahur-peracha"
    },
    {
        "acronym": "DIS",
        "context": "Technology",
        "shortExplanation": "Digital Intelligence Services",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "DKE",
        "context": "NR Internal Name",
        "shortExplanation": "Deliberate Kafka Enclaves (old name), now known as just Kafka Enclaves (KE)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "DLL",
        "context": "Technology",
        "shortExplanation": "Dynamic Link Library",
        "longExplanation": "",
        "link": "https://g.co/kgs/XwXPwf"
    },
    {
        "acronym": "DLP",
        "context": "Security and Compliance",
        "shortExplanation": "Data Loss Prevention",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/data-loss-prevention-with-our-agents"
    },
    {
        "acronym": "DM",
        "context": "Internet Slang",
        "shortExplanation": "Direct Message",
        "longExplanation": "Often used to refer to a direct message in Slack",
        "link": ""
    },
    {
        "acronym": "DM",
        "context": "Technology",
        "shortExplanation": "Direct Message",
        "longExplanation": "Direct personal communication on a messenger such as Slack",
        "link": ""
    },
    {
        "acronym": "DML",
        "context": "Technology",
        "shortExplanation": "Data Manipulation Language",
        "longExplanation": "as in SQL: DQL, DML, DDL, DCL",
        "link": ""
    },
    {
        "acronym": "DMS",
        "context": "NR Internal Name",
        "shortExplanation": "Data Management Service",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "DN4G",
        "context": "NR Lingo",
        "shortExplanation": "DataNerds4Good",
        "longExplanation": "New Relic's employee volunteer program",
        "link": "https://nerdlife.datanerd.us/new-relic/about-datanerds4good"
    },
    {
        "acronym": "DND",
        "context": "Internet Slang",
        "shortExplanation": "Do Not Disturb",
        "longExplanation": "To mute/unmute notifications on your Mac: hold Option Key and click the notification center symbol (the 3 lines with the dots) in the top right corner of your screen",
        "link": ""
    },
    {
        "acronym": "DNS",
        "context": "Technology",
        "shortExplanation": "Domain Name Server",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "DPA",
        "context": "Security and Compliance",
        "shortExplanation": "Data Processor Agreement",
        "longExplanation": "GDPR related contract between two parties",
        "link": ""
    },
    {
        "acronym": "DPA",
        "context": "Security and Compliance",
        "shortExplanation": "Data Protection Addendum",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "DPA",
        "context": "Technology",
        "shortExplanation": "Database Performance Analyzer",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "DPF",
        "context": "NR Lingo",
        "shortExplanation": "Data Points Fetched (happens under the hood when we query data)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "DPIA",
        "context": "Security and Compliance",
        "shortExplanation": "Data Protection Impact Assessment",
        "longExplanation": "",
        "link": "https://docs.google.com/document/d/1GxR291YfkoJqUhoO4heemZ4KkSCk-gffgffWO0ZtLBk/edit"
    },
    {
        "acronym": "DPM",
        "context": "Technology",
        "shortExplanation": "Data points per minute",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "DPP",
        "context": "NR Internal Name",
        "shortExplanation": "Data Processing Platform",
        "longExplanation": "Reorg of previous CDP group",
        "link": ""
    },
    {
        "acronym": "DPS",
        "context": "Technology",
        "shortExplanation": "gu",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/digital-platform-services-update-how-to-engage-what-to-expect"
    },
    {
        "acronym": "DPT",
        "context": "NR Internal Name",
        "shortExplanation": "Developer Platform Team",
        "longExplanation": "Formerly Tools + PIE",
        "link": ""
    },
    {
        "acronym": "DR",
        "context": "Technology",
        "shortExplanation": "Disaster Recovery",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/disaster-recovery-2020-a83190ae-46cd-498d-9852-a7d556d7feb6"
    },
    {
        "acronym": "DRI",
        "context": "NR Lingo",
        "shortExplanation": "Do Not Repeat Incidents",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "DRL",
        "context": "NR Internal Name",
        "shortExplanation": "Dirac Resource Limiter",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "DRT",
        "context": "Go to Market ",
        "shortExplanation": "Deal Review Template",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "DSC",
        "context": "NR Internal Name",
        "shortExplanation": "Dirac Storage Compute",
        "longExplanation": "Cell type that manages data in Dirac’s persistence layer",
        "link": "https://pages.datanerd.us/dirac/dirac-dev-docs/docs/onboarding/cell-types-and-access/"
    },
    {
        "acronym": "DSL",
        "context": "Technology",
        "shortExplanation": "Domain-Specific Language",
        "longExplanation": "Used by some teams within the Telemetry Data Platform to manage their alerts",
        "link": "https://nerdlife.datanerd.us/new-relic/alerts-dsl-best-practices"
    },
    {
        "acronym": "DSM",
        "context": "Go to Market ",
        "shortExplanation": "Deal Strategy and Monetization",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/deal-strategy-monetization"
    },
    {
        "acronym": "DSR",
        "context": "Corporate Lingo",
        "shortExplanation": "Data Subject Requests",
        "longExplanation": "EU-GDPR requirement, see also PDR",
        "link": "https://nerdlife.datanerd.us/new-relic/personal-data-requests-process"
    },
    {
        "acronym": "DT",
        "context": "NR Internal Name",
        "shortExplanation": "Distributed Tracing",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "DT",
        "context": "Go to Market ",
        "shortExplanation": "Dynatrace",
        "longExplanation": "a New Relic competitor",
        "link": "https://en.wikipedia.org/wiki/Dynatrace"
    },
    {
        "acronym": "DTE",
        "context": "NR Internal Name",
        "shortExplanation": "Distributed Tracing Experience (team)",
        "longExplanation": "within APM extensions",
        "link": ""
    },
    {
        "acronym": "DTP",
        "context": "NR Internal Name",
        "shortExplanation": "Distributed Tracing Pipeline (team) ",
        "longExplanation": "within pipelines ",
        "link": ""
    },
    {
        "acronym": "DTS",
        "context": "Corporate Lingo",
        "shortExplanation": "Digital Transformation Services",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "DTS",
        "context": "Technology",
        "shortExplanation": "Digital Transformation Services",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "Dunning",
        "context": "Corporate Lingo",
        "shortExplanation": "Customers who have paid previously and now have defaulted on payment ",
        "longExplanation": "",
        "link": "https://en.wikipedia.org/wiki/Dunning_(process)"
    },
    {
        "acronym": "DUS",
        "context": "Go to Market ",
        "shortExplanation": "DocuSign",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "DVM",
        "context": "NR Lingo",
        "shortExplanation": "Detection Violation Management (an EPD team)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "DX",
        "context": "Corporate Lingo",
        "shortExplanation": "Developer Experience",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "E-STL",
        "context": "Corporate Lingo",
        "shortExplanation": "Engineering Single Thread Leader",
        "longExplanation": "See STL. Engineering STLs are expected to define the Technical Vision. the \"how\" + the \"who\"",
        "link": ""
    },
    {
        "acronym": "E@R",
        "context": "Security and Compliance",
        "shortExplanation": "Encryption At Rest",
        "longExplanation": "",
        "link": "https://docs.google.com/document/d/1epmbNJKILJMw3hBJTCf5E_dfZzUTmiGITLoMa6OMNHA/"
    },
    {
        "acronym": "E2E",
        "context": "Internet Slang",
        "shortExplanation": "End-to-End, for example testing from onboarding, deployment, instrumentation, data intake, dashboards and alerting",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "EAE",
        "context": "Corporate Lingo",
        "shortExplanation": "Enterprise Account Executive",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "EAM",
        "context": "NR Internal Name",
        "shortExplanation": "Enterprise Account Management",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "EAP",
        "context": "NR Lingo",
        "shortExplanation": "Early Access Program",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "EBC",
        "context": "Go to Market ",
        "shortExplanation": "Executive Briefing Center",
        "longExplanation": "Customers come to our offices for briefings, roadmap, etc.",
        "link": ""
    },
    {
        "acronym": "eBPF",
        "context": "",
        "shortExplanation": "Both a technology and sometimes used as an internal team name alias (Pixie / eBPF)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "EDP",
        "context": "Finance",
        "shortExplanation": "Enterprise Discount Program",
        "longExplanation": "Amazon Web Services Enterprise Discount Program. Essentially, this is AWS’s way to provide enterprises a discount off its services based on a volume (consumption) commitment.",
        "link": "https://www.parkmycloud.com/blog/aws-edp/"
    },
    {
        "acronym": "EDW",
        "context": "Technology",
        "shortExplanation": "Enterprise Data Warehouse",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "ee",
        "context": "NR Lingo",
        "shortExplanation": "Keep The Lights On",
        "longExplanation": "Refers to (development) work that doesn't add new features but just keeps things running.",
        "link": ""
    },
    {
        "acronym": "EEA",
        "context": "Corporate Lingo",
        "shortExplanation": "European Economic Area",
        "longExplanation": "",
        "link": "https://www.gov.uk/eu-eea"
    },
    {
        "acronym": "EEFF",
        "context": "NR Lingo",
        "shortExplanation": "Engineering Efficiency (setting Sprint standards etc.)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "EEOC",
        "context": "Legal",
        "shortExplanation": "Equal Employment Opportunity Commission",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "EIC",
        "context": "NR Lingo",
        "shortExplanation": "Event Insert Client",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "EIP",
        "context": "Technology",
        "shortExplanation": "AWS Elastic IP",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "EIS",
        "context": "NR Internal Name",
        "shortExplanation": "Entity Ingest and Synthesis - a sub-division of the Entity Platform team",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "EKS",
        "context": "Technology",
        "shortExplanation": "Amazon’s Elastic Kubernetes Service",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "ELB",
        "context": "",
        "shortExplanation": "Everywhere Load Balancing (an engineering team in NR) / Elastic Load Balancer (an AWS product)",
        "longExplanation": "",
        "link": "https://newrelic.atlassian.net/wiki/spaces/TDP/pages/1791459686/ELB+-+Load+Balancing"
    },
    {
        "acronym": "ELI5",
        "context": "Internet Slang",
        "shortExplanation": "Explain Like I'm Five (ELI5)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "ELIA",
        "context": "NR Lingo",
        "shortExplanation": "Entity Level Ingest Analysis",
        "longExplanation": "as in \"ELIA tables\" in our data analysis platforms",
        "link": ""
    },
    {
        "acronym": "ELIM",
        "context": "NR Internal Name",
        "shortExplanation": "Entity Level Ingest Metering",
        "longExplanation": "one of our back-end services",
        "link": "https://source.datanerd.us/data-management/entity-level-ingest-metering"
    },
    {
        "acronym": "ELK",
        "context": "Technology",
        "shortExplanation": "Elasticsearch Logstash Kibana",
        "longExplanation": "Open Source competitor for New Relic logs, see https://www.elastic.co/what-is/elk-stack",
        "link": "https://nerdlife.datanerd.us/new-relic/tco-how-much-does-free-really-cost "
    },
    {
        "acronym": "EM",
        "context": "Corporate Lingo",
        "shortExplanation": "Engineering manager",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "EMEA",
        "context": "Corporate Lingo",
        "shortExplanation": "Europe, Middle-East, Africa",
        "longExplanation": "Refers to timezones or other details related to the Europe, Middle East and Africa time zones and markets",
        "link": ""
    },
    {
        "acronym": "ENT",
        "context": "Corporate Lingo",
        "shortExplanation": "Enterprise",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "ENT",
        "context": "Go to Market ",
        "shortExplanation": "Enterprise",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "EOL",
        "context": "Technology",
        "shortExplanation": "End-of-Life",
        "longExplanation": "Usually refers to termination of any support for a product or service",
        "link": ""
    },
    {
        "acronym": "EP",
        "context": "NR Internal Name",
        "shortExplanation": "Entity Platform (team)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "EPD",
        "context": "NR Internal Name",
        "shortExplanation": "Engineering, Product, Design Division of New Relic",
        "longExplanation": "Refers to the Product Org's new functional structure under Siva and Manav",
        "link": ""
    },
    {
        "acronym": "ER",
        "context": "NR Internal Name",
        "shortExplanation": "Emergency Room",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "ERG",
        "context": "NR Internal Name",
        "shortExplanation": "Employee Resource Group",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/employee-resource-groups-ergs"
    },
    {
        "acronym": "ERP",
        "context": "",
        "shortExplanation": "Externally \"Enterprise resource planning\" (like SAP) but NR-internally also \"Entity and Relationships Platform\" (see EIS & ESA)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "ERS",
        "context": "NR Internal Name",
        "shortExplanation": "ELB Routing System",
        "longExplanation": "Replacement for Service Gateway, a service mesh within New Relic",
        "link": ""
    },
    {
        "acronym": "ES",
        "context": "NR Lingo",
        "shortExplanation": "Expert Services or Entity Synthesis ",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "ESA",
        "context": "NR Internal Name",
        "shortExplanation": "Entity Storage and Access - a sub-division of the Entity Platform team",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "ESB",
        "context": "Technology",
        "shortExplanation": "Enterprise Service Bus",
        "longExplanation": "Communication system between mutually interacting services",
        "link": ""
    },
    {
        "acronym": "ESE",
        "context": "NR Lingo",
        "shortExplanation": "Enterprise Sales Engineering (in GTM) or Enterprise Systems Engineering or Entity Synthesis Engine (in EPD)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "ESG",
        "context": "Corporate Lingo",
        "shortExplanation": "Environmental, Social, Governance",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "ESPP",
        "context": "Corporate Lingo",
        "shortExplanation": "Employee Stock Purchase Plan",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/espp"
    },
    {
        "acronym": "ETL",
        "context": "Technology",
        "shortExplanation": "Extract, Transform, Load",
        "longExplanation": "A data integration process that combines data from multiple data sources into a single, consistent data store that is loaded into a data warehouse or other target system.",
        "link": "https://www.ibm.com/cloud/learn/etl"
    },
    {
        "acronym": "ETM",
        "context": "Go to Market ",
        "shortExplanation": "Enterprise Territory Management",
        "longExplanation": "Enterprise territory management refers to the strategic allocation and organization of geographic regions or market segments to optimize sales and distribution efforts. It involves identifying, assigning, and managing sales territories to maximize revenue potential and ensure efficient resource utilization within a business.",
        "link": ""
    },
    {
        "acronym": "EU-DSGVO",
        "context": "Security and Compliance",
        "shortExplanation": "This is the German translation for GDPR",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "EUP",
        "context": "NR Internal Name",
        "shortExplanation": "Elevated User Permissions",
        "longExplanation": "A procedure in Grand Central to request NRPowerUser or EKS-DEV permissions; there's also a break-glass procedure requiring a NERF in an accident (when Grand Central isn't working)",
        "link": ""
    },
    {
        "acronym": "FaaS",
        "context": "Technology",
        "shortExplanation": "Function-as-a-Service (like AWS Lambda + Azure Functions + GCP Cloud Functions)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "FAIR",
        "context": "NR Internal Name",
        "shortExplanation": "Feature and Idea Request",
        "longExplanation": "A FAIR is a ‘Feature and Idea Request’, or any work you would like the GTS org to consider, outside of our already planned strategic initiative project work for the fiscal year.",
        "link": ""
    },
    {
        "acronym": "FAQ",
        "context": "Internet Slang",
        "shortExplanation": "Frequently Asked Questions",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "FAS",
        "context": "NR Internal Name",
        "shortExplanation": "Flexible Aggregated Streams",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "FB",
        "context": "",
        "shortExplanation": "Fluentbit (not Facebook)",
        "longExplanation": "used in the context of Logs, runs at the customer side ...",
        "link": ""
    },
    {
        "acronym": "FC",
        "context": "NR Internal Name",
        "shortExplanation": "Fleet Control (not to be confused with Fibre Channel)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "FCAPS",
        "context": "Technology",
        "shortExplanation": "Fault, Configuration, Accounting, Performance, Security (ISO network management)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "FDG",
        "context": "Go to Market ",
        "shortExplanation": "Full DownGrade",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "FDI",
        "context": "NR Lingo",
        "shortExplanation": "First Day Ingest",
        "longExplanation": "The percentage of accounts that ingest on the very first day of creating their account ",
        "link": ""
    },
    {
        "acronym": "FE",
        "context": "",
        "shortExplanation": "Front End ",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "FedRAMP",
        "context": "Security and Compliance",
        "shortExplanation": "Federal Risk and Authorization Management Program",
        "longExplanation": "A government-wide program that promotes the adoption of secure cloud services across the federal government by providing a standardized approach to security assessment, authorization, and continuous monitoring for cloud products and services.",
        "link": "https://www.fedramp.gov/"
    },
    {
        "acronym": "FEHA",
        "context": "Legal",
        "shortExplanation": "Fair Employment and Housing Act",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "FF",
        "context": "NR Lingo",
        "shortExplanation": "Field Flash (GTM communication) or (in EPD) Feature Flag - a way to have some functionality partially hidden and partially enabled, typically by setting the FF for those customers who should use it",
        "longExplanation": "The Feature Flag is also used under the hood for trouble shooting, for example with the FF use_all_partitions",
        "link": "https://nerdlife.datanerd.us/new-relic/feature-flags-roadmap"
    },
    {
        "acronym": "FGA",
        "context": "Internet Slang",
        "shortExplanation": "Fine-graned Access Control",
        "longExplanation": "heard on the tech talk about the secret store primitive",
        "link": ""
    },
    {
        "acronym": "FID",
        "context": "Technology",
        "shortExplanation": "First Input Delay ",
        "longExplanation": "as of 2024, Google is replacing FID by \"Interaction to Next Paint\" (INP) within the Core Web Vitals",
        "link": ""
    },
    {
        "acronym": "FIPS",
        "context": "Security and Compliance",
        "shortExplanation": "Federal Information Processing Standards",
        "longExplanation": "",
        "link": "https://www.nist.gov/itl/itl-publications/federal-information-processing-standards-fips"
    },
    {
        "acronym": "FIT",
        "context": "NR Internal Name",
        "shortExplanation": "Field Instrumentation Team",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/a-perfect-fit-the-field-instrumentation-team-joins-the-customer-solutions-hub"
    },
    {
        "acronym": "FKA",
        "context": "Internet Slang",
        "shortExplanation": "Formaly Known As",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "FKNA",
        "context": "Internet Slang",
        "shortExplanation": "Formerly Known As",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "FLL",
        "context": "NR Internal Name",
        "shortExplanation": "Front Line Leaders",
        "longExplanation": "Acronym for GTS lead roles",
        "link": ""
    },
    {
        "acronym": "FLM",
        "context": "NR Internal Name",
        "shortExplanation": "Front Line Manager",
        "longExplanation": "Acronym for GTS lead roles",
        "link": "https://nerdlife.datanerd.us/new-relic/front-line-manager-account-planning-resources"
    },
    {
        "acronym": "FLO",
        "context": "NR Internal Name",
        "shortExplanation": "Full Lifecycle Observability",
        "longExplanation": "",
        "link": "https://docs.google.com/document/d/1eAawnDFxAfM6W2Aod5jr4c2KwYMQhMMu6sTZ7WC3xOc/edit"
    },
    {
        "acronym": "FloCs",
        "context": "",
        "shortExplanation": "Federated Learning of Cohorts",
        "longExplanation": "",
        "link": "https://github.com/jkarlin/floc"
    },
    {
        "acronym": "FM",
        "context": "NR Lingo",
        "shortExplanation": "short for Fleet Management - yet to be launched as \"NR Control\"",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "FMLA",
        "context": "Legal",
        "shortExplanation": "Family and Medical Leave Act - a United States labor law",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "FOMO",
        "context": "Internet Slang",
        "shortExplanation": "Fear Of Missing Out",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "FOPP",
        "context": "NR Lingo",
        "shortExplanation": "Fluentbit, OpenTelemetry, Prometheus, Pixie",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "FP",
        "context": "",
        "shortExplanation": "Francisco Partners (co-owners of NR as per July 2023)",
        "longExplanation": "see TPG",
        "link": "https://www.franciscopartners.com/media/new-relic-to-be-acquired-by-francisco-partners-and-tpg-for-65-billion"
    },
    {
        "acronym": "FP&A",
        "context": "Corporate Lingo",
        "shortExplanation": "Financial Planning & Analysis",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/our-departments/ga/financial-planning-analysis-fpa"
    },
    {
        "acronym": "FPU",
        "context": "NR Lingo",
        "shortExplanation": "Full Platform User",
        "longExplanation": "FPU is high watermark billing",
        "link": ""
    },
    {
        "acronym": "FR",
        "context": "NR Lingo",
        "shortExplanation": "Feature Request",
        "longExplanation": "Used in Salesforce and POC/POVs for TSS teams",
        "link": ""
    },
    {
        "acronym": "FRB",
        "context": "",
        "shortExplanation": "Feature Request & Bug record",
        "longExplanation": "the link between a Jira FR (the \"what\") with the customer or prospect (in Salesforce)",
        "link": ""
    },
    {
        "acronym": "FS",
        "context": "NR Lingo",
        "shortExplanation": "FutureStack (user conference / demo day)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "FSI",
        "context": "NR Internal Name",
        "shortExplanation": "Full Stack Integrations",
        "longExplanation": " ",
        "link": ""
    },
    {
        "acronym": "FSM",
        "context": "NR Lingo",
        "shortExplanation": "Full Stack Monitoring",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/full-stack-monitoring"
    },
    {
        "acronym": "FSNY",
        "context": "",
        "shortExplanation": "FutureStack New York (see FS)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "FSO",
        "context": "NR Lingo",
        "shortExplanation": "Full Stack Observability",
        "longExplanation": "FSO is metered billing",
        "link": "https://nerdlife.datanerd.us/new-relic/gtm-full-stack-observability"
    },
    {
        "acronym": "FTE",
        "context": "NR Lingo",
        "shortExplanation": "First Time Exceeders",
        "longExplanation": "Free accounts which exceed the free-tier data ingest limit (opportunity for sales)",
        "link": ""
    },
    {
        "acronym": "FTE",
        "context": "Finance",
        "shortExplanation": "Full-time equivalent",
        "longExplanation": "The calculation of full-time equivalent (FTE) is an employee's scheduled hours divided by the employer's hours for a full-time workweek",
        "link": ""
    },
    {
        "acronym": "FTO",
        "context": "Corporate Lingo",
        "shortExplanation": "Flex Time Off",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "FUD",
        "context": "Go to Market ",
        "shortExplanation": "Fear / Uncertainty / Doubt - sawing FUD is often used on competitors' features in pitches, ideally in a subtle way ",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "FWIW",
        "context": "Internet Slang",
        "shortExplanation": "For What Its Worth",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "G&A",
        "context": "Corporate Lingo",
        "shortExplanation": "General & Administrative functions",
        "longExplanation": "Company functions such as finance, legal, REW, etc",
        "link": ""
    },
    {
        "acronym": "GA",
        "context": "Corporate Lingo",
        "shortExplanation": "General Availability",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "GAH",
        "context": "NR Lingo",
        "shortExplanation": "Global All Hands",
        "longExplanation": "as in the GAH meeting or the GAH invite",
        "link": ""
    },
    {
        "acronym": "Gaius",
        "context": "Corporate Lingo",
        "shortExplanation": "Gaius",
        "longExplanation": "Gaius stands for Generative AI for Us and is the (first) internal Generative AI Chatbot",
        "link": ""
    },
    {
        "acronym": "GC",
        "context": "NR Internal Name",
        "shortExplanation": "Grand Central",
        "longExplanation": "Internal Build & Deploy tool (CI/CD)",
        "link": "https://grand-central.datanerd.us/"
    },
    {
        "acronym": "GCM",
        "context": "Security and Compliance",
        "shortExplanation": "Galois/Counter Mode",
        "longExplanation": "Cryptographic method, see also AES, CBC and CTR",
        "link": "https://docs.google.com/document/d/1epmbNJKILJMw3hBJTCf5E_dfZzUTmiGITLoMa6OMNHA/edit"
    },
    {
        "acronym": "GCP",
        "context": "Technology",
        "shortExplanation": "Google Cloud Platform",
        "longExplanation": "",
        "link": "https://docs.newrelic.com/docs/integrations/google-cloud-platform-integrations"
    },
    {
        "acronym": "GDPR",
        "context": "Security and Compliance",
        "shortExplanation": "EU General Data Protection Regulation",
        "longExplanation": "EU privacy laws",
        "link": "https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32016R0679"
    },
    {
        "acronym": "GHE",
        "context": "Technology",
        "shortExplanation": "Github Enterprise",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "GIS",
        "context": "Technology",
        "shortExplanation": "Geographic Information System",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "GLT",
        "context": "Go to Market ",
        "shortExplanation": "Growth Leadership Team",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "GM",
        "context": "Corporate Lingo",
        "shortExplanation": "General Manager",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "GNAR",
        "context": "NR Internal Name",
        "shortExplanation": "Growth Notifications and Re-Engagement",
        "longExplanation": "All user centric notifications to support growth and re-engagment",
        "link": ""
    },
    {
        "acronym": "Gorgon",
        "context": "NR Internal Name",
        "shortExplanation": "",
        "longExplanation": " some kind of UI/UX project from cerca 2020 ???",
        "link": ""
    },
    {
        "acronym": "GP",
        "context": "NR Internal Name",
        "shortExplanation": "General Purpose",
        "longExplanation": "Type of Cells (General Purpose Cells)",
        "link": ""
    },
    {
        "acronym": "GPC",
        "context": "NR Internal Name",
        "shortExplanation": "General Purpose Cell",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "GPE",
        "context": "Go to Market ",
        "shortExplanation": "Global Product Experience",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/all-site-map/product/depts-teams-a-l/experience"
    },
    {
        "acronym": "GRC",
        "context": "Security and Compliance",
        "shortExplanation": "Governance, Risk & Compliance",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "Grok",
        "context": "",
        "shortExplanation": "Launch name for what has then become NR IA (and internally continues as Grok) -OR- a log parse standard",
        "longExplanation": "context could be both GTM and Technology",
        "link": ""
    },
    {
        "acronym": "GSAS",
        "context": "Security and Compliance",
        "shortExplanation": "Global Safety & Security",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/safety-and-security"
    },
    {
        "acronym": "GSP",
        "context": "NR Internal Name",
        "shortExplanation": "Golden Signals Platform",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "GSPO",
        "context": "Go to Market ",
        "shortExplanation": "Go-to-Market Strategy, Planning & Operations",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "GTM",
        "context": "Go to Market ",
        "shortExplanation": "Go-to-Market",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "GTMI",
        "context": "NR Lingo",
        "shortExplanation": "GTMI - Go To Market Initiative",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "GTMSO",
        "context": "Go to Market ",
        "shortExplanation": "Go-to-Market Strategy & Operations",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/gtmso"
    },
    {
        "acronym": "GTS",
        "context": "NR Internal Name",
        "shortExplanation": "Global Technical Support",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/gts-support"
    },
    {
        "acronym": "GTSE",
        "context": "NR Internal Name",
        "shortExplanation": "Global Technical Support Engagement",
        "longExplanation": "Support to Engineering Engagment process via JIRA",
        "link": "https://new-relic.atlassian.net/jira/software/c/projects/NR/boards/188/"
    },
    {
        "acronym": "GTSR",
        "context": "NR Internal Name",
        "shortExplanation": "Global Technical Support Readiness",
        "longExplanation": "Support Enablement process for new products and features",
        "link": "https://nerdlife.datanerd.us/new-relic/gts-for-product-engineering-7c574f98-b751-43c2-a33b-cd5018d641ec"
    },
    {
        "acronym": "HAR",
        "context": "Technology",
        "shortExplanation": "HTTP Archive file format",
        "longExplanation": "",
        "link": "http://www.softwareishard.com/blog/har-12-spec/"
    },
    {
        "acronym": "Hawthorne",
        "context": "NR Internal Name",
        "shortExplanation": "codename of old NR alerting system ",
        "longExplanation": "cerca 2014-2020",
        "link": "https://nerdlife.datanerd.us/new-relic/hawthorne-newsletter-1-what-is-hawthorne"
    },
    {
        "acronym": "Helix",
        "context": "Project Name",
        "shortExplanation": "",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "Herald",
        "context": "NR Internal Name",
        "shortExplanation": "",
        "longExplanation": "A UX / dashboard project from cerca 2019 ???",
        "link": ""
    },
    {
        "acronym": "Hercules",
        "context": "NR Internal Name",
        "shortExplanation": "Codename for the FY21 platform and positioning strategy",
        "longExplanation": "circa 2020. Consolidated NR1 Platform (👋 Seldon) and Simplified billing (perpetual free tier, consumption based billing and billing per user).",
        "link": "https://nerdlife.datanerd.us/new-relic/hercules"
    },
    {
        "acronym": "HIDS",
        "context": "Security and Compliance",
        "shortExplanation": "Host Intrusion Detection System",
        "longExplanation": "See also NIDS",
        "link": ""
    },
    {
        "acronym": "HIPAA",
        "context": "Security and Compliance",
        "shortExplanation": "Health Insurance Portability and Accountability Act",
        "longExplanation": "",
        "link": "https://www.cdc.gov/phlp/publications/topic/hipaa.html"
    },
    {
        "acronym": "HIPS",
        "context": "Security and Compliance",
        "shortExplanation": "Host Intrusion Prevention System",
        "longExplanation": "See also NIPS",
        "link": ""
    },
    {
        "acronym": "HPA",
        "context": "Technology",
        "shortExplanation": "Horizontal Pod Autoscaling",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "HRBP",
        "context": "Corporate Lingo",
        "shortExplanation": "Human Resources Business Partner",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "HS",
        "context": "Internet Slang",
        "shortExplanation": "Highly Successful (in the context of Connect)",
        "longExplanation": "Example: An HS Manager will do xyz...",
        "link": ""
    },
    {
        "acronym": "HSM",
        "context": "NR Lingo",
        "shortExplanation": "High Security Mode",
        "longExplanation": "Predecessor of LASP/CSP",
        "link": "https://docs.newrelic.com/docs/agents/manage-apm-agents/configuration/high-security-mode"
    },
    {
        "acronym": "Hypercare",
        "context": "NR Lingo",
        "shortExplanation": "Dedicated support for big launches, bigger than a traditional Hero role",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "IA",
        "context": "NR Internal Name",
        "shortExplanation": "Infrastructure Assurance",
        "longExplanation": "Responsible for reviewing cloud and infrastructure architecture and changes",
        "link": ""
    },
    {
        "acronym": "IaC",
        "context": "Technology",
        "shortExplanation": "Infrastructure as Code (like Terraform, Ansible, Chef, Puppet, etc.)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "IAM",
        "context": "Technology",
        "shortExplanation": "Identity & Access Management (a PREVIOUS team name - might now be split into AuthN and APIKS?)",
        "longExplanation": "Not to be confused with AWS IAM ",
        "link": ""
    },
    {
        "acronym": "IAST",
        "context": "",
        "shortExplanation": "Interactive Application Security Testing (IAST)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "IAT",
        "context": "NR Lingo",
        "shortExplanation": "Invite a Teammate",
        "longExplanation": "Courtney Garneau",
        "link": ""
    },
    {
        "acronym": "IC",
        "context": "Technology",
        "shortExplanation": "Incident commander",
        "longExplanation": "The person who organizes resources and keeps status up-to-date during an incident",
        "link": ""
    },
    {
        "acronym": "IC",
        "context": "Corporate Lingo",
        "shortExplanation": "Individual contributor",
        "longExplanation": "A person who is not a manager/leader",
        "link": ""
    },
    {
        "acronym": "ICA",
        "context": "Corporate Lingo",
        "shortExplanation": "Independent Contractor Agreement",
        "longExplanation": "Vendor management",
        "link": ""
    },
    {
        "acronym": "ICG",
        "context": "NR Internal Name",
        "shortExplanation": "Cell Architecture is our technical strategy to, enable an incremental move to the public cloud, unlock repeatable scaling for our services, and limit the blast radius of incidents.",
        "longExplanation": "A specialized version of the NRQL Query Gateway that facilitates communication between cells.",
        "link": ""
    },
    {
        "acronym": "ICP",
        "context": "Go to Market ",
        "shortExplanation": "Ideal Customer Profile (targeting & play definition)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "ICS",
        "context": "",
        "shortExplanation": "Instrumentation, Cloud Integrations & Security ",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "ICYMI",
        "context": "Corporate Lingo",
        "shortExplanation": "In Case You Missed It",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "IDE",
        "context": "Technology",
        "shortExplanation": "Integrated Development Environment",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "IDP",
        "context": "NR Internal Name",
        "shortExplanation": "in NR usually \"Infra Data Pipeline\" (an EDP/telemetry ingest team), or externally also \"Identity Provider\"",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "IF",
        "context": "",
        "shortExplanation": "Installation Framework",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "IH",
        "context": "NR Internal Name",
        "shortExplanation": "Innovation Hub",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/gts-innovation-hub"
    },
    {
        "acronym": "IHAC",
        "context": "Go to Market ",
        "shortExplanation": "I Have A Customer",
        "longExplanation": "If sales people ask developers a question...",
        "link": ""
    },
    {
        "acronym": "IHE",
        "context": "NR Internal Name",
        "shortExplanation": "Innovation Hub Engineer",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "III",
        "context": "NR Lingo",
        "shortExplanation": "Issues and Incidents Infrastructure (team)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "IL",
        "context": "Go to Market ",
        "shortExplanation": "Integration Layer",
        "longExplanation": "The internal sync system between NR1, Zuora, Salesforce and Netsuite.",
        "link": ""
    },
    {
        "acronym": "IMC",
        "context": "NR Internal Name",
        "shortExplanation": "Infrastructure Metrics Converter",
        "longExplanation": "a service, related to telemetry ingest, owned by IDP",
        "link": ""
    },
    {
        "acronym": "IngressDomains",
        "context": "NR Internal Name",
        "shortExplanation": "FY25Q1+Q2 replacement for old Service Gateway, using Gloo, Gate, ERS under the hood",
        "longExplanation": "",
        "link": "https://newrelic.enterprise.slack.com/files/U01LCVBTWE4/F06VAMM69NZ/sg_to_ingressdomains_migration_example.mp4"
    },
    {
        "acronym": "INP",
        "context": "Technology",
        "shortExplanation": "Interaction to Next Paint",
        "longExplanation": "new within the Google's \"Core Web Vitals\"",
        "link": ""
    },
    {
        "acronym": "IoT",
        "context": "Technology",
        "shortExplanation": "Internet of Things",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "IPS",
        "context": "NR Lingo",
        "shortExplanation": "In-Product Support",
        "longExplanation": "Means by which clients can create Zendesk tickets.",
        "link": ""
    },
    {
        "acronym": "IR",
        "context": "Corporate Lingo",
        "shortExplanation": "Incident Review/Incident Retrospective",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "IRS",
        "context": "NR Lingo",
        "shortExplanation": "Insert Route Service",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "ISM",
        "context": "Go to Market ",
        "shortExplanation": "ISV Success Manager",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "ISMP",
        "context": "Technology",
        "shortExplanation": "Information Security Management Program",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "ISMS",
        "context": "Security and Compliance",
        "shortExplanation": "Information Security Management System",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "ISO",
        "context": "",
        "shortExplanation": "Incentive stock options (ISOs) / International Organization for Standardization",
        "longExplanation": "... and .iso is a file format, too",
        "link": ""
    },
    {
        "acronym": "ISR",
        "context": "Corporate Lingo",
        "shortExplanation": "Inside Sales Rep",
        "longExplanation": "Sales people that reach out to new customers to offer them support with the hope of helping customers find value sooner.",
        "link": ""
    },
    {
        "acronym": "ISR (Senior)",
        "context": "Corporate Lingo",
        "shortExplanation": "Senior Inside Sales Rep",
        "longExplanation": "Assigned to big-logo companies for dedicated nurturing.",
        "link": ""
    },
    {
        "acronym": "ISV",
        "context": "Corporate Lingo",
        "shortExplanation": "Independent Software Vendor",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "IUR",
        "context": "NR Lingo",
        "shortExplanation": "Insights Usage Report",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "IW",
        "context": "NR Internal Name",
        "shortExplanation": "Insert Worker",
        "longExplanation": "a component witihini DIA / Dirac Entity & Data Insert Team (EDIT)",
        "link": ""
    },
    {
        "acronym": "JDK",
        "context": "Technology",
        "shortExplanation": "Java Development Kit",
        "longExplanation": "A set of tools provided by Oracle to develop in Java",
        "link": ""
    },
    {
        "acronym": "Jenkins",
        "context": "Technology",
        "shortExplanation": "An open source automation server that helps automate non-human parts of the software development process (such as CI and CD)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "JFR",
        "context": "Technology",
        "shortExplanation": "Java Flight Recorder",
        "longExplanation": "A Java built-in tool to record detailed metrics of the Java application, see also JMC",
        "link": "https://nerdlife.datanerd.us/new-relic/innovation-time-java-mission-control-and-java-flight-recorder"
    },
    {
        "acronym": "Jira",
        "context": "Technology",
        "shortExplanation": "A proprietary issue tracking product used by many teams.",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "JIT",
        "context": "Technology",
        "shortExplanation": "Just-In-Time (compilation / provisioning)",
        "longExplanation": "Compiling code at the point of execution. JIT provisioning is when a portal automatically creates an account based on an external authN/authZ directory",
        "link": "https://en.wikipedia.org/wiki/Just-in-time_compilation"
    },
    {
        "acronym": "JMC",
        "context": "Technology",
        "shortExplanation": "Java Mission Control",
        "longExplanation": "A Java-based toolkit to profile and diagnose Java applications, see also JFR",
        "link": "https://nerdlife.datanerd.us/new-relic/innovation-time-java-mission-control-and-java-flight-recorder"
    },
    {
        "acronym": "JMX",
        "context": "Technology",
        "shortExplanation": "Java Management eXtensions",
        "longExplanation": "Java technology for managing and monitoring applications",
        "link": ""
    },
    {
        "acronym": "JTBD",
        "context": "Corporate Lingo",
        "shortExplanation": "Jobs To Be Done",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "K8s",
        "context": "Technology",
        "shortExplanation": "Kubernetes",
        "longExplanation": "An open-source system to orchestrate the deployment, scaling and management of applications",
        "link": "https://en.wikipedia.org/wiki/Kubernetes"
    },
    {
        "acronym": "KCE",
        "context": "Technology",
        "shortExplanation": "Kubernetes Cluster Explorer",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "KCS",
        "context": "Technology",
        "shortExplanation": "Knowledge Centered Service",
        "longExplanation": "A method in which support teams record their knowledge by creating/adding to articles with each ticket resolved.",
        "link": "https://www.thekcsacademy.net/kcs/"
    },
    {
        "acronym": "KDD",
        "context": "Corporate Lingo",
        "shortExplanation": "Key Design Decision",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "KDMS",
        "context": "NR Internal Name",
        "shortExplanation": "Kubernetes DMS",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "KE",
        "context": "NR Internal Name",
        "shortExplanation": "Kafka Enclave(s) - previously DKE",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "KEDA",
        "context": "Technology",
        "shortExplanation": "Kubernetes Event-driven Autoscaling",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "Kernel",
        "context": "NR Internal Name",
        "shortExplanation": "Project Kernel is the OLD name for our data unification project",
        "longExplanation": "Now known as NREM: New Relic Enterprise Metrics",
        "link": ""
    },
    {
        "acronym": "Kernel",
        "context": "Project Name",
        "shortExplanation": "Project, to provide a single source of truth enterprise data warehouse",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "KMS",
        "context": "Technology",
        "shortExplanation": "AWS' Key Management Service",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "KPI",
        "context": "Corporate Lingo",
        "shortExplanation": "Key Performance Indicator",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "KPI",
        "context": "Corporate Lingo",
        "shortExplanation": "Key Performance Indicator",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "KPT",
        "context": "NR Internal Name",
        "shortExplanation": "Kafka platform team",
        "longExplanation": "old name, since November 2024 rebranded to SPI (Streaming Platform Infrastructure)",
        "link": ""
    },
    {
        "acronym": "KR",
        "context": "NR Lingo",
        "shortExplanation": "Key Result - an NR-custom issue type / tier in Jira as a level above Initiative",
        "longExplanation": "",
        "link": "https://new-relic.atlassian.net/secure/ShowConstantsHelp.jspa?decorator=popup#IssueTypes"
    },
    {
        "acronym": "ksm",
        "context": "",
        "shortExplanation": "Kube-state-metrics (KSM) - related to nri-kubernetes",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "KTLO",
        "context": "NR Lingo",
        "shortExplanation": "Keep The Lights On",
        "longExplanation": "work that needs to be done to keep the product, sytstem, etc. running. Not a new feature, probably not efficiency improvements, etc.",
        "link": ""
    },
    {
        "acronym": "KYC",
        "context": "Go to Market ",
        "shortExplanation": "Know Your Customer",
        "longExplanation": "An internally developed tool customized to how we use Kafka, topics, and pipelines.",
        "link": ""
    },
    {
        "acronym": "Kynapses",
        "context": "NR Internal Name",
        "shortExplanation": "",
        "longExplanation": "",
        "link": "https://pages.datanerd.us/site-engineering/nr-platform-docs/kafka/migrating-kafka-to-cloud.html"
    },
    {
        "acronym": "L&D",
        "context": "Corporate Lingo",
        "shortExplanation": "Learning and Development",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "LASP",
        "context": "NR Lingo",
        "shortExplanation": "Language Agent Security Policies",
        "longExplanation": "Now named CSP, see also HSM",
        "link": "https://nerdlife.datanerd.us/new-relic/language-agent-security-policies"
    },
    {
        "acronym": "LCP",
        "context": "Technology",
        "shortExplanation": "Largest Contentful Paint",
        "longExplanation": "part of web core vitals (google)",
        "link": "https://blog.newrelic.com/engineering/measuring-large-contentful-paint-for-browsers/"
    },
    {
        "acronym": "LDAP",
        "context": "Security and Compliance",
        "shortExplanation": "Lightweight Directory Access Protocol",
        "longExplanation": "",
        "link": "https://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol"
    },
    {
        "acronym": "LEM",
        "context": "Internet Slang",
        "shortExplanation": "Log Everything Monitoring",
        "longExplanation": "found in 2/1/19 news release about Logging product, but doesn’t appear to be used",
        "link": ""
    },
    {
        "acronym": "LIA",
        "context": "Corporate Lingo",
        "shortExplanation": "Legitimate Interest Assessment",
        "longExplanation": "",
        "link": "https://docs.google.com/document/d/1fwct7JZIWX06LDoIgC-b9zRUjabxPFbGzR1G_4-CBHM/edit"
    },
    {
        "acronym": "LiC",
        "context": "NR Lingo",
        "shortExplanation": "Logs in Context",
        "longExplanation": "Logs that show up in NR1 UI under the Entity's > Log tab",
        "link": ""
    },
    {
        "acronym": "LLAP",
        "context": "NR Lingo",
        "shortExplanation": "Leader-Led Action Plan",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "LLC",
        "context": "NR Internal Name",
        "shortExplanation": "the \"Lambda Log Consumer\" service in NR, but externally a Limited Liability Company",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "LLDP",
        "context": "Technology",
        "shortExplanation": "Link Layer Discovery Protocol",
        "longExplanation": "",
        "link": "https://www.whatsupgold.com/network-discovery/link-layer-discovery-protocol-lldp#:~:text=Link%20Layer%20Discovery%20Protocol%20(LLDP)%20is%20a%20layer%202%20neighbor,have%20a%20multi%2Dvendor%20network."
    },
    {
        "acronym": "LMS",
        "context": "Corporate Lingo",
        "shortExplanation": "Learning Management System",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "LOE",
        "context": "Internet Slang",
        "shortExplanation": "Level of Effort",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "LP",
        "context": "NR Lingo",
        "shortExplanation": "Limited Preview (a feature available to customers, but could change any time)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "LRC",
        "context": "Corporate Lingo",
        "shortExplanation": "License Revenue Checklist",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "LRU",
        "context": "Technology",
        "shortExplanation": "Least Recently Used",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "LSDU",
        "context": "Technology",
        "shortExplanation": "Learn, See, Deploy, Understand",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "LUMPS",
        "context": "NR Internal Name",
        "shortExplanation": "LumApps",
        "longExplanation": "Intranet (Nerdlife) based on LumApps (https://www.lumapps.com/)",
        "link": "https://nerdlife.datanerd.us/new-relic/"
    },
    {
        "acronym": "LVF",
        "context": "NR Internal Name",
        "shortExplanation": "Log Vortex Forwarder",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "MaaS",
        "context": "NR Internal Name",
        "shortExplanation": "Metal-As-A-Service",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "MAB",
        "context": "NR Internal Name",
        "shortExplanation": "Monetization Advisory Board",
        "longExplanation": "Executive group that oversees and approves changes to billable data",
        "link": ""
    },
    {
        "acronym": "MAC",
        "context": "Security and Compliance",
        "shortExplanation": "Message Authentication Code / Metric API Consumer",
        "longExplanation": "Cryptographic method / a team related to dimensional metrics  (help-metrics)",
        "link": ""
    },
    {
        "acronym": "MAPI",
        "context": "",
        "shortExplanation": "Metadata-api",
        "longExplanation": "seen on a 2025 tech talk about Metrics processing",
        "link": ""
    },
    {
        "acronym": "Marathon",
        "context": "Technology",
        "shortExplanation": "A framework for orchestrating long-running containerized services.",
        "longExplanation": " It decides where to deploy services based on available resources and constraints (e.g. one instance of an app per rack) and reschedules them when they are unhealthy. Used in New Relic CHI datacenter.",
        "link": ""
    },
    {
        "acronym": "MAU",
        "context": "Corporate Lingo",
        "shortExplanation": "Monthly Active Users",
        "longExplanation": "Helix metric and Mobile metric",
        "link": ""
    },
    {
        "acronym": "MBL",
        "context": "NR Lingo",
        "shortExplanation": "Mobile, Browser, Lambda",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "MBO",
        "context": "Corporate Lingo",
        "shortExplanation": "Manager Business Objective",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "MBO",
        "context": "NR Lingo",
        "shortExplanation": "Manager Business Objectives",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "MBR",
        "context": "Go to Market ",
        "shortExplanation": "monthly business review",
        "longExplanation": "",
        "link": "http://www.alignedaction.com/2010/02/how-to-conduct-a-highvalue-monthly-business-review/"
    },
    {
        "acronym": "MCA",
        "context": "Go to Market ",
        "shortExplanation": "Master Cloud Agreement",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "MCP",
        "context": "Technology",
        "shortExplanation": "Model Context Protocol",
        "longExplanation": "an open standard that simplifies how AI models, especially Large Language Models (LLMs), interact with external data sources and tools, enabling context-aware interactions and enhancing AI application capabilities",
        "link": ""
    },
    {
        "acronym": "Mcrouter",
        "context": "Technology",
        "shortExplanation": "Memcache Protocol Router",
        "longExplanation": "Used to scale deployments of Memcached, a fast in-memory cache",
        "link": "https://github.com/facebook/mcrouter"
    },
    {
        "acronym": "Meatballs",
        "context": "NR Internal Name",
        "shortExplanation": "Meatballs is/was the 2015/2016 code name for our Infrastructure Performance and Configuration Monitoring product. It stood for increasing “Mean Time Between Loss of Sleep” (MTBLS) for our DevOps customers.",
        "longExplanation": "In our backend, we still have MTBLS as a reference for services that are now owned by Infra Data Pipeline. The customer's side (instrumentation) might be in the K8s Agent team, the OHAI team or the Cloud Monitoring Platform team, etc. ",
        "link": "https://docs.google.com/document/d/1jUXI5EQGkumbNicTYOfZYerJ607LAc-vltxHb0n3SHc/edit"
    },
    {
        "acronym": "MEDDPPICC",
        "context": "Go to Market ",
        "shortExplanation": "Metrics, Economic buyer, Decision process, Decision criteria, Partners, Paper Process, Identified pain, Champion, Competition",
        "longExplanation": "Methodology to qualify sales opportunities",
        "link": "https://docs.google.com/document/d/1gKnZpsKr8pmdJkhoaCtPf2oT9BSy97Mf4kXDnqw4UBA/edit"
    },
    {
        "acronym": "MELT",
        "context": "Technology",
        "shortExplanation": "Metrics, Events, Logs & Traces",
        "longExplanation": "https://newrelic.com/platform/telemetry-data-101",
        "link": "https://nerdlife.datanerd.us/new-relic/the-data-model-melt-sandwich-metrics-events-logs-and-traces"
    },
    {
        "acronym": "MEPS",
        "context": "Technology",
        "shortExplanation": "Millions of Events per Second",
        "longExplanation": "Found when running nrql queries",
        "link": ""
    },
    {
        "acronym": "MEPU",
        "context": "Finance",
        "shortExplanation": "Management Equity Participation Unit",
        "longExplanation": "term from the finance / bonus plan, type of equivity bonus, but cash value only gets realised at a liquidity event",
        "link": ""
    },
    {
        "acronym": "MFA",
        "context": "Technology",
        "shortExplanation": "Multi-Factor Authentication",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "MGI",
        "context": "NR Lingo",
        "shortExplanation": "Metric Grouping Issue",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/an-mgi-mitigation-service"
    },
    {
        "acronym": "MHAM",
        "context": "",
        "shortExplanation": "Mental Health Awareness Month (USA: May)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "Migrations",
        "context": "NR Lingo",
        "shortExplanation": "In GTM: Changed from committed contracts to PAYG (so inclusive of APoF that becomes PAYG)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "Minerva",
        "context": "Project Name",
        "shortExplanation": "",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "MLOps",
        "context": "Technology",
        "shortExplanation": "Machine Learning Operations",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "MM",
        "context": "Go to Market ",
        "shortExplanation": "Mid Market",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "MME",
        "context": "NR Internal Name",
        "shortExplanation": "Million matched events",
        "longExplanation": "When evaluating cost of a query for the query based pricing we use this metric",
        "link": ""
    },
    {
        "acronym": "MMF",
        "context": "NR Lingo",
        "shortExplanation": "Minimum Marketable Feature",
        "longExplanation": "Minimum Marketable Features (MMFs) are our unit of work for Agile Teams",
        "link": "https://docs.google.com/document/d/1V-IWsf1kRR5pjtAa_Gr1HZ-xXFSWWhLBGSyxXLj5skU/edit#bookmark=kix.8ustycyldwfv"
    },
    {
        "acronym": "MoFu",
        "context": "Go to Market ",
        "shortExplanation": "Middle of the Funnel (marketing)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "mojic",
        "context": "Technology",
        "shortExplanation": "Modern Observable Java In Container",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "MOLOSA",
        "context": "",
        "shortExplanation": "More Of, Less Of, Same As",
        "longExplanation": "With regards to access rights",
        "link": ""
    },
    {
        "acronym": "MOPs",
        "context": "Go to Market ",
        "shortExplanation": "Marketing Operations",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "Mosaic",
        "context": "NR Internal Name",
        "shortExplanation": "A UI Platform / dataviz project from cerca 2017",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/mosaic-sneak-peek"
    },
    {
        "acronym": "MOV",
        "context": "Go to Market ",
        "shortExplanation": "Moment of Value",
        "longExplanation": "A Moment of Value is a measurable outcome our customers need in order to achieve their company’s objectives. This can be achieved by various activities that help the customer solve a specific problem, which in turn proves a business value from New Relic’s solution",
        "link": "https://nerdlife.datanerd.us/new-relic/css-best-practices-moments-of-value-in-salesforce"
    },
    {
        "acronym": "MP",
        "context": "NR Internal Name",
        "shortExplanation": "AWS Marketplace",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "MP CA",
        "context": "NR Internal Name",
        "shortExplanation": "AWS Marketplace Customer Advisor",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "MPO",
        "context": "NR Lingo",
        "shortExplanation": "Azure Marketplace Private Offer",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "MPS",
        "context": "NR Lingo",
        "shortExplanation": "More Perfect Software",
        "longExplanation": "",
        "link": "https://newrelic.com/more-perfect-software/more-perfect-software/"
    },
    {
        "acronym": "MQL",
        "context": "Go to Market ",
        "shortExplanation": "Marketing Qualified Lead",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "MQL",
        "context": "Go to Market ",
        "shortExplanation": "Marketing Qualified Lead",
        "longExplanation": "A customer who has indicated interest in what a brand has to offer based on marketing efforts or is otherwise more likely to become a customer than other leads",
        "link": ""
    },
    {
        "acronym": "MRP",
        "context": "",
        "shortExplanation": "Migration, Readiness & Planning",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "MSA",
        "context": "Corporate Lingo",
        "shortExplanation": "Master Subscription Agreement",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "MSK",
        "context": "Technology",
        "shortExplanation": "Amazon's Managed Kafka Service",
        "longExplanation": "",
        "link": "https://aws.amazon.com/msk/"
    },
    {
        "acronym": "MSP",
        "context": "",
        "shortExplanation": "Managed Service Provider",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "MSS",
        "context": "Technology",
        "shortExplanation": "Maximum Segment Size (TCP) - typically 1450. see also MTU",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "MTB",
        "context": "NR Internal Name",
        "shortExplanation": "Magic Trace Box",
        "longExplanation": "Data collector for tail-based Distributed Tracing",
        "link": "https://nerdlife.datanerd.us/new-relic/a-magic-trace-box"
    },
    {
        "acronym": "MTBF",
        "context": "Technology",
        "shortExplanation": "Mean Time Between Failures",
        "longExplanation": "",
        "link": "https://en.wikipedia.org/wiki/Mean_time_between_failures"
    },
    {
        "acronym": "MTBI",
        "context": "NR Lingo",
        "shortExplanation": "Mean Time Between Incidents",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "MTBLS",
        "context": "NR Internal Name",
        "shortExplanation": "Mean Time Between Loss of Sleep",
        "longExplanation": "Codename of our Infrastructure Platform product team",
        "link": ""
    },
    {
        "acronym": "MTQW",
        "context": "NR Internal Name",
        "shortExplanation": "Metric Timeslice Query Worker",
        "longExplanation": "This service provides a NRQL interface to our Cassandra metric timeslice data",
        "link": "https://source.datanerd.us/collector-collective/metric-timeslice-query-worker"
    },
    {
        "acronym": "MTS",
        "context": "NR Internal Name",
        "shortExplanation": "Metric Timeslice",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/thrive-as-a-product-relic-with-development-dollars-c54235db-be28-404c-aeca-f0db0406afa5"
    },
    {
        "acronym": "MTT",
        "context": "NR Internal Name",
        "shortExplanation": "Metric Timeslices Team",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "MTTA",
        "context": "Technology",
        "shortExplanation": "Mean Time to Acknowledge",
        "longExplanation": "Average time between an incident alert and the responsible team begins working on the issue. KPI for IT incident management",
        "link": ""
    },
    {
        "acronym": "MTTD",
        "context": "Technology",
        "shortExplanation": "Mean Time to Detect",
        "longExplanation": "Average time between the start of an incident and the responsible team to become aware of it. KPI for IT incident management",
        "link": ""
    },
    {
        "acronym": "MTTR",
        "context": "Technology",
        "shortExplanation": "Mean Time to Recovery",
        "longExplanation": "Average time between the start of an incident and the system begin back to full operation. This includes time to detect, acknowledge, investigate and repair the issue. KPI for IT incident management",
        "link": "https://en.wikipedia.org/wiki/Mean_time_to_recovery"
    },
    {
        "acronym": "MTTR",
        "context": "Technology",
        "shortExplanation": "Mean Time to Repair",
        "longExplanation": "Average time between the start of fixing a failed component and the system being back to full operation. KPI for IT incident management",
        "link": "https://en.wikipedia.org/wiki/Mean_time_to_repair"
    },
    {
        "acronym": "MTTR",
        "context": "Technology",
        "shortExplanation": "Mean Time to Resolution",
        "longExplanation": "Average time between the start of an incident and all mitigations which prevents the incident from happening again. This includes time to detect, acknowledge, investigate, repair and mitigate the issue and its causes. KPI for IT incident management",
        "link": ""
    },
    {
        "acronym": "MTU",
        "context": "Technology",
        "shortExplanation": "Maximum Transmission Unit (TCP)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "MVP",
        "context": "Corporate Lingo",
        "shortExplanation": "Minimum Viable Product",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "NDA",
        "context": "Corporate Lingo",
        "shortExplanation": "Non-Disclosure Agreement",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "NERF",
        "context": "NR Lingo",
        "shortExplanation": "New Relic Emergency Response Force",
        "longExplanation": "",
        "link": "https://newrelic.atlassian.net/wiki/spaces/INCMGMT/pages/2411922018/NERF+onboarding+process+and+responsibilities"
    },
    {
        "acronym": "Net New",
        "context": "Go to Market ",
        "shortExplanation": "Newly acquired customer or reactivated account that generated revenue",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "NGDS",
        "context": "NR Internal Name",
        "shortExplanation": "Next Gen Down Samplers",
        "longExplanation": "A dream project ... ",
        "link": ""
    },
    {
        "acronym": "NGEP",
        "context": "NR Internal Name",
        "shortExplanation": "Next Gen Entity Platform",
        "longExplanation": "2024: The Entity Platform team is redesigning core capabilities so that Entities have a bunch of powerful new features (ex: ability to attach additional metadata, track data changes over time / inventory, scalability issues, a new public-facing API, etc)",
        "link": ""
    },
    {
        "acronym": "NIDS",
        "context": "Technology",
        "shortExplanation": "Network Intrusion Detection System",
        "longExplanation": "See also HIDS",
        "link": ""
    },
    {
        "acronym": "NIH",
        "context": "NR Lingo",
        "shortExplanation": "Not Invented Here",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "NIPS",
        "context": "Technology",
        "shortExplanation": "Network Intrusion Prevention System",
        "longExplanation": "See also HIPS",
        "link": ""
    },
    {
        "acronym": "NLP",
        "context": "Technology",
        "shortExplanation": "Natural Language Processing",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "NOS",
        "context": "Technology",
        "shortExplanation": "",
        "longExplanation": "A command line tool for spinning up new services and libraries at New Relic.",
        "link": "https://source.datanerd.us/tools/nos"
    },
    {
        "acronym": "NPE",
        "context": "Technology",
        "shortExplanation": "NullPointerException",
        "longExplanation": "",
        "link": "https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/NullPointerException.html"
    },
    {
        "acronym": "NPM",
        "context": "NR Lingo",
        "shortExplanation": "Network Performance Monitoring",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "NPS",
        "context": "Corporate Lingo",
        "shortExplanation": "Net Promoter Score",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "NQG",
        "context": "NR Lingo",
        "shortExplanation": "NRQL Query Gateway",
        "longExplanation": "Serves as the entry point for queries in Dirac and handles the functionality of running cellular queries.",
        "link": "https://treasure-map.datanerd.one/catalog/nrql-query-gateway"
    },
    {
        "acronym": "NR Touch Deal",
        "context": "Go to Market ",
        "shortExplanation": "",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "NR.org",
        "context": "NR Lingo",
        "shortExplanation": "New Relic.Org",
        "longExplanation": "NR Community Relations team",
        "link": "NewRelic.org"
    },
    {
        "acronym": "NR1",
        "context": "NR Lingo",
        "shortExplanation": "New Relic One",
        "longExplanation": "Do not abbreviate in external content or communications. See the New Relic style guide.",
        "link": ""
    },
    {
        "acronym": "NRAI",
        "context": "NR Lingo",
        "shortExplanation": "New Relic Applied Intelligence",
        "longExplanation": "alerts intelligence",
        "link": ""
    },
    {
        "acronym": "NRC",
        "context": "NR Lingo",
        "shortExplanation": "New Relic Compute",
        "longExplanation": "Replacement for QBP",
        "link": ""
    },
    {
        "acronym": "NRDB",
        "context": "Technology",
        "shortExplanation": "New Relic Database",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "NRDOT",
        "context": "NR Lingo",
        "shortExplanation": "NR Distribution of oTel ",
        "longExplanation": "owned by CAOS",
        "link": ""
    },
    {
        "acronym": "NREM",
        "context": "NR Internal Name",
        "shortExplanation": "New Relic Enterprise Metrics",
        "longExplanation": "Project to create a single source of truth for New Relic data",
        "link": ""
    },
    {
        "acronym": "NRGE",
        "context": "NR Internal Name",
        "shortExplanation": "New Relic Global Enablement",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/nrge"
    },
    {
        "acronym": "NRGEx",
        "context": "NR Internal Name",
        "shortExplanation": "New Relic Global Enablement Experience",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/new-relic-global-enablement-experience-nrgex"
    },
    {
        "acronym": "NRIA",
        "context": "NR Lingo",
        "shortExplanation": "New Relic Infrastructure Agent",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "NRIE",
        "context": "NR Lingo",
        "shortExplanation": "NRintegrationError",
        "longExplanation": "(URL is an example from the Dimensional Metrics team)",
        "link": "https://newrelic.atlassian.net/wiki/spaces/TDP/pages/3795451991/Metrics+Utils+NrieUtils"
    },
    {
        "acronym": "NRIL",
        "context": "NR Lingo",
        "shortExplanation": "New Relic International Limited",
        "longExplanation": "Our EU affiliate based in Dublin, Ireland",
        "link": "https://newrelic.com/about/contact-us"
    },
    {
        "acronym": "NRPP",
        "context": "NR Internal Name",
        "shortExplanation": "New Relic Platform Pricing",
        "longExplanation": "Pre-Hercules pricing model with full platform access",
        "link": "https://sites.google.com/newrelic.com/nrpp/"
    },
    {
        "acronym": "NRQL",
        "context": "Technology",
        "shortExplanation": "New Relic Query Language",
        "longExplanation": "",
        "link": "https://docs.newrelic.com/docs/query-data/nrql-new-relic-query-language/getting-started/introduction-nrql"
    },
    {
        "acronym": "NRR",
        "context": "Corporate Lingo",
        "shortExplanation": "Net Revenue Retention",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "NRSP",
        "context": "NR Internal Name",
        "shortExplanation": "New Relic Streaming Pipeline (Next Gen Streaming Platform)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "NRU",
        "context": "NR Lingo",
        "shortExplanation": "New Relic University",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/new-relic-university"
    },
    {
        "acronym": "NRU",
        "context": "NR Lingo",
        "shortExplanation": "New Relic University",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "NTH",
        "context": "Internet Slang",
        "shortExplanation": "Nice To Have (often for less critical features)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "NTLT",
        "context": "Technology",
        "shortExplanation": "Nerdlet Total Load Time",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "NVML",
        "context": "Technology",
        "shortExplanation": "Nvidia Management Library",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "o11y",
        "context": "NR Lingo",
        "shortExplanation": "Observability",
        "longExplanation": "Industry Lingo, but according to the Incident Commander Training there is also a NR team with that name (that ownse the Synthetic check metering?)",
        "link": ""
    },
    {
        "acronym": "OA",
        "context": "NR Lingo",
        "shortExplanation": "Orgs and Accounts",
        "longExplanation": "An IAM team",
        "link": "https://www.therelicans.com/wyhaines/what-is-o11y-14dm"
    },
    {
        "acronym": "OaC",
        "context": "NR Lingo",
        "shortExplanation": "Observability as Code",
        "longExplanation": "Deploying at scale (Terraform, Ansible, Puppet, etc.)",
        "link": ""
    },
    {
        "acronym": "OCI",
        "context": "Technology",
        "shortExplanation": "Oracle Cloud Infrastructure",
        "longExplanation": "a (smaller) competitor to AWS, Azure and GCP",
        "link": ""
    },
    {
        "acronym": "OCoE",
        "context": "NR Lingo",
        "shortExplanation": "Observability Centre of Excellence",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/observability-centre-of-excellence"
    },
    {
        "acronym": "Octalus",
        "context": "NR Internal Name",
        "shortExplanation": "Project to enhance NR AI with NR-internal knowledge sources. See Grok and Gaius",
        "longExplanation": "See Link or ask in #octalus-development",
        "link": "https://newrelic.atlassian.net/wiki/spaces/VIRTUOSO/pages/3066465795/Octalus+Product+Brief"
    },
    {
        "acronym": "OEM",
        "context": "Technology",
        "shortExplanation": "Original Equipment Manufacturer",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "OH",
        "context": "Corporate Lingo",
        "shortExplanation": "Office Hours",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "OH",
        "context": "Corporate Lingo",
        "shortExplanation": "Office Hours",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "OHAI",
        "context": "",
        "shortExplanation": "same as OHI now, I believe",
        "longExplanation": "was this a team name or a project around 2018 / 2019 ? https://nerdlife.datanerd.us/new-relic/search/ohai",
        "link": ""
    },
    {
        "acronym": "OHI",
        "context": "NR Lingo",
        "shortExplanation": "On-Host Integrations",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "OKI",
        "context": "",
        "shortExplanation": "On-Kubernetes Integrations",
        "longExplanation": "",
        "link": "https://docs.newrelic.com/docs/integrations/kubernetes-integration/link-apps-services/monitor-services-running-kubernetes"
    },
    {
        "acronym": "OKR",
        "context": "Corporate Lingo",
        "shortExplanation": "Objectives & Key Results",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/fy-21-corporate-okrs-key-results-baseline-data"
    },
    {
        "acronym": "OKTA",
        "context": "Technology",
        "shortExplanation": "Not an acronym, but an external company providing identity & access management (authentication / authorization) to NR",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "OLAP",
        "context": "Technology",
        "shortExplanation": "Online Analytical Processing",
        "longExplanation": "typically used in the context of OLTP versus OLAP (for databases)",
        "link": ""
    },
    {
        "acronym": "OLTP",
        "context": "Technology",
        "shortExplanation": "Online Transaction Processing",
        "longExplanation": "typically used in the context of OLTP versus OLAP (for databases)",
        "link": ""
    },
    {
        "acronym": "OMA",
        "context": "NR Lingo",
        "shortExplanation": "Observability Maturity Architecture",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "OMCA",
        "context": "Legal",
        "shortExplanation": "Online Master Cloud Agreement",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "OOBE",
        "context": "Corporate Lingo",
        "shortExplanation": "Out-of-the-box Experience",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "OOM",
        "context": "Technology",
        "shortExplanation": "Out-of-Memory (a typical Container error)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "OOO",
        "context": "Corporate Lingo",
        "shortExplanation": "Out of Office",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "OOTB",
        "context": "Corporate Lingo",
        "shortExplanation": "Out of the box (experience)",
        "longExplanation": "OOTB capabilities in New Relic would be those features that are pre-configured and can be used immediately after installation, without the need for extensive manual adjustments or setup.",
        "link": ""
    },
    {
        "acronym": "OpAMP",
        "context": "Technology",
        "shortExplanation": "Open Agent Management Protocol (part of oTel)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "Opp or Oppty",
        "context": "Go to Market ",
        "shortExplanation": "Opportunity (Salesforce)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "ORD",
        "context": "Corporate Lingo",
        "shortExplanation": "Chicago O’Hare (airport code)",
        "longExplanation": "Used for our Chicago data centers. \"CHI\" is also commonly used for the same purpose.",
        "link": ""
    },
    {
        "acronym": "OSA",
        "context": "",
        "shortExplanation": "Organization Storage Accounts",
        "longExplanation": "",
        "link": "https://newrelic.atlassian.net/wiki/spaces/IAM/pages/3850436640/Organization+Storage+Accounts"
    },
    {
        "acronym": "OSPO",
        "context": "NR Lingo",
        "shortExplanation": "Open Source Program Office",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/our-departments/product/open-source-program-office"
    },
    {
        "acronym": "OSS",
        "context": "Technology",
        "shortExplanation": "Open Source Software",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "OTC",
        "context": "Finance",
        "shortExplanation": "Order to Cash",
        "longExplanation": "Order to cash normally refers to one of the top-level business processes for receiving and processing customer orders and revenue recognition.",
        "link": ""
    },
    {
        "acronym": "OTE",
        "context": "Go to Market ",
        "shortExplanation": "On-Target Earnings",
        "longExplanation": "",
        "link": "https://en.wikipedia.org/wiki/On-target_earnings"
    },
    {
        "acronym": "OTel",
        "context": "Technology",
        "shortExplanation": "Open Telemetry",
        "longExplanation": "A Cloud Native Computing Foundation project aiming to provide standard APIs and agents for collection of distributed traces, metrics and telemetry data",
        "link": "https://opentelemetry.io/"
    },
    {
        "acronym": "OYC",
        "context": "NR Lingo",
        "shortExplanation": "Own Your Component - one of FY25's Dev initiatives for reliability",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "P-STL",
        "context": "Corporate Lingo",
        "shortExplanation": "Product Single Thread Leader",
        "longExplanation": "See STL. Product STLs are expected to define the Product Vision. the \"what\" + the \"why\"",
        "link": ""
    },
    {
        "acronym": "PA",
        "context": "NR Internal Name",
        "shortExplanation": "Product Assurance",
        "longExplanation": "Responbile for reviewing application and business logic design and code",
        "link": ""
    },
    {
        "acronym": "PAC",
        "context": "Go to Market ",
        "shortExplanation": "Partner Admin Console",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "PAI",
        "context": "NR Lingo",
        "shortExplanation": "Product Analytics Instrumentation Team",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "Paimon",
        "context": "Technology",
        "shortExplanation": "Apache Paimon - a lake format that enables building a Realtime Lakehouse Architecture with Flink and Spark for both streaming and batch operations.",
        "longExplanation": "",
        "link": "https://paimon.apache.org/"
    },
    {
        "acronym": "PASS",
        "context": "NR Internal Name",
        "shortExplanation": "Product and Subscription Services",
        "longExplanation": "responsible for entitlement",
        "link": "https://nerdlife.datanerd.us/new-relic/pass-infobits-november-2019"
    },
    {
        "acronym": "PAW",
        "context": "NR Lingo",
        "shortExplanation": "Partial Aggregation Windower",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/product-accomplishment-upgrading-windows-aggregator-in-daqs-9e4cdc6b-7a9c-466d-acbb-d89715bd44e7"
    },
    {
        "acronym": "PAYG",
        "context": "NR Lingo",
        "shortExplanation": "Pay-as-you-go",
        "longExplanation": "Consumption pricing",
        "link": "https://nerdlife.datanerd.us/new-relic/consumption-pricing-models-program"
    },
    {
        "acronym": "PAYG, New",
        "context": "Go to Market ",
        "shortExplanation": "Pay as You Go",
        "longExplanation": "Monthly subscription plan (no annual commit) - auto-renewas by Credit Card ",
        "link": ""
    },
    {
        "acronym": "PbD",
        "context": "",
        "shortExplanation": "Privacy by Default",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "PbD",
        "context": "",
        "shortExplanation": "Privacy by Design",
        "longExplanation": "",
        "link": "https://www.ipc.on.ca/wp-content/uploads/resources/7foundationalprinciples.pdf"
    },
    {
        "acronym": "PC",
        "context": "NR Internal Name",
        "shortExplanation": "Pipeline Control (versus Personal Computer, probably depends on context)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "PCA",
        "context": "Go to Market ",
        "shortExplanation": "Paid Customer Agreement",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "PCG",
        "context": "NR Internal Name",
        "shortExplanation": "Pipeline Control Gateway",
        "longExplanation": "(Oct 2024 - NOT GA yet / roadmap item.) Pipeline Control Gateway is to act as a on-premise NewRelic service through which all customer MELT data is destined to NewRelic Backend. This gateway service will enable customers to exert finer control of their data, providing ability to perform operations such as dropping unwanted data, modifying attributes, masking sensitive PII information,  sampling data, etc. ",
        "link": "https://newrelic.atlassian.net/wiki/spaces/PC/pages/3726213322/CDD+Pipeline+Control"
    },
    {
        "acronym": "PCI",
        "context": "Finance",
        "shortExplanation": "Payment Card Industry",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/pci-compliance"
    },
    {
        "acronym": "PCSM",
        "context": "Security and Compliance",
        "shortExplanation": "Portfolio Customer Success Manager",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "PD",
        "context": "NR Lingo",
        "shortExplanation": "Pager Duty (could mean being on call, or the company)",
        "longExplanation": "",
        "link": "https://en.wikipedia.org/wiki/Pager"
    },
    {
        "acronym": "PDI",
        "context": "NR Lingo",
        "shortExplanation": "Platform Data, and Intelligence ",
        "longExplanation": "Team name encompassing TDP & AIOps",
        "link": ""
    },
    {
        "acronym": "PDM",
        "context": "Go to Market ",
        "shortExplanation": "Partner Development Manager",
        "longExplanation": "NEWR GTM Role",
        "link": ""
    },
    {
        "acronym": "PDR",
        "context": "",
        "shortExplanation": "Personal Data Requests",
        "longExplanation": "See also DSR",
        "link": "https://nerdlife.datanerd.us/new-relic/personal-data-requests-process"
    },
    {
        "acronym": "Pegasus",
        "context": "NR Internal Name",
        "shortExplanation": "Infra-UI team or project ? ",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "PEO",
        "context": "",
        "shortExplanation": "Professional Employment Organization",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "PET",
        "context": "Security and Compliance",
        "shortExplanation": "Privacy-Enhancing Technologies",
        "longExplanation": "",
        "link": "https://en.wikipedia.org/wiki/Privacy-enhancing_technologies"
    },
    {
        "acronym": "PFA",
        "context": "Corporate Lingo",
        "shortExplanation": "Please Find Attached",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "PFD",
        "context": "NR Internal Name",
        "shortExplanation": "Public Facing Dashboards",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "PG Tuesdays",
        "context": "Go to Market ",
        "shortExplanation": "Pipeline Generation Tuesdays",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "PHI",
        "context": "Security and Compliance",
        "shortExplanation": "Protected Health Information",
        "longExplanation": "Defined by HIPAA",
        "link": ""
    },
    {
        "acronym": "PIE",
        "context": "NR Internal Name",
        "shortExplanation": "Platform Integrity Engineering",
        "longExplanation": "",
        "link": "https://source.datanerd.us/platform-integrity-engineering "
    },
    {
        "acronym": "PII",
        "context": "Security and Compliance",
        "shortExplanation": "Personally Identifiable Information",
        "longExplanation": "Definition varies by country and state",
        "link": ""
    },
    {
        "acronym": "PIPEDA",
        "context": "Security and Compliance",
        "shortExplanation": "Personal Information Protection and Electronic Documents Act",
        "longExplanation": "Canadian privacy laws",
        "link": "https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/"
    },
    {
        "acronym": "PIU",
        "context": "",
        "shortExplanation": "Profit Interest Unit",
        "longExplanation": "part of Profit Awards. Value realized only at a liquidity event.",
        "link": ""
    },
    {
        "acronym": "PLG",
        "context": "Go to Market ",
        "shortExplanation": "Product-Led Growth",
        "longExplanation": "",
        "link": " https://nerdlife.datanerd.us/new-relic/product-led-growth-plg"
    },
    {
        "acronym": "PM",
        "context": "Corporate Lingo",
        "shortExplanation": "Product Management",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "PM",
        "context": "Corporate Lingo",
        "shortExplanation": "Product Manager",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "PM2",
        "context": "Technology",
        "shortExplanation": "Proccess-Manager 2",
        "longExplanation": "Proccess manager required for the use of Virtuoso",
        "link": "https://pm2.keymetrics.io/"
    },
    {
        "acronym": "PMM",
        "context": "Corporate Lingo",
        "shortExplanation": "Product Marketing Manager",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "PMO",
        "context": "Corporate Lingo",
        "shortExplanation": "Project/Program Management Office",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "PO",
        "context": "Go to Market ",
        "shortExplanation": "Purchase Order",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "POA",
        "context": "Go to Market ",
        "shortExplanation": "Partnership Owning Account",
        "longExplanation": "",
        "link": "https://docs.newrelic.com/docs/new-relic-partnerships/partner-integration-guide/partner-account-maintenance/partnership-accounts-users-subscriptions#accounts"
    },
    {
        "acronym": "POAM",
        "context": "Security and Compliance",
        "shortExplanation": "Plan of Action and Milestones",
        "longExplanation": "",
        "link": "https://csrc.nist.gov/glossary/term/POAM"
    },
    {
        "acronym": "POC",
        "context": "Technology",
        "shortExplanation": "Proof of Concept",
        "longExplanation": "This is a POV (Proof of Value) same as POC (Proof of Concept) which is Pre Sales terms for setting up an environment to show a potential customer the value/benefits of NR. So TSS (Technical Solution Sales)will work with customers to demo the solution before the customer signs up.",
        "link": ""
    },
    {
        "acronym": "PoLP",
        "context": "Security and Compliance",
        "shortExplanation": "Principle of least privilege",
        "longExplanation": "",
        "link": "https://en.wikipedia.org/wiki/Principle_of_least_privilege"
    },
    {
        "acronym": "POMI",
        "context": "",
        "shortExplanation": "legacy nri-prometheus ",
        "longExplanation": "\"to be EOL in the future...\"",
        "link": ""
    },
    {
        "acronym": "POV",
        "context": "Go to Market ",
        "shortExplanation": "Proof of Value",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "PQR",
        "context": "NR Lingo",
        "shortExplanation": "Partial Query Results (to allow stop/pause/restart of complex queries)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "PR",
        "context": "Technology",
        "shortExplanation": "Pull Request",
        "longExplanation": "When developers write code - most of the time they will open a pull request in GHE for other developers to look at and review said code.",
        "link": "https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests"
    },
    {
        "acronym": "PRC",
        "context": "Corporate Lingo",
        "shortExplanation": "Production Readiness Checklist",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "PREP",
        "context": "Corporate Lingo",
        "shortExplanation": "Performance Drives Revenues Eficiencies Drive Productivity",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "PREP",
        "context": "",
        "shortExplanation": "Performance drives Revenues, Efficiencies drive Productivity",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "Pritunl",
        "context": "Technology",
        "shortExplanation": "In NR it is a VPN alternative \"in beta\" (as of 2024)",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/pritunl-client-installation"
    },
    {
        "acronym": "Progressions",
        "context": "NR Lingo",
        "shortExplanation": "Customers who progressed from free usage to paid usage",
        "longExplanation": "Customers who have an active credit card on file and were previously considered an unpaid PAYG due to usage, but now are considered paid and have exceeded their free entitlements",
        "link": ""
    },
    {
        "acronym": "PSIRT",
        "context": "Security and Compliance",
        "shortExplanation": "Product Security Incident Response Team",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "PSLI",
        "context": "NR Lingo",
        "shortExplanation": "Programmable Service Level Indicator",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "PSM",
        "context": "Go to Market ",
        "shortExplanation": "Partner Sales Manager",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/ac-field-teams"
    },
    {
        "acronym": "PSO",
        "context": "Technology",
        "shortExplanation": "Product Strategy & Operation",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/our-departments/product/product-operations"
    },
    {
        "acronym": "PSR",
        "context": "Go to Market ",
        "shortExplanation": "Pricing Support Request",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "PTG",
        "context": "NR Lingo",
        "shortExplanation": "Path To Green",
        "longExplanation": "PMO lingo, when a Jira Epic or Initiative is off-track. It should describe what is required to bring it back to an \"on track\" status. Examples could be adding resources, additional testing for quality, de-prioritizing other competing activities, resolving blockers, etc.",
        "link": ""
    },
    {
        "acronym": "PTO",
        "context": "Corporate Lingo",
        "shortExplanation": "Paid Time Off",
        "longExplanation": "Your vacation",
        "link": ""
    },
    {
        "acronym": "PXT",
        "context": "",
        "shortExplanation": "Project eXecution Team",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "QBP",
        "context": "NR Lingo",
        "shortExplanation": "Query Based Pricing",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "QBR",
        "context": "Go to Market ",
        "shortExplanation": "Quarterly Business Review",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "QDex",
        "context": "NR Internal Name",
        "shortExplanation": "Quality Index - a measure of our reliability",
        "longExplanation": "https://nerdlife.datanerd.us/new-relic/qdex-sneaks-into-upboard/a-new-way-to-measure-the-impact-of-incidents",
        "link": ""
    },
    {
        "acronym": "QTD",
        "context": "Go to Market ",
        "shortExplanation": "Quarter-to-date",
        "longExplanation": "Period starting at the beginning of the current quarter and ending at the current day",
        "link": ""
    },
    {
        "acronym": "QUEX",
        "context": "Corporate Lingo",
        "shortExplanation": "Query Experience",
        "longExplanation": "Abbreviation (and Jira project ID) for the Query Experience team.",
        "link": ""
    },
    {
        "acronym": "R28d",
        "context": "Finance",
        "shortExplanation": "rolling average over 28 days",
        "longExplanation": "used by finance / analytics to not have big up's and down's of ingest and other usage across weekends or night time etc.",
        "link": ""
    },
    {
        "acronym": "R7d",
        "context": "Finance",
        "shortExplanation": "rolling average over 7 days",
        "longExplanation": "used by finance / analytics to not have big up's and down's of ingest and other usage across weekends or night time etc.",
        "link": ""
    },
    {
        "acronym": "RAG",
        "context": "Technology",
        "shortExplanation": "Retrieval-Augmented Generation",
        "longExplanation": "RAG (Retrieval-Augmented Generation) is an AI framework that combines the strengths of traditional information retrieval systems (such as databases) with the capabilities of generative large language models (LLMs). By combining this extra knowledge with its own language skills, the AI can write text that is more accurate, up-to-date, and relevant to your specific needs.",
        "link": "https://cloud.google.com/use-cases/retrieval-augmented-generation?hl=en"
    },
    {
        "acronym": "RBAC",
        "context": "Technology",
        "shortExplanation": "Role Based Access Control",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "RCA",
        "context": "Corporate Lingo",
        "shortExplanation": "Root Cause Analysis",
        "longExplanation": "A customer-facing document explaining the causes of an incident/outage",
        "link": ""
    },
    {
        "acronym": "RCS",
        "context": "",
        "shortExplanation": "Reprocessing-candidate-service",
        "longExplanation": "seen on a 2025 tech talk about Metrics processing",
        "link": ""
    },
    {
        "acronym": "Regression",
        "context": "NR Lingo",
        "shortExplanation": "In GTM, a previously paid but in current month usage falls below allotted free entitlements",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "Req",
        "context": "Corporate Lingo",
        "shortExplanation": "Requesition - part of the formal process of hiring",
        "longExplanation": "this is often used for an open headcount, a new colleague pending to start, etc.",
        "link": ""
    },
    {
        "acronym": "REW",
        "context": "Corporate Lingo",
        "shortExplanation": "Real Estate and Workplace",
        "longExplanation": "Includes office administration, building and facilities",
        "link": "https://nerdlife.datanerd.us/new-relic/rew"
    },
    {
        "acronym": "RFI",
        "context": "Go to Market ",
        "shortExplanation": "Request for Information",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "RFP",
        "context": "Go to Market ",
        "shortExplanation": "Request for Proposal",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "RFQ",
        "context": "Go to Market ",
        "shortExplanation": "Request for Quote",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "RFQ - Request for Quote",
        "context": "Go to Market ",
        "shortExplanation": "Request for Quote",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "RI",
        "context": "",
        "shortExplanation": "Response Intelligence",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "RIF",
        "context": "Corporate Lingo",
        "shortExplanation": "Reduction in Force",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "RKT",
        "context": "NR Lingo",
        "shortExplanation": "Routed Kafka Team",
        "longExplanation": "old name - since November 2024 rebranded as SCS (Streaming Core Services)",
        "link": ""
    },
    {
        "acronym": "ROC",
        "context": "NR Internal Name",
        "shortExplanation": "Relics of Color",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/relics-of-color"
    },
    {
        "acronym": "ROE",
        "context": "Corporate Lingo",
        "shortExplanation": "Rules of Engagement",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "ROI",
        "context": "Finance",
        "shortExplanation": "Return on Investment",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "RPM",
        "context": "Technology",
        "shortExplanation": "Requests per Minute",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "RPM",
        "context": "Technology",
        "shortExplanation": "Ruby Performance Monitoring",
        "longExplanation": "New Relic began with Ruby performance and the url was rpm.newrelic.com. Now it is one.newrelic.com",
        "link": ""
    },
    {
        "acronym": "RPO",
        "context": "Technology",
        "shortExplanation": "Recovery Point Objective - how old my data is if restored from a backup",
        "longExplanation": "compare with RTO",
        "link": ""
    },
    {
        "acronym": "RPS",
        "context": "Technology",
        "shortExplanation": "Requests per second",
        "longExplanation": "Customer statistic, usually displayed as \"Average Device RPS\"",
        "link": ""
    },
    {
        "acronym": "RQA",
        "context": "",
        "shortExplanation": "RollQueue Aggregate",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "RSU",
        "context": "Finance",
        "shortExplanation": "Restricted Stock Units",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/what-exactly-is-a-restricted-stock-unit-or-rsu"
    },
    {
        "acronym": "RTO",
        "context": "Technology",
        "shortExplanation": "Recovery Time Objective - for example how long it takes to restore from a backup",
        "longExplanation": "compare with RPO",
        "link": "https://nerdlife.datanerd.us/new-relic/reducing-rto-to-6-hours"
    },
    {
        "acronym": "RTO",
        "context": "NR Lingo",
        "shortExplanation": "Return To Office",
        "longExplanation": "",
        "link": "https://docs.google.com/document/d/1NDbI7T0buAxjfv6xp69Eu1QwAk76aLA_brZv_0LvDpM/edit"
    },
    {
        "acronym": "RUM",
        "context": "NR Lingo",
        "shortExplanation": "Real User Monitoring",
        "longExplanation": "",
        "link": "https://en.wikipedia.org/wiki/Real_user_monitoring"
    },
    {
        "acronym": "RX",
        "context": "",
        "shortExplanation": "(Security RX) Remediation Explorer",
        "longExplanation": "2025 rebranding of what started as \"Vulnerability Management\" in the Infra+ group of EPD",
        "link": ""
    },
    {
        "acronym": "SA",
        "context": "Corporate Lingo",
        "shortExplanation": "Solution Architect (Technical customer facing role in GTM ) / Super Agent",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "SAI",
        "context": "Go to Market ",
        "shortExplanation": "Service Architecture Intelligence",
        "longExplanation": "one of the themes of the Feb Launch 2025; with Teams, (Advanced) Maps, Catalogs, Scorecards, GitHub Integration and Auto-Discovery) under it",
        "link": ""
    },
    {
        "acronym": "SAL",
        "context": "Go to Market ",
        "shortExplanation": "Sales Accepted Lead",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "SAML",
        "context": "",
        "shortExplanation": "Security Assertion Markup Language",
        "longExplanation": "",
        "link": "http://saml.xml.org/"
    },
    {
        "acronym": "SAMSA",
        "context": "",
        "shortExplanation": "Support Auditing MultiSource Automation",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/samsa-is-now-available-outside-of-wanda"
    },
    {
        "acronym": "SAP",
        "context": "Technology",
        "shortExplanation": "Systems, Applications, and Products in Data Processing",
        "longExplanation": "SAP is one of the world’s leading producers of software for the management of business processes, developing solutions that facilitate effective data processing and information flow across organizations.",
        "link": "https://www.sap.com/index.html"
    },
    {
        "acronym": "SAS",
        "context": "",
        "shortExplanation": "Safety & Security",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/safety-and-security"
    },
    {
        "acronym": "SBOM",
        "context": "",
        "shortExplanation": "Software bill of materials",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "SC",
        "context": "Go to Market ",
        "shortExplanation": "Solutions Consultant",
        "longExplanation": "Technical customer facing role in GTM.  For FY25 primarily drives ACR which loosely aligns to pre-sales.  Works with an Account Executive and Technical Success Manager.",
        "link": ""
    },
    {
        "acronym": "SCA",
        "context": "Go to Market ",
        "shortExplanation": "Strategic Collaboration Agreement",
        "longExplanation": "New Relic Expands Global Strategic Collaboration Agreement with AWS to Help Companies Accelerate Their Cloud Adoption Journey",
        "link": "https://newrelic.com/press-release/20201029"
    },
    {
        "acronym": "SCC",
        "context": "Security and Compliance",
        "shortExplanation": "Standard Contractual Clauses",
        "longExplanation": "Contractual terms to fulfill requirements of EU privacy law (GDPR)",
        "link": "̄"
    },
    {
        "acronym": "SCIM",
        "context": "NR Internal Name",
        "shortExplanation": "System for Cross-Domain Identity Management",
        "longExplanation": "",
        "link": "https://tools.ietf.org/html/rfc7644"
    },
    {
        "acronym": "SCP",
        "context": "Security and Compliance",
        "shortExplanation": "Service Control Policies",
        "longExplanation": "Enforceable policies that prevent certain actions from taking place, across the entire AWS organization.",
        "link": ""
    },
    {
        "acronym": "SCR",
        "context": "Security and Compliance",
        "shortExplanation": "Significant Change Request",
        "longExplanation": "As opposed to an ISR: insignificant change request (note: this is a joke)",
        "link": "https://nerdlife.datanerd.us/new-relic/nr-significant-change-management-process"
    },
    {
        "acronym": "SCS",
        "context": "NR Internal Name",
        "shortExplanation": "Streaming Core Services",
        "longExplanation": "previously known as RKT",
        "link": ""
    },
    {
        "acronym": "SCXM",
        "context": "Go to Market ",
        "shortExplanation": "Support Customer Experience Manager",
        "longExplanation": "Role in the Global Technical Support (GTS) Org at New Relic",
        "link": ""
    },
    {
        "acronym": "SDK",
        "context": "Technology",
        "shortExplanation": "Software Development Kit",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "SDLC",
        "context": "Technology",
        "shortExplanation": "Software Development Lifecycle",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "SDR",
        "context": "Corporate Lingo",
        "shortExplanation": "Sales Development Representative",
        "longExplanation": "GTM employee who tries to prospect, explore and establish sales opportunities",
        "link": ""
    },
    {
        "acronym": "SDX",
        "context": "",
        "shortExplanation": "Secure Developer eXperience",
        "longExplanation": "Threat Modeling Training (during onboarding)",
        "link": ""
    },
    {
        "acronym": "SE",
        "context": "Corporate Lingo",
        "shortExplanation": "Solution Engineer",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "SE",
        "context": "Go to Market ",
        "shortExplanation": "Solution Engineer",
        "longExplanation": "Technical customer facing role in GTM ",
        "link": ""
    },
    {
        "acronym": "SEA",
        "context": "NR Internal Name",
        "shortExplanation": "Security Engineering and Automation",
        "longExplanation": "Responsible for building incident response and detection tooling",
        "link": ""
    },
    {
        "acronym": "SED",
        "context": "NR Internal Name",
        "shortExplanation": "Streaming Event Decorator",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "SEIM",
        "context": "Technology",
        "shortExplanation": "Security Event and Incident Management",
        "longExplanation": "Refers to technologies/services/a component of the cybersecurity industry that provides real time analysis, monitoring, and alerting on security logs and generated by applications, hosts, and network devices.",
        "link": ""
    },
    {
        "acronym": "Seldon",
        "context": "NR Internal Name",
        "shortExplanation": "Old New Relic UI",
        "longExplanation": "Codename for the UI of the \"old\" products (APM, Browser, Infrastructure etc), see also Wanda. When said out loud, some folks add \"infra\" so you'll hear it said as \"InfraSeldon\". This is the iframe version that's being replaced by Pegasus.",
        "link": ""
    },
    {
        "acronym": "Sev",
        "context": "NR Lingo",
        "shortExplanation": "Severity",
        "longExplanation": "Severity of an issue. 1 is biggest, 2 is smaller, etc. 1 = site down (example) ",
        "link": ""
    },
    {
        "acronym": "SFCC",
        "context": "Go to Market ",
        "shortExplanation": "Salesforce Commerce Cloud",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "SFDC",
        "context": "Go to Market ",
        "shortExplanation": "Salesforce",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "SFDC",
        "context": "Go to Market ",
        "shortExplanation": "Salesforce.com",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "SG",
        "context": "Technology",
        "shortExplanation": "Service Gateway",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "SHD",
        "context": "NR Internal Name",
        "shortExplanation": "Service Health Dashboard",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "SHG",
        "context": "NR Lingo",
        "shortExplanation": "Service Health Graph",
        "longExplanation": "Consolodiates current incidents that are occurring against NR products and maps any customers that may be impacted by those incidents. It's a GraphQL endpoint",
        "link": ""
    },
    {
        "acronym": "SI",
        "context": "NR Internal Name",
        "shortExplanation": "System Identity",
        "longExplanation": "(might be the same as SIS, but is also seen as just SI)",
        "link": ""
    },
    {
        "acronym": "SIO",
        "context": "NR Lingo",
        "shortExplanation": "Single Initiative Owner",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "SIS",
        "context": "NR Internal Name",
        "shortExplanation": "System Identity Service",
        "longExplanation": "2024: Our Authentication and Authorization team is expand their feature set to add mechanisms for our agents to identify using a pair of private/public keys. Currently, we only have API Key based auth for APIs + user access.. so there's a new concept they need to implement for the Agent <> Fleet connection.",
        "link": ""
    },
    {
        "acronym": "SJM",
        "context": "NR Lingo",
        "shortExplanation": "Synthetics Job Manager",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "SKO",
        "context": "Go to Market ",
        "shortExplanation": "Sales Kick Off",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "SKO",
        "context": "Go to Market ",
        "shortExplanation": "Sales Kick Off",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "SKU",
        "context": "Technology",
        "shortExplanation": "Stock Keeping Unit",
        "longExplanation": "Unique ID referring to a product, and for digital products obviously no longer associated with any \"stock\". Still, each sales order and each customer invoice will have SKU's, one per line, usually together with their quantities, prices and description.",
        "link": ""
    },
    {
        "acronym": "SL",
        "context": "NR Lingo",
        "shortExplanation": "Sales-Led Account/s",
        "longExplanation": "Used by Growth to track accounts on NR",
        "link": ""
    },
    {
        "acronym": "SLA",
        "context": "Corporate Lingo",
        "shortExplanation": "Service Level Agreement",
        "longExplanation": "A legally binding contract spelling out the levels of availability that a customer can expect and the financial consequences if a vendor doesn't meet those levels of availability",
        "link": ""
    },
    {
        "acronym": "SLC",
        "context": "NR Lingo",
        "shortExplanation": "Security, Legal and Compliance",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "SLCREV",
        "context": "NR Lingo",
        "shortExplanation": "Security, Legal and Compliance Review",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "SLED",
        "context": "Go to Market ",
        "shortExplanation": "State, Local and Education",
        "longExplanation": "Account Executives that usually focus Public Sector (PubSec) customers",
        "link": ""
    },
    {
        "acronym": "SLI",
        "context": "Corporate Lingo",
        "shortExplanation": "Service Level Indicator",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "SLM",
        "context": "NR Lingo",
        "shortExplanation": "Service Level Management",
        "longExplanation": "How we measure the health of our systems",
        "link": ""
    },
    {
        "acronym": "SLO",
        "context": "Corporate Lingo",
        "shortExplanation": "Service Level Objectives",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "SLP",
        "context": "NR Lingo",
        "shortExplanation": "Support Landing Page",
        "longExplanation": "",
        "link": "https://support.newrelic.com/"
    },
    {
        "acronym": "SLRP",
        "context": "",
        "shortExplanation": "Strategic Long-Range Plan",
        "longExplanation": "a multi-year plan",
        "link": ""
    },
    {
        "acronym": "SME",
        "context": "Corporate Lingo",
        "shortExplanation": "Subject Matter Expert",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "SMK",
        "context": "Technology",
        "shortExplanation": "Self Managed Kafka",
        "longExplanation": "New Relic managing its own kafka as opposed to confluent or MSK",
        "link": ""
    },
    {
        "acronym": "SMR",
        "context": "NR Lingo",
        "shortExplanation": "Sales Morning Report",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "SNI",
        "context": "Technology",
        "shortExplanation": "Server Name Indication",
        "longExplanation": "Part of the protocol to initiate a secure connection between services",
        "link": "https://en.wikipedia.org/wiki/Server_Name_Indication"
    },
    {
        "acronym": "SOA",
        "context": "Technology",
        "shortExplanation": "Service-Oriented Architecture",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "SOC",
        "context": "",
        "shortExplanation": "Security Operations Center",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "SOC",
        "context": "Security and Compliance",
        "shortExplanation": "System and Organization Controls",
        "longExplanation": "A suite of reports produced during an audit, as defined by the American Institute of Certified Public Accountants (AICPA), see https://www.aicpa.org/interestareas/frc/assuranceadvisoryservices.html",
        "link": "https://en.wikipedia.org/wiki/System_and_Organization_Controls"
    },
    {
        "acronym": "SOC 2",
        "context": "Security and Compliance",
        "shortExplanation": "SOC for Service Organizations: Trust Services Criteria",
        "longExplanation": "An auditing process targeting inter-business relationships, focusing on security, availability, processing integrity, confidentiality, and privacy",
        "link": "https://en.wikipedia.org/wiki/System_and_Organization_Controls"
    },
    {
        "acronym": "SOPs",
        "context": "Corporate Lingo",
        "shortExplanation": "Standard Operating Procedures",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "SoT",
        "context": "Internet Slang",
        "shortExplanation": "System of Truth",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "Soteria",
        "context": "NR Internal Name",
        "shortExplanation": "Code name for NR's DevSecOps product",
        "longExplanation": "Soteria (sow·TEH·ree·uh) is a Greek goddess of safety and protection from harm",
        "link": "https://www.theoi.com/Daimon/Soteria.html"
    },
    {
        "acronym": "SOW",
        "context": "Corporate Lingo",
        "shortExplanation": "Statement of Work",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "SOX",
        "context": "Legal",
        "shortExplanation": "Sarbanes-Oxley Act",
        "longExplanation": "In 2002, the United States Congress passed the Sarbanes-Oxley Act (SOX) to protect shareholders and the general public from accounting errors and fraudulent practices in enterprises, and to improve the accuracy of corporate disclosures",
        "link": "https://en.wikipedia.org/wiki/Sarbanes%E2%80%93Oxley_Act"
    },
    {
        "acronym": "SPA",
        "context": "Technology",
        "shortExplanation": "Single-Page Application",
        "longExplanation": "",
        "link": "https://docs.newrelic.com/docs/browser/single-page-app-monitoring/get-started/introduction-single-page-app-monitoring"
    },
    {
        "acronym": "SPI",
        "context": "NR Internal Name",
        "shortExplanation": "Streaming Platform Infrastructure",
        "longExplanation": "new (Nov 2024) name for the team previously known as KPT",
        "link": ""
    },
    {
        "acronym": "SPIFFE",
        "context": "Technology",
        "shortExplanation": "Secure Production Identity Framework For Everyone",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "SPoF",
        "context": "",
        "shortExplanation": "Single Point of Failure",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "SQL",
        "context": "Go to Market ",
        "shortExplanation": "Sales Qualified Lead",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "SQL",
        "context": "Technology",
        "shortExplanation": "Structured Query Language",
        "longExplanation": "Method to perform database queries",
        "link": "https://en.wikipedia.org/wiki/SQL"
    },
    {
        "acronym": "SQO",
        "context": "Go to Market ",
        "shortExplanation": "Sales Qualified Opportunity",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "SQR",
        "context": "NR Internal Name",
        "shortExplanation": "Smart Query Routing",
        "longExplanation": "Set of services and components which route NRDB queries to the appropriate cells which contain the data for the query",
        "link": ""
    },
    {
        "acronym": "SQS",
        "context": "",
        "shortExplanation": "",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "SQuID",
        "context": "NR Lingo",
        "shortExplanation": "Shareholder Questions, Issues, and Direction",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "SRC",
        "context": "NR Internal Name",
        "shortExplanation": "Security Resource Center",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/security-resource-center"
    },
    {
        "acronym": "SRC",
        "context": "NR Lingo",
        "shortExplanation": "",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "SRE",
        "context": "Technology",
        "shortExplanation": "Site Reliability Engineering",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "SRR",
        "context": "NR Internal Name",
        "shortExplanation": "Security Research and Response",
        "longExplanation": "Responsible for incident response and investigations",
        "link": ""
    },
    {
        "acronym": "SRW",
        "context": "",
        "shortExplanation": "Summary Record Writer",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "SRX",
        "context": "",
        "shortExplanation": "Security RX",
        "longExplanation": "(previously Vulnerability Management)",
        "link": ""
    },
    {
        "acronym": "SS",
        "context": "NR Lingo",
        "shortExplanation": "Self-Serve Account",
        "longExplanation": "Used by Growth to track accounts on NR",
        "link": ""
    },
    {
        "acronym": "SSE",
        "context": "",
        "shortExplanation": "Support Systems Engineering",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "SSH",
        "context": "Technology",
        "shortExplanation": "Secure Shell",
        "longExplanation": "Tool to securely access remote servers for Ops work",
        "link": ""
    },
    {
        "acronym": "SSO",
        "context": "Security and Compliance",
        "shortExplanation": "Single Sign-On",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "SSO",
        "context": "Corporate Lingo",
        "shortExplanation": "Strategy, Systems & Operations",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/our-departments/ga/strategy-systems-and-operations"
    },
    {
        "acronym": "SSoT",
        "context": "Corporate Lingo",
        "shortExplanation": "Single Source of Truth",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "SSOT",
        "context": "Corporate Lingo",
        "shortExplanation": "Single Source of Truth",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "SSP",
        "context": "Technology",
        "shortExplanation": "Shared Service Platform",
        "longExplanation": "Amazon has a EKS \"SSP\" ",
        "link": ""
    },
    {
        "acronym": "SSRE",
        "context": "",
        "shortExplanation": "Streaming SRE ",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "STE",
        "context": "",
        "shortExplanation": "Support Tools Engineering",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "STL",
        "context": "Corporate Lingo",
        "shortExplanation": "Single Thread Leader",
        "longExplanation": "Initiatives / Primitives require a STL accountable for it's outcomes",
        "link": ""
    },
    {
        "acronym": "SUAPI",
        "context": "NR Lingo",
        "shortExplanation": "Symbol Upload API",
        "longExplanation": "",
        "link": "https://source.datanerd.us/mobile/symbol-upload-api-spring/"
    },
    {
        "acronym": "T-SEL",
        "context": "Go to Market ",
        "shortExplanation": "Technical Sales Engagement Lifecycle",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/t-sel-introducing-our-technical-sales-engagement-lifecycle"
    },
    {
        "acronym": "TA",
        "context": "",
        "shortExplanation": "Talent Aquisition (recruitment) / Trace Analyzer, a service (depending on context)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "TAK",
        "context": "NR Lingo",
        "shortExplanation": "Trusted Account Keys",
        "longExplanation": "",
        "link": "Page: Trusted Account Keys"
    },
    {
        "acronym": "TAM",
        "context": "Go to Market ",
        "shortExplanation": "Technical Account Manager",
        "longExplanation": "Role in the Customer Adoption Org within GTM at New Relic.  Renamed to TSM for FY25.",
        "link": ""
    },
    {
        "acronym": "TAM",
        "context": "Go to Market ",
        "shortExplanation": "Total Addressable Market",
        "longExplanation": "",
        "link": "https://en.wikipedia.org/wiki/Total_addressable_market"
    },
    {
        "acronym": "TAS",
        "context": "Go to Market ",
        "shortExplanation": "Total Addressable Spend",
        "longExplanation": "Total opportunity to grow an account to based on research by a 3rd party",
        "link": ""
    },
    {
        "acronym": "TBD",
        "context": "Corporate Lingo",
        "shortExplanation": "To Be Defined/Determined",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "TCO",
        "context": "Corporate Lingo",
        "shortExplanation": "Total Cost of Ownership",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "TCPA",
        "context": "Security and Compliance",
        "shortExplanation": "Telephone Consumer Protection Act",
        "longExplanation": "",
        "link": "https://www.fcc.gov/consumers/guides/stop-unwanted-robocalls-and-texts"
    },
    {
        "acronym": "TCV",
        "context": "Go to Market ",
        "shortExplanation": "Total Contract Value",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "TDMS",
        "context": "NR Internal Name",
        "shortExplanation": "Terraform Deploy Mechanism",
        "longExplanation": "(also known as TDM, TDMS, and TfDMS) to create and deploy your infrastructure. Tool to manage infrastructure as code.",
        "link": "https://pages.datanerd.us/site-engineering/nr-platform-docs/grand_central/terraform-deploy-mechanism.html"
    },
    {
        "acronym": "TDP",
        "context": "NR Lingo",
        "shortExplanation": "Telemetry Data Platform",
        "longExplanation": "Formerly known as CDP",
        "link": "https://nerdlife.datanerd.us/new-relic/all-site-map/product/depts-teams-a-l/data-platform"
    },
    {
        "acronym": "TDP",
        "context": "NR Lingo",
        "shortExplanation": "Telemetry Data Platform",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "Thunderblade",
        "context": "Project Name",
        "shortExplanation": "FY23 Q2 initiative to reduce cloud costs and increase efficiency to reduce Cost of Goods Sold (CoGS).",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "TI",
        "context": "Go to Market ",
        "shortExplanation": "Targeted Individual, but also see \"TI cells\"",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "TI cells",
        "context": "Technology",
        "shortExplanation": "Telemetry Ingest Cells",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "TIA",
        "context": "Internet Slang",
        "shortExplanation": "Thanks In Advance",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "TIA",
        "context": "Security and Compliance",
        "shortExplanation": "Transfer Impact Assessment",
        "longExplanation": "Mandary risk assessment ",
        "link": "https://blog.eprivacy.eu/?p=1127"
    },
    {
        "acronym": "TIL",
        "context": "Internet Slang",
        "shortExplanation": "Today I Learned (something new)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "TLA",
        "context": "",
        "shortExplanation": "Three Letter Acronym",
        "longExplanation": "",
        "link": "https://en.wikipedia.org/wiki/Three-letter_acronym"
    },
    {
        "acronym": "TLS",
        "context": "Security and Compliance",
        "shortExplanation": "Transport Layer Security (protocol)",
        "longExplanation": "SSL (Secure Sockets Layer) was the predecessor",
        "link": "https://en.wikipedia.org/wiki/Transport_Layer_Security"
    },
    {
        "acronym": "ToFu",
        "context": "Go to Market ",
        "shortExplanation": "Top of the Funnel (the widest audience in marketing, awareness)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "ToS",
        "context": "Corporate Lingo",
        "shortExplanation": "Terms of Service",
        "longExplanation": "",
        "link": "https://newrelic.com/termsandconditions/terms"
    },
    {
        "acronym": "TOTP",
        "context": "Security and Compliance",
        "shortExplanation": "Time-based One-time Password",
        "longExplanation": "",
        "link": "https://en.wikipedia.org/wiki/Time-based_One-time_Password_algorithm"
    },
    {
        "acronym": "TPG",
        "context": "Finance",
        "shortExplanation": "a global alternative asset management firm, involved in acquiring NR in July 2023",
        "longExplanation": "",
        "link": "https://www.franciscopartners.com/media/new-relic-to-be-acquired-by-francisco-partners-and-tpg-for-65-billion"
    },
    {
        "acronym": "TPM",
        "context": "Go to Market ",
        "shortExplanation": "Technical Product Manager",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/technical-product-management-tpm-responsibilities"
    },
    {
        "acronym": "TSE",
        "context": "NR Lingo",
        "shortExplanation": "Technical Support Engineer",
        "longExplanation": "Role in the Global Technical Support (GTS) Org at New Relic",
        "link": ""
    },
    {
        "acronym": "TSL",
        "context": "NR Lingo",
        "shortExplanation": "Total System Latency",
        "longExplanation": "Term used to monitory the synthetics jobs / minions ...",
        "link": ""
    },
    {
        "acronym": "TSM",
        "context": "Go to Market ",
        "shortExplanation": "Technical Success Manager",
        "longExplanation": "Customer-facing role in the Customer Adoption org, works alongside an Account Executive and Solutions Consultant.  For FY25 primarily drives consumption which loosely aligns to post-sales.  Previously called TAM (Technical Account Manager).",
        "link": ""
    },
    {
        "acronym": "TSM",
        "context": "Go to Market ",
        "shortExplanation": "Technical Support Manager",
        "longExplanation": "Role in the Global Technical Support (GTS) Org at New Relic",
        "link": ""
    },
    {
        "acronym": "TSS",
        "context": "Go to Market ",
        "shortExplanation": "Technical Solution Sales",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/technical-solution-sales"
    },
    {
        "acronym": "TSS",
        "context": "Go to Market ",
        "shortExplanation": "Technical Solution Sales",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "TTR",
        "context": "NR Lingo",
        "shortExplanation": "Time To Resolution",
        "longExplanation": "The amount of time it takes to resolve an issue either with a client or co-worker",
        "link": ""
    },
    {
        "acronym": "TtT",
        "context": "Corporate Lingo",
        "shortExplanation": "Train the Trainer",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "UAT",
        "context": "Technology",
        "shortExplanation": "User Acceptance Testing",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "UCIG",
        "context": "",
        "shortExplanation": "Use Case Implementation Guide (as in the \"OMA SLM UCIG\" - and that's not made up)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "UDS",
        "context": "NR Lingo",
        "shortExplanation": "Unified Data Streams (team name)",
        "longExplanation": "An engineering team in product #help-unified-dstreams",
        "link": ""
    },
    {
        "acronym": "UMS",
        "context": "NR Lingo",
        "shortExplanation": "User Monetization Service",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "UMTS",
        "context": "",
        "shortExplanation": "Unique Metric Time Series (related to the \"cardinality limit\") - note that outside of NR this is a mobile phone acronym",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "UOM",
        "context": "Technology",
        "shortExplanation": "Unit of Measure",
        "longExplanation": "Used by various product systems to determine how much of a given service to provide to an account",
        "link": ""
    },
    {
        "acronym": "Upboard",
        "context": "NR Internal Name",
        "shortExplanation": "NR production incident management system",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "Upscale",
        "context": "Project Name",
        "shortExplanation": "",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "UQE",
        "context": "Project Name",
        "shortExplanation": "Unified Querying Experience",
        "longExplanation": "",
        "link": "https://newrelic.atlassian.net/wiki/spaces/DASHECO/pages/3147498022/Integration+with+the+new+querying+experience+UQE"
    },
    {
        "acronym": "URP, URM",
        "context": "Internet Slang",
        "shortExplanation": "Under-Represented People/Minority",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "USCI",
        "context": "",
        "shortExplanation": "Urgent Single Customer Instance",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "UUUI",
        "context": "Technology",
        "shortExplanation": "Unified Usage User Interface",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "VAR",
        "context": "NR Internal Name",
        "shortExplanation": "Value Adoption Review",
        "longExplanation": "Sales report for customers to drive conversation",
        "link": ""
    },
    {
        "acronym": "VIP",
        "context": "Technology",
        "shortExplanation": "Virtual IP",
        "longExplanation": "refers to an IP address that does not correspond to an actual physical network interface on a single host. For example, it might be the frontend address for a load balanced pool of hosts, all serving instances of the same service. In local (New Relic) usage, it is sometimes used to refer to a DNS name pointing to an actual VIP, or (rarely and confusingly) any DNS name, whether it points to an actual VIP or not.",
        "link": ""
    },
    {
        "acronym": "Visine",
        "context": "Project Name",
        "shortExplanation": "",
        "longExplanation": "circa 2015",
        "link": ""
    },
    {
        "acronym": "Vizco",
        "context": "NR Internal Name",
        "shortExplanation": "",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "VM",
        "context": "",
        "shortExplanation": "Vulnerability Management (in NR) versus \"Virtual Machine\" elsewhere",
        "longExplanation": "2025 rebranded from Vulnerability Management to Security RX",
        "link": ""
    },
    {
        "acronym": "VMC",
        "context": "",
        "shortExplanation": "Vulnerability Management Capability team (in NR) and VMware Cloud (elsewhere)",
        "longExplanation": "clash between rest of IT world and New Relic",
        "link": ""
    },
    {
        "acronym": "VMO",
        "context": "NR Lingo",
        "shortExplanation": "Vendor Management Office",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/vendor-management-office-vmo"
    },
    {
        "acronym": "Vortex",
        "context": "NR Lingo",
        "shortExplanation": "an NR edge component that is involved in almost all inbound data ingest, handling auth, limits and route to the appropriate Kafka topic",
        "longExplanation": "",
        "link": "https://newrelic.atlassian.net/wiki/spaces/TDP/pages/2236776508/Ingest+Pipeline+Team"
    },
    {
        "acronym": "VP",
        "context": "Corporate Lingo",
        "shortExplanation": "Vice President",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "VPC",
        "context": "Technology",
        "shortExplanation": "Virtual Private Cloud",
        "longExplanation": "A logically isolated section in AWS to launch resources in a virtual network",
        "link": "https://aws.amazon.com/vpc/"
    },
    {
        "acronym": "VPN",
        "context": "Technology",
        "shortExplanation": "Virtual Private Network",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "VPS",
        "context": "Technology",
        "shortExplanation": "Virtual Private Server",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "VRI",
        "context": "NR Lingo",
        "shortExplanation": "Vendor Review Intake",
        "longExplanation": "Formal process for intaking new vendors. Part of VMO.",
        "link": "https://nerdlife.datanerd.us/new-relic/vendor-management-office-vmo"
    },
    {
        "acronym": "VRR",
        "context": "Security and Compliance",
        "shortExplanation": "Vulnerability Research and Response",
        "longExplanation": "Refers to technologies/services/a component of the cybersecurity industry that provides real time analysis, monitoring, and alerting on security logs and data generated by applications, hosts, and network devices.",
        "link": ""
    },
    {
        "acronym": "VSE",
        "context": "",
        "shortExplanation": "Verified Script Execution",
        "longExplanation": "In the context of containerized Synthetics minions",
        "link": "https://docs.newrelic.com/docs/synthetics/new-relic-synthetics/private-locations/verified-script-execution-private-locations"
    },
    {
        "acronym": "VSU",
        "context": "Go to Market ",
        "shortExplanation": "Verified Sign Up",
        "longExplanation": "Verified Sign-up or Sign-ups = users who sign up for New Relic and validate their email by clicking the link sent by New Relic",
        "link": ""
    },
    {
        "acronym": "VTO",
        "context": "Corporate Lingo",
        "shortExplanation": "Volunteer Time Off",
        "longExplanation": "See also CSH",
        "link": "https://nerdlife.datanerd.us/new-relic/employee-volunteerism-and-giving"
    },
    {
        "acronym": "WAF",
        "context": "",
        "shortExplanation": "AWS Web Application Firewall",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "WAL",
        "context": "Technology",
        "shortExplanation": "Write Ahead Logging",
        "longExplanation": "see link",
        "link": "https://www.postgresql.org/docs/current/wal-intro.html"
    },
    {
        "acronym": "Wanda",
        "context": "NR Internal Name",
        "shortExplanation": "New Relic One UI",
        "longExplanation": "Codename for the UI of the NR1 platform cerca 2018, see also Seldon",
        "link": ""
    },
    {
        "acronym": "WAPU",
        "context": "",
        "shortExplanation": "Weekly Active Paid Users",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "WASM",
        "context": "Technology",
        "shortExplanation": "Web Assembly",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "WAU",
        "context": "Corporate Lingo",
        "shortExplanation": "Weekly Active Users",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "WBR",
        "context": "Corporate Lingo",
        "shortExplanation": "Weekly Business Review (meeting)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "WCAG",
        "context": "Technology",
        "shortExplanation": "Web Content Accessibility Guidelines",
        "longExplanation": "",
        "link": "https://www.w3.org/TR/WCAG21/"
    },
    {
        "acronym": "WDYT",
        "context": "NR Lingo",
        "shortExplanation": "What Do You Think?",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "WER",
        "context": "NR Lingo",
        "shortExplanation": "Weekly Engineering Review (meeting)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "WFM",
        "context": "NR Internal Name",
        "shortExplanation": "Wayfinder Monitor",
        "longExplanation": "Used by the Traffic routing team to monitor the health of the interface (known as Wayfinder) between our customers and AWS",
        "link": ""
    },
    {
        "acronym": "WFM",
        "context": "NR Lingo",
        "shortExplanation": "Workforce Management System",
        "longExplanation": "Playvox Workforce Management System is often referred to as a WFM",
        "link": ""
    },
    {
        "acronym": "WFP",
        "context": "Finance",
        "shortExplanation": "Workforce Planning",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "WH",
        "context": "NR Lingo",
        "shortExplanation": "Working Hours",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "WIF",
        "context": "Technology",
        "shortExplanation": "Windows Identity Foundation",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "Willamette",
        "context": "NR Internal Name",
        "shortExplanation": "code name for the 2020 alerts pipeline project - see link",
        "longExplanation": "",
        "link": "https://nerdlife.datanerd.us/new-relic/alerts-pipeline-update-dec-2020-e0276dea-508d-43d2-a71b-d145ae025e2c"
    },
    {
        "acronym": "WIN",
        "context": "NR Internal Name",
        "shortExplanation": "Workflows & Notifications Platform",
        "longExplanation": "Based in Tel Aviv, this team owns all the notifications services (like JIRA workflow destinations)",
        "link": ""
    },
    {
        "acronym": "WMP",
        "context": "",
        "shortExplanation": "Workload Performance Monitoring",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "WoW",
        "context": "",
        "shortExplanation": "Week over week",
        "longExplanation": "in data analytics, comparing the last 7 days against the 7 days before that. Could be GBs of Ingest, could be unique users, could be CCUs",
        "link": ""
    },
    {
        "acronym": "WPA",
        "context": "NR Lingo",
        "shortExplanation": "Weekly Platform Adoption (in reporting/analytics)",
        "longExplanation": "not to be confused with Wi-Fi Protected Access ",
        "link": ""
    },
    {
        "acronym": "WPM",
        "context": "",
        "shortExplanation": "Website Performance Monitoring",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "WRU",
        "context": "Corporate Lingo",
        "shortExplanation": "Weekly Recurring Users",
        "longExplanation": "Helix metric",
        "link": ""
    },
    {
        "acronym": "XD",
        "context": "Corporate Lingo",
        "shortExplanation": "Experience Design (team/group)",
        "longExplanation": "Parent group for Design, Research, and Product Language",
        "link": "https://nerdlife.datanerd.us/new-relic/all-site-map/product/depts-teams-m-z/xd"
    },
    {
        "acronym": "XPIPE",
        "context": "NR Lingo",
        "shortExplanation": "Cross Pipes (team)",
        "longExplanation": "",
        "link": ""
    },
    {
        "acronym": "ZIRP",
        "context": "Finance",
        "shortExplanation": "Zero Interest Rate Period or - Policy",
        "longExplanation": "In the USA refering to December 2008 through December 2015 and again from March 2020 to March 2022",
        "link": ""
    },
    {
        "acronym": "Zuora",
        "context": "Technology",
        "shortExplanation": "a 3rd party vendor that New relic uses for substription management",
        "longExplanation": "",
        "link": ""
    }
]