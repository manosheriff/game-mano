// 100 Term -> Definition pairs covering all 11 lectures
// The game engine picks 3 random OTHER definitions from this pool as distractors at runtime.
const DEF_DATA = [
// ===== Lecture 1 (16) =====
{lecture:"L1 - Intro to Operations Management", term:"Operations Management", definition:"The management of systems or processes that create goods and/or provide services."},
{lecture:"L1 - Intro to Operations Management", term:"Value-added", definition:"The difference between the cost of inputs and the value or price of outputs."},
{lecture:"L1 - Intro to Operations Management", term:"Product package", definition:"A combination of goods and services that can make a company more competitive."},
{lecture:"L1 - Intro to Operations Management", term:"Model", definition:"An abstraction of reality used to gain insight into how something works."},
{lecture:"L1 - Intro to Operations Management", term:"Systems approach", definition:"A decision-making approach based on the idea that 'the whole is greater than the sum of the parts.'"},
{lecture:"L1 - Intro to Operations Management", term:"Pareto Phenomenon", definition:"The idea that a few factors account for a high percentage of the occurrence of some events, e.g., 80% of problems are caused by 20% of activities."},
{lecture:"L1 - Intro to Operations Management", term:"Supply chain", definition:"A sequence of activities and organizations involved in producing and delivering a good or service."},
{lecture:"L1 - Intro to Operations Management", term:"Technology", definition:"The application of scientific discoveries to the development and improvement of goods and services."},
{lecture:"L1 - Intro to Operations Management", term:"Goods-Service Continuum", definition:"A spectrum ranging from pure goods (e.g., automobile assembly, steel making) to pure services (e.g., surgery, teaching)."},
{lecture:"L1 - Intro to Operations Management", term:"Scope of Operations Management", definition:"Forecasting, capacity planning, scheduling, managing inventories, assuring quality, motivating employees, deciding where to locate facilities, and supply chain management."},
{lecture:"L1 - Intro to Operations Management", term:"Key Decisions of Operations Managers", definition:"The What, When, Where, How, and Who decisions involved in running operations."},
{lecture:"L1 - Intro to Operations Management", term:"Quantitative Approaches", definition:"Linear programming, queuing techniques, inventory models, project models, and statistical models used in OM decision making."},
{lecture:"L1 - Intro to Operations Management", term:"Analysis of Trade-offs", definition:"Weighing competing factors in a decision, such as the increased cost of holding inventory versus the level of customer service."},
{lecture:"L1 - Intro to Operations Management", term:"Historical Evolution of Operations Management", definition:"The progression including the Industrial Revolution (1770s), Scientific management (1911), the Human relations movement (1920-60), decision models, and the influence of Japanese manufacturers."},
{lecture:"L1 - Intro to Operations Management", term:"Limitations of Models", definition:"Quantitative information may be emphasized over qualitative, models may be incorrectly applied or misinterpreted, nonqualified users may not understand the rules, and models do not guarantee good decisions."},
{lecture:"L1 - Intro to Operations Management", term:"Why Manufacturing Matters", definition:"Manufacturing employs over 18 million workers, accounts for over 70% of U.S. export value, pays about 20% higher compensation than average, and performs over half of all R&D."},

// ===== Lecture 2 (6) =====
{lecture:"L2 - Globalization & International Business", term:"Globalization", definition:"The broadening set of interdependent relationships among people from different parts of a world that happens to be divided into nations."},
{lecture:"L2 - Globalization & International Business", term:"International business", definition:"All commercial transactions - including sales, investments, and transportation - that take place between two or more countries."},
{lecture:"L2 - Globalization & International Business", term:"Criticisms of Globalization", definition:"Threats to national sovereignty, growth and environmental stress, and growing income inequality."},
{lecture:"L2 - Globalization & International Business", term:"Modes of Operation in International Business", definition:"Merchandise exports and imports, service exports and imports, tourism and transportation, service performance, asset use, and investments."},
{lecture:"L2 - Globalization & International Business", term:"Multinational Enterprise (MNE)", definition:"A type of international organization, alongside collaborative arrangements and strategic alliances, used to accomplish global objectives."},
{lecture:"L2 - Globalization & International Business", term:"Factors in Increased Globalization", definition:"Increase in and expansion of technology, liberalization of cross-border trade and resource movements, development of supporting services, growing consumer pressures, increased global competition, changing political situations, and expanded cross-national cooperation."},

// ===== Lecture 3 (9) =====
{lecture:"L3 - Cultural Environments", term:"Culture", definition:"Learned norms based on the values, attitudes, and beliefs of a group of people."},
{lecture:"L3 - Cultural Environments", term:"The People Factor", definition:"A topic covering cultural diversity, cultural collision, and sensitivity and adjustment."},
{lecture:"L3 - Cultural Environments", term:"Ascribed group membership", definition:"Group membership that is determined at birth."},
{lecture:"L3 - Cultural Environments", term:"Acquired group membership", definition:"Group membership that is based on one's own choice of affiliation."},
{lecture:"L3 - Cultural Environments", term:"Issues in Work Motivation", definition:"Materialism and motivation, expectation of success and reward, assertiveness (the Masculinity-Femininity Index), and hierarchies of needs."},
{lecture:"L3 - Cultural Environments", term:"Factors Affecting Relationship Preferences", definition:"Power distance and individualism vs. collectivism."},
{lecture:"L3 - Cultural Environments", term:"Factors Affecting Risk-taking Behavior", definition:"Uncertainty avoidance, trust, future orientation, and fatalism."},
{lecture:"L3 - Cultural Environments", term:"Dealing with Cultural Differences", definition:"Accommodation, cultural distance, culture shock, and company/management orientations such as polycentric, ethnocentric, and geocentric."},
{lecture:"L3 - Cultural Environments", term:"Factors Affecting Strategies for Instituting Cultural Change", definition:"Value systems, cost/benefits of change, resistance to too much change, participation, reward sharing, opinion leadership, timing, and learning abroad."},

// ===== Lecture 4 (9) =====
{lecture:"L4 - Political & Legal Environments", term:"Political system", definition:"The complete set of institutions, political organizations, and interest groups, the relationships among institutions, and the political norms and rules that govern their functions."},
{lecture:"L4 - Political & Legal Environments", term:"Individualism", definition:"The primacy of the rights and role of the individual."},
{lecture:"L4 - Political & Legal Environments", term:"Collectivism", definition:"The primacy of the rights and role of the community."},
{lecture:"L4 - Political & Legal Environments", term:"Political ideology", definition:"The system of ideas that expresses the goals, theories, and aims of a sociopolitical program."},
{lecture:"L4 - Political & Legal Environments", term:"Democracy", definition:"A political system characterized by wide participation by citizens in the decision-making process."},
{lecture:"L4 - Political & Legal Environments", term:"Totalitarianism", definition:"A political system that restricts decision making to a few individuals."},
{lecture:"L4 - Political & Legal Environments", term:"Political risk", definition:"The risk that political decisions or events in a country negatively affect the profitability or sustainability of an investment."},
{lecture:"L4 - Political & Legal Environments", term:"Legal system", definition:"The mechanism for creating, interpreting, and enforcing the laws in a specified jurisdiction."},
{lecture:"L4 - Political & Legal Environments", term:"Intellectual property", definition:"Intangible property rights that are a result of intellectual effort, referring to the right to control and derive benefits from writing, inventions, processes, and identifiers."},

// ===== Lecture 5 (7) =====
{lecture:"L5 - Economic Environments", term:"Gross National Income (GNI)", definition:"The income generated both by total domestic production as well as the international production activities of national companies."},
{lecture:"L5 - Economic Environments", term:"Gross Domestic Product (GDP)", definition:"The total value of all goods and services produced within a nation's borders over one year, regardless of company ownership."},
{lecture:"L5 - Economic Environments", term:"Economic system", definition:"A mechanism that deals with the production, distribution, and consumption of goods and services."},
{lecture:"L5 - Economic Environments", term:"Economic Freedom Index", definition:"An index approximating the extent to which a government intervenes in free choice, free enterprise, and market-driven prices beyond protecting property, liberty, citizen safety, and market efficiency."},
{lecture:"L5 - Economic Environments", term:"Adjustments to GNI", definition:"Number of people in a country, growth rate, local cost of living, and economic sustainability."},
{lecture:"L5 - Economic Environments", term:"Other features of an economy", definition:"Inflation, unemployment, debt, income distribution, poverty, labor costs, productivity, and balance of payments."},
{lecture:"L5 - Economic Environments", term:"Transition to a Market Economy", definition:"Liberalizing economic activity, reforming business activity, and establishing legal and institutional frameworks, with success linked to privatization, deregulation, property right protection, fiscal/monetary reform, and antitrust legislation."},

// ===== Lecture 6 (8) =====
{lecture:"L6 - Globalization & Society", term:"Foreign Direct Investment (FDI)", definition:"Investment by multinational enterprises whose large size can cause concern for some receiving countries."},
{lecture:"L6 - Globalization & Society", term:"Balance-of-Payments effects (of the MNE)", definition:"The net import effect and net capital flow caused by an MNE's activities."},
{lecture:"L6 - Globalization & Society", term:"Growth and Employment effects (of the MNE)", definition:"Home-country losses, host-country gains, and host-country losses resulting from MNE activity."},
{lecture:"L6 - Globalization & Society", term:"Cultural Foundations of Ethical Behavior", definition:"Relativism vs. normativism, negotiating between evils, and respecting cultural identity."},
{lecture:"L6 - Globalization & Society", term:"Bribes", definition:"Payments or promises to pay cash or anything of value, used to get government contracts or to get officials to do what they should be doing anyway."},
{lecture:"L6 - Globalization & Society", term:"What's Being Done About Corruption", definition:"Cross-national accords (the OECD, ICC, and UN), the U.S. Foreign Corrupt Practices Act, and Industry Initiatives."},
{lecture:"L6 - Globalization & Society", term:"Ethics and the Environment", definition:"Sustainability, global warming and the Kyoto Protocol, national and regional initiatives, and company-specific initiatives."},
{lecture:"L6 - Globalization & Society", term:"Ethical Dimensions of Labor Conditions", definition:"The Ethical Trading Initiative, the Problem of Child Labor, and what MNEs can and can't do."},

// ===== Lecture 7 (9) =====
{lecture:"L7 - Trade & Factor-Mobility Theory", term:"Mercantilism", definition:"An interventionist theory proposing that a country should try to achieve a favorable balance of trade by exporting more than it imports."},
{lecture:"L7 - Trade & Factor-Mobility Theory", term:"Neomercantilism", definition:"A policy that also seeks a favorable balance of trade, but whose purpose is to achieve a social or political objective."},
{lecture:"L7 - Trade & Factor-Mobility Theory", term:"Theory of Absolute Advantage", definition:"A theory suggesting specialization through free trade because consumers will be better off buying foreign-made products priced more cheaply than domestic ones."},
{lecture:"L7 - Trade & Factor-Mobility Theory", term:"Theory of Comparative Advantage", definition:"A theory proposing specialization through free trade because total global output can increase even if one country has an absolute advantage in producing all products."},
{lecture:"L7 - Trade & Factor-Mobility Theory", term:"Theory of Country Size", definition:"The idea that countries with large land areas tend to have varied climates and natural resources and are generally more self-sufficient than smaller countries."},
{lecture:"L7 - Trade & Factor-Mobility Theory", term:"Factor-Proportions Theory", definition:"A theory stating that a country's relative endowments of land, labor, and capital determine the relative costs of these factors, which in turn determine which goods it can produce most efficiently."},
{lecture:"L7 - Trade & Factor-Mobility Theory", term:"Country-Similarity Theory", definition:"A theory explaining trading patterns through cultural similarity, political and economic agreements, and the distance between countries."},
{lecture:"L7 - Trade & Factor-Mobility Theory", term:"Product Life Cycle (PLC) Theory", definition:"A theory stating that products are first manufactured in the developed countries where they were researched and developed, then production shifts to developing economies as the product reaches maturity and decline."},
{lecture:"L7 - Trade & Factor-Mobility Theory", term:"The Porter Diamond", definition:"A framework identifying demand conditions, factor conditions, related and supporting industries, and firm strategy/structure/rivalry as conditions important for competitive superiority."},

// ===== Lecture 8 (8) =====
{lecture:"L8 - Global Foreign-Exchange Markets", term:"Foreign exchange", definition:"Money denominated in the currency of another nation or group of nations."},
{lecture:"L8 - Global Foreign-Exchange Markets", term:"Exchange rate", definition:"The price of a currency."},
{lecture:"L8 - Global Foreign-Exchange Markets", term:"Spot transaction", definition:"An exchange of currency on the second day after the date on which the two dealers agree to the transaction."},
{lecture:"L8 - Global Foreign-Exchange Markets", term:"FX swap", definition:"A simultaneous spot and forward transaction."},
{lecture:"L8 - Global Foreign-Exchange Markets", term:"Currency swap", definition:"A derivative dealing with interest-bearing financial instruments such as a bond, involving the exchange of principal and interest payments."},
{lecture:"L8 - Global Foreign-Exchange Markets", term:"Option (in FX)", definition:"The right, but not the obligation, to trade foreign currency in the future."},
{lecture:"L8 - Global Foreign-Exchange Markets", term:"Futures contract", definition:"An agreement between two parties to buy or sell a particular currency at a particular price on a particular future date."},
{lecture:"L8 - Global Foreign-Exchange Markets", term:"American terms", definition:"A currency quote in which the dealer quotes the foreign currency as the number of dollars and cents per unit of the foreign currency."},

// ===== Lecture 9 (9) =====
{lecture:"L9 - Determination of Exchange Rates", term:"International Monetary Fund (IMF)", definition:"An organization, originally organized in 1945, that promotes monetary cooperation, exchange stability, orderly exchange arrangements, economic growth/employment, and provides temporary financial assistance to ease balance-of-payments adjustment."},
{lecture:"L9 - Determination of Exchange Rates", term:"Bretton Woods Agreement", definition:"An agreement that set a fixed exchange rate against gold and the US dollar."},
{lecture:"L9 - Determination of Exchange Rates", term:"Jamaica Agreement", definition:"A 1976 agreement that eliminated par values against gold and the US dollar and permitted greater flexibility."},
{lecture:"L9 - Determination of Exchange Rates", term:"Special Drawing Right (SDR)", definition:"A special asset created by the IMF to increase international reserves, whose value is based on a weighted average of the US dollar, euro, Japanese yen, and British pound."},
{lecture:"L9 - Determination of Exchange Rates", term:"European Monetary System (EMS)", definition:"A system established by the EU (then the EC) in 1979 as a means of creating exchange rate stability within the bloc."},
{lecture:"L9 - Determination of Exchange Rates", term:"European Monetary Union (EMU)", definition:"A formal arrangement linking many but not all of the currencies of the EU."},
{lecture:"L9 - Determination of Exchange Rates", term:"Black market (currency)", definition:"A market that arises in countries with strict currency convertibility controls, maintaining an exchange rate more indicative of supply and demand than the official rate."},
{lecture:"L9 - Determination of Exchange Rates", term:"Exchange controls", definition:"Restrictions imposed by governments to conserve scarce foreign exchange, such as import licensing, multiple exchange rates, import deposit requirements, and quantity controls."},
{lecture:"L9 - Determination of Exchange Rates", term:"Fundamental forecasting", definition:"A forecasting method that uses trends in economic variables to predict future exchange rates, via an econometric model or subjective evaluation."},

// ===== Lecture 10 (9) =====
{lecture:"L10 - Marketing Globally", term:"Sales orientation", definition:"An approach where a company tries to sell abroad what it can sell domestically and in the same manner, on the assumption that consumers are sufficiently similar globally."},
{lecture:"L10 - Marketing Globally", term:"Societal Marketing orientation", definition:"An orientation in which companies consider effects on all stakeholders when selling or making their products."},
{lecture:"L10 - Marketing Globally", term:"Strategic Marketing orientation", definition:"An orientation that combines production, sales, and customer orientations."},
{lecture:"L10 - Marketing Globally", term:"Push-Pull Mix", definition:"The categorization of promotion as push (direct selling techniques) or pull (mass media), and the decision about the mix between them."},
{lecture:"L10 - Marketing Globally", term:"Standardization of Advertising", definition:"An approach whose advantages include cost savings, better quality at the local level, and rapid entry into different countries, but whose major problems include translation, legality, and message needs."},
{lecture:"L10 - Marketing Globally", term:"Brand", definition:"An identifying mark for products or services."},
{lecture:"L10 - Marketing Globally", term:"Distribution", definition:"The course - physical path or legal title - that goods take between production and consumption."},
{lecture:"L10 - Marketing Globally", term:"Choosing Distributors and Channels", definition:"Evaluating distributors based on financial capability, connections with customers, fit with the company's product, other resources, trustworthiness, and compatibility with product image."},
{lecture:"L10 - Marketing Globally", term:"Marketing Mix Gaps", definition:"Usage, product line, distribution, and competitive gaps that explain the difference between total market potential and a company's sales."},

// ===== Lecture 11 (10) =====
{lecture:"L11 - Global Manufacturing & SCM", term:"Logistics (materials management)", definition:"The part of the supply chain process that plans, implements, and controls the efficient, effective flow and storage of goods, services, and related information from the point of origin to the point of consumption."},
{lecture:"L11 - Global Manufacturing & SCM", term:"Compatibility (global manufacturing)", definition:"The degree of consistency between Foreign Direct Investment decisions and a company's competitive strategy."},
{lecture:"L11 - Global Manufacturing & SCM", term:"Manufacturing configuration", definition:"The arrangement of manufacturing facilities into centralized, regional, or multidomestic facilities."},
{lecture:"L11 - Global Manufacturing & SCM", term:"Coordination", definition:"The linking or integrating of activities into a unified system."},
{lecture:"L11 - Global Manufacturing & SCM", term:"Control (supply chain)", definition:"The measuring of performance so companies can respond appropriately to changing conditions."},
{lecture:"L11 - Global Manufacturing & SCM", term:"Quality", definition:"Meeting or exceeding the expectations of customers."},
{lecture:"L11 - Global Manufacturing & SCM", term:"Total Quality Management (TQM)", definition:"A process that stresses customer satisfaction, employee involvement, and continuous improvements, with the goal of eliminating all defects."},
{lecture:"L11 - Global Manufacturing & SCM", term:"Sourcing", definition:"The process of a firm having inputs supplied to it from outside suppliers, both domestic and foreign, for the production process."},
{lecture:"L11 - Global Manufacturing & SCM", term:"Lean manufacturing", definition:"A productive system whose focus is on optimizing processes through the philosophy of continual improvement."},
{lecture:"L11 - Global Manufacturing & SCM", term:"Foreign trade zones (FTZs)", definition:"Special locations for storing domestic and imported inventory in order to avoid paying duties until the inventory is used in production or sold."},
];
