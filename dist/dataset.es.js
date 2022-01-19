import { Randomizer } from '@saehrimnir/druidjs';
import fetch from 'cross-fetch';
import pako from 'pako';

var names$2 = [
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica"
];
var labels$2 = [
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-setosa",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-versicolor",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica",
	"Iris-virginica"
];
var columns$2 = [
	"sepallength",
	"sepalwidth",
	"petallength",
	"petalwidth"
];
var values$2 = [
	[
		5.1,
		3.5,
		1.4,
		0.2
	],
	[
		4.9,
		3,
		1.4,
		0.2
	],
	[
		4.7,
		3.2,
		1.3,
		0.2
	],
	[
		4.6,
		3.1,
		1.5,
		0.2
	],
	[
		5,
		3.6,
		1.4,
		0.2
	],
	[
		5.4,
		3.9,
		1.7,
		0.4
	],
	[
		4.6,
		3.4,
		1.4,
		0.3
	],
	[
		5,
		3.4,
		1.5,
		0.2
	],
	[
		4.4,
		2.9,
		1.4,
		0.2
	],
	[
		4.9,
		3.1,
		1.5,
		0.1
	],
	[
		5.4,
		3.7,
		1.5,
		0.2
	],
	[
		4.8,
		3.4,
		1.6,
		0.2
	],
	[
		4.8,
		3,
		1.4,
		0.1
	],
	[
		4.3,
		3,
		1.1,
		0.1
	],
	[
		5.8,
		4,
		1.2,
		0.2
	],
	[
		5.7,
		4.4,
		1.5,
		0.4
	],
	[
		5.4,
		3.9,
		1.3,
		0.4
	],
	[
		5.1,
		3.5,
		1.4,
		0.3
	],
	[
		5.7,
		3.8,
		1.7,
		0.3
	],
	[
		5.1,
		3.8,
		1.5,
		0.3
	],
	[
		5.4,
		3.4,
		1.7,
		0.2
	],
	[
		5.1,
		3.7,
		1.5,
		0.4
	],
	[
		4.6,
		3.6,
		1,
		0.2
	],
	[
		5.1,
		3.3,
		1.7,
		0.5
	],
	[
		4.8,
		3.4,
		1.9,
		0.2
	],
	[
		5,
		3,
		1.6,
		0.2
	],
	[
		5,
		3.4,
		1.6,
		0.4
	],
	[
		5.2,
		3.5,
		1.5,
		0.2
	],
	[
		5.2,
		3.4,
		1.4,
		0.2
	],
	[
		4.7,
		3.2,
		1.6,
		0.2
	],
	[
		4.8,
		3.1,
		1.6,
		0.2
	],
	[
		5.4,
		3.4,
		1.5,
		0.4
	],
	[
		5.2,
		4.1,
		1.5,
		0.1
	],
	[
		5.5,
		4.2,
		1.4,
		0.2
	],
	[
		4.9,
		3.1,
		1.5,
		0.1
	],
	[
		5,
		3.2,
		1.2,
		0.2
	],
	[
		5.5,
		3.5,
		1.3,
		0.2
	],
	[
		4.9,
		3.1,
		1.5,
		0.1
	],
	[
		4.4,
		3,
		1.3,
		0.2
	],
	[
		5.1,
		3.4,
		1.5,
		0.2
	],
	[
		5,
		3.5,
		1.3,
		0.3
	],
	[
		4.5,
		2.3,
		1.3,
		0.3
	],
	[
		4.4,
		3.2,
		1.3,
		0.2
	],
	[
		5,
		3.5,
		1.6,
		0.6
	],
	[
		5.1,
		3.8,
		1.9,
		0.4
	],
	[
		4.8,
		3,
		1.4,
		0.3
	],
	[
		5.1,
		3.8,
		1.6,
		0.2
	],
	[
		4.6,
		3.2,
		1.4,
		0.2
	],
	[
		5.3,
		3.7,
		1.5,
		0.2
	],
	[
		5,
		3.3,
		1.4,
		0.2
	],
	[
		7,
		3.2,
		4.7,
		1.4
	],
	[
		6.4,
		3.2,
		4.5,
		1.5
	],
	[
		6.9,
		3.1,
		4.9,
		1.5
	],
	[
		5.5,
		2.3,
		4,
		1.3
	],
	[
		6.5,
		2.8,
		4.6,
		1.5
	],
	[
		5.7,
		2.8,
		4.5,
		1.3
	],
	[
		6.3,
		3.3,
		4.7,
		1.6
	],
	[
		4.9,
		2.4,
		3.3,
		1
	],
	[
		6.6,
		2.9,
		4.6,
		1.3
	],
	[
		5.2,
		2.7,
		3.9,
		1.4
	],
	[
		5,
		2,
		3.5,
		1
	],
	[
		5.9,
		3,
		4.2,
		1.5
	],
	[
		6,
		2.2,
		4,
		1
	],
	[
		6.1,
		2.9,
		4.7,
		1.4
	],
	[
		5.6,
		2.9,
		3.6,
		1.3
	],
	[
		6.7,
		3.1,
		4.4,
		1.4
	],
	[
		5.6,
		3,
		4.5,
		1.5
	],
	[
		5.8,
		2.7,
		4.1,
		1
	],
	[
		6.2,
		2.2,
		4.5,
		1.5
	],
	[
		5.6,
		2.5,
		3.9,
		1.1
	],
	[
		5.9,
		3.2,
		4.8,
		1.8
	],
	[
		6.1,
		2.8,
		4,
		1.3
	],
	[
		6.3,
		2.5,
		4.9,
		1.5
	],
	[
		6.1,
		2.8,
		4.7,
		1.2
	],
	[
		6.4,
		2.9,
		4.3,
		1.3
	],
	[
		6.6,
		3,
		4.4,
		1.4
	],
	[
		6.8,
		2.8,
		4.8,
		1.4
	],
	[
		6.7,
		3,
		5,
		1.7
	],
	[
		6,
		2.9,
		4.5,
		1.5
	],
	[
		5.7,
		2.6,
		3.5,
		1
	],
	[
		5.5,
		2.4,
		3.8,
		1.1
	],
	[
		5.5,
		2.4,
		3.7,
		1
	],
	[
		5.8,
		2.7,
		3.9,
		1.2
	],
	[
		6,
		2.7,
		5.1,
		1.6
	],
	[
		5.4,
		3,
		4.5,
		1.5
	],
	[
		6,
		3.4,
		4.5,
		1.6
	],
	[
		6.7,
		3.1,
		4.7,
		1.5
	],
	[
		6.3,
		2.3,
		4.4,
		1.3
	],
	[
		5.6,
		3,
		4.1,
		1.3
	],
	[
		5.5,
		2.5,
		4,
		1.3
	],
	[
		5.5,
		2.6,
		4.4,
		1.2
	],
	[
		6.1,
		3,
		4.6,
		1.4
	],
	[
		5.8,
		2.6,
		4,
		1.2
	],
	[
		5,
		2.3,
		3.3,
		1
	],
	[
		5.6,
		2.7,
		4.2,
		1.3
	],
	[
		5.7,
		3,
		4.2,
		1.2
	],
	[
		5.7,
		2.9,
		4.2,
		1.3
	],
	[
		6.2,
		2.9,
		4.3,
		1.3
	],
	[
		5.1,
		2.5,
		3,
		1.1
	],
	[
		5.7,
		2.8,
		4.1,
		1.3
	],
	[
		6.3,
		3.3,
		6,
		2.5
	],
	[
		5.8,
		2.7,
		5.1,
		1.9
	],
	[
		7.1,
		3,
		5.9,
		2.1
	],
	[
		6.3,
		2.9,
		5.6,
		1.8
	],
	[
		6.5,
		3,
		5.8,
		2.2
	],
	[
		7.6,
		3,
		6.6,
		2.1
	],
	[
		4.9,
		2.5,
		4.5,
		1.7
	],
	[
		7.3,
		2.9,
		6.3,
		1.8
	],
	[
		6.7,
		2.5,
		5.8,
		1.8
	],
	[
		7.2,
		3.6,
		6.1,
		2.5
	],
	[
		6.5,
		3.2,
		5.1,
		2
	],
	[
		6.4,
		2.7,
		5.3,
		1.9
	],
	[
		6.8,
		3,
		5.5,
		2.1
	],
	[
		5.7,
		2.5,
		5,
		2
	],
	[
		5.8,
		2.8,
		5.1,
		2.4
	],
	[
		6.4,
		3.2,
		5.3,
		2.3
	],
	[
		6.5,
		3,
		5.5,
		1.8
	],
	[
		7.7,
		3.8,
		6.7,
		2.2
	],
	[
		7.7,
		2.6,
		6.9,
		2.3
	],
	[
		6,
		2.2,
		5,
		1.5
	],
	[
		6.9,
		3.2,
		5.7,
		2.3
	],
	[
		5.6,
		2.8,
		4.9,
		2
	],
	[
		7.7,
		2.8,
		6.7,
		2
	],
	[
		6.3,
		2.7,
		4.9,
		1.8
	],
	[
		6.7,
		3.3,
		5.7,
		2.1
	],
	[
		7.2,
		3.2,
		6,
		1.8
	],
	[
		6.2,
		2.8,
		4.8,
		1.8
	],
	[
		6.1,
		3,
		4.9,
		1.8
	],
	[
		6.4,
		2.8,
		5.6,
		2.1
	],
	[
		7.2,
		3,
		5.8,
		1.6
	],
	[
		7.4,
		2.8,
		6.1,
		1.9
	],
	[
		7.9,
		3.8,
		6.4,
		2
	],
	[
		6.4,
		2.8,
		5.6,
		2.2
	],
	[
		6.3,
		2.8,
		5.1,
		1.5
	],
	[
		6.1,
		2.6,
		5.6,
		1.4
	],
	[
		7.7,
		3,
		6.1,
		2.3
	],
	[
		6.3,
		3.4,
		5.6,
		2.4
	],
	[
		6.4,
		3.1,
		5.5,
		1.8
	],
	[
		6,
		3,
		4.8,
		1.8
	],
	[
		6.9,
		3.1,
		5.4,
		2.1
	],
	[
		6.7,
		3.1,
		5.6,
		2.4
	],
	[
		6.9,
		3.1,
		5.1,
		2.3
	],
	[
		5.8,
		2.7,
		5.1,
		1.9
	],
	[
		6.8,
		3.2,
		5.9,
		2.3
	],
	[
		6.7,
		3.3,
		5.7,
		2.5
	],
	[
		6.7,
		3,
		5.2,
		2.3
	],
	[
		6.3,
		2.5,
		5,
		1.9
	],
	[
		6.5,
		3,
		5.2,
		2
	],
	[
		6.2,
		3.4,
		5.4,
		2.3
	],
	[
		5.9,
		3,
		5.1,
		1.8
	]
];
var statistics$2 = {
	sepallength: {
		count: 150,
		mean: 5.8433333333,
		std: 0.828066128,
		min: 4.3,
		"25%": 5.1,
		"50%": 5.8,
		"75%": 6.4,
		max: 7.9
	},
	sepalwidth: {
		count: 150,
		mean: 3.054,
		std: 0.4335943114,
		min: 2,
		"25%": 2.8,
		"50%": 3,
		"75%": 3.3,
		max: 4.4
	},
	petallength: {
		count: 150,
		mean: 3.7586666667,
		std: 1.76442042,
		min: 1,
		"25%": 1.6,
		"50%": 4.35,
		"75%": 5.1,
		max: 6.9
	},
	petalwidth: {
		count: 150,
		mean: 1.1986666667,
		std: 0.7631607417,
		min: 0.1,
		"25%": 0.3,
		"50%": 1.3,
		"75%": 1.8,
		max: 2.5
	}
};
var iris = {
	names: names$2,
	labels: labels$2,
	columns: columns$2,
	values: values$2,
	statistics: statistics$2
};

var iris$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    names: names$2,
    labels: labels$2,
    columns: columns$2,
    values: values$2,
    statistics: statistics$2,
    'default': iris
});

var names$1 = [
	"South_Africa",
	"Israel",
	"Japan",
	"Korea",
	"Russia",
	"Australia",
	"New_Zealand",
	"Austria",
	"Belgium",
	"Czech_Republic",
	"Denmark",
	"Estonia",
	"Finland",
	"France",
	"Germany",
	"Greece",
	"Hungary",
	"Iceland",
	"Ireland",
	"Italy",
	"Latvia",
	"Luxembourg",
	"Netherlands",
	"Norway",
	"Poland",
	"Portugal",
	"Slovak_Republic",
	"Slovenia",
	"Spain",
	"Sweden",
	"Switzerland",
	"Turkey",
	"United_Kingdom",
	"Canada",
	"Mexico",
	"United_States",
	"Chile",
	"Brazil"
];
var labels$1 = [
	"Africa",
	"Asia",
	"Asia",
	"Asia",
	"Asia",
	"Australia",
	"Australia",
	"Europe",
	"Europe",
	"Europe",
	"Europe",
	"Europe",
	"Europe",
	"Europe",
	"Europe",
	"Europe",
	"Europe",
	"Europe",
	"Europe",
	"Europe",
	"Europe",
	"Europe",
	"Europe",
	"Europe",
	"Europe",
	"Europe",
	"Europe",
	"Europe",
	"Europe",
	"Europe",
	"Europe",
	"Europe",
	"Europe",
	"North_America",
	"North_America",
	"North_America",
	"South_America",
	"South_America"
];
var columns$1 = [
	"Dwellings_without_basic_facilities",
	"Housing_expenditure",
	"Rooms_per_person",
	"Household_net_adjusted_disposable_income",
	"Household_net_financial_wealth",
	"Labour_market_insecurity",
	"Employment_rate",
	"Long-term_unemployment_rate",
	"Personal_earnings",
	"Quality_of_support_network",
	"Educational_attainment",
	"Student_skills",
	"Years_in_education",
	"Air_pollution",
	"Water_quality",
	"Stakeholder_engagement_for_developing_regulations",
	"Voter_turnout",
	"Life_expectancy",
	"Self-reported_health",
	"Life_satisfaction",
	"Feeling_safe_walking_alone_at_night",
	"Homicide_rate",
	"Employees_working_very_long_hours",
	"Time_devoted_to_leisure_and_personal_care"
];
var values$1 = [
	[
		20.5,
		18,
		0.7,
		8712,
		16937,
		22.6,
		43,
		14.37,
		5429,
		90,
		65,
		384,
		15.4,
		14,
		69,
		1.6,
		73,
		56.8,
		67,
		4.9,
		39.8,
		9.6,
		18.07,
		14.73
	],
	[
		4.4,
		21,
		1.2,
		22116,
		50051,
		3.9,
		68,
		0.63,
		29635,
		86,
		85,
		474,
		15.9,
		26,
		65,
		0.9,
		72,
		82.1,
		80,
		7.1,
		66.3,
		1.8,
		14.74,
		13.94
	],
	[
		6.4,
		22,
		1.9,
		27323,
		92818,
		2.4,
		73,
		1.36,
		35672,
		91,
		94,
		540,
		16,
		16,
		87,
		1.3,
		53,
		83.4,
		35,
		5.9,
		70.2,
		0.3,
		21.89,
		14.85
	],
	[
		4.2,
		16,
		1.4,
		19372,
		30852,
		2.1,
		65,
		0.01,
		36653,
		76,
		85,
		542,
		17.5,
		29,
		78,
		2.4,
		76,
		81.8,
		35,
		5.8,
		67.7,
		1.1,
		23.12,
		14.7
	],
	[
		14.4,
		11,
		0.9,
		17006,
		3687,
		5.1,
		69,
		1.45,
		26977,
		91,
		95,
		481,
		16.1,
		14,
		49,
		0.8,
		65,
		70.7,
		39,
		6,
		52.9,
		11.3,
		0.18,
		14.91
	],
	[
		1.1,
		20,
		2.3,
		33138,
		48836,
		3.9,
		72,
		1.32,
		51148,
		95,
		77,
		512,
		19.2,
		6,
		94,
		2.7,
		93,
		82.2,
		85,
		7.3,
		62.6,
		0.8,
		13.39,
		14.35
	],
	[
		0.3,
		23,
		2.4,
		23213,
		81271,
		4.9,
		74,
		0.78,
		45183,
		99,
		74,
		509,
		18,
		9,
		92,
		2.5,
		77,
		81.4,
		90,
		7.4,
		64.4,
		1.2,
		13.78,
		14.87
	],
	[
		1,
		21,
		1.6,
		31667,
		55623,
		2.2,
		71,
		1.53,
		45988,
		93,
		84,
		500,
		17.1,
		15,
		93,
		1.3,
		75,
		81.2,
		69,
		7.1,
		81.2,
		0.4,
		7.32,
		14.55
	],
	[
		2.1,
		21,
		2.2,
		28700,
		89057,
		3.6,
		62,
		4.26,
		48093,
		88,
		74,
		509,
		18.8,
		19,
		83,
		2.2,
		89,
		80.7,
		74,
		6.9,
		69.6,
		1.1,
		4.73,
		15.77
	],
	[
		0.7,
		26,
		1.4,
		18953,
		20170,
		4.7,
		69,
		2.72,
		21185,
		90,
		93,
		500,
		17.4,
		17,
		88,
		2.6,
		59,
		78.3,
		60,
		6.6,
		70.1,
		0.9,
		5.99,
		15.03
	],
	[
		0.5,
		25,
		1.9,
		26945,
		54839,
		2.3,
		73,
		1.66,
		49589,
		96,
		80,
		498,
		19.6,
		11,
		95,
		2.1,
		86,
		80.4,
		72,
		7.5,
		85.2,
		0.3,
		2.21,
		15.87
	],
	[
		7.2,
		19,
		1.6,
		16565,
		15728,
		7.6,
		70,
		3.32,
		21020,
		90,
		91,
		526,
		17.8,
		9,
		84,
		2.8,
		64,
		77.3,
		53,
		5.6,
		67.2,
		4.8,
		3.29,
		14.9
	],
	[
		0.6,
		22,
		1.9,
		28238,
		24482,
		2.6,
		69,
		1.97,
		40742,
		94,
		87,
		529,
		19.7,
		7,
		94,
		2.3,
		69,
		81.1,
		65,
		7.4,
		85.8,
		1.5,
		3.6,
		15.17
	],
	[
		0.5,
		21,
		1.8,
		29759,
		53851,
		4.6,
		64,
		4.21,
		40828,
		89,
		75,
		500,
		16.4,
		14,
		84,
		2.1,
		80,
		82.3,
		67,
		6.4,
		70.6,
		0.6,
		7.77,
		16.36
	],
	[
		0,
		22,
		1.8,
		31925,
		49822,
		2.7,
		74,
		2.21,
		43872,
		92,
		87,
		515,
		18.1,
		15,
		94,
		2.1,
		72,
		80.9,
		65,
		7,
		74.6,
		0.5,
		4.96,
		15.55
	],
	[
		0.5,
		26,
		1.2,
		18099,
		17568,
		32,
		49,
		19.47,
		26436,
		83,
		68,
		466,
		18.5,
		15,
		69,
		1.9,
		64,
		81.4,
		74,
		5.6,
		62.5,
		1.5,
		6.37,
		14.74
	],
	[
		5.3,
		20,
		1.1,
		15614,
		17774,
		7.8,
		62,
		3.78,
		21399,
		82,
		83,
		487,
		17.2,
		16,
		76,
		1.2,
		62,
		75.7,
		57,
		5.3,
		53.2,
		1.2,
		3.76,
		15.04
	],
	[
		0,
		24,
		1.6,
		27918,
		54275,
		0.7,
		82,
		0.67,
		56789,
		96,
		73,
		484,
		19.6,
		7,
		97,
		1.6,
		81,
		82.1,
		77,
		7.5,
		78.1,
		0.3,
		13.79,
		14.13
	],
	[
		0.1,
		20,
		2,
		22969,
		31861,
		5,
		61,
		6.98,
		53286,
		95,
		79,
		516,
		17.8,
		8,
		82,
		0.8,
		70,
		81.1,
		82,
		6.8,
		77,
		0.8,
		4.11,
		15.3
	],
	[
		0.8,
		24,
		1.4,
		25004,
		56833,
		11.8,
		57,
		7.79,
		34744,
		91,
		59,
		490,
		16.8,
		18,
		70,
		1.5,
		75,
		82.8,
		66,
		5.8,
		59.3,
		0.8,
		3.83,
		14.89
	],
	[
		14.7,
		26,
		1.2,
		13655,
		9837,
		8,
		66,
		4.67,
		22270,
		84,
		90,
		494,
		17.8,
		12,
		76,
		2.4,
		59,
		74.1,
		50,
		5.9,
		61.6,
		6.1,
		2.45,
		13.83
	],
	[
		0.1,
		21,
		2,
		40914,
		64500,
		2.1,
		67,
		1.6,
		61511,
		93,
		82,
		490,
		15.1,
		15,
		85,
		1.5,
		91,
		81.9,
		72,
		6.7,
		70.6,
		0.2,
		3.27,
		15.17
	],
	[
		0,
		19,
		1.9,
		27759,
		71251,
		3.1,
		73,
		2.98,
		51003,
		88,
		76,
		519,
		17.9,
		17,
		94,
		1.3,
		75,
		81.4,
		76,
		7.3,
		80.5,
		0.8,
		0.44,
		15.9
	],
	[
		0,
		18,
		2,
		33393,
		16930,
		1.5,
		75,
		0.41,
		51718,
		93,
		82,
		496,
		18,
		6,
		97,
		1.9,
		78,
		81.8,
		76,
		7.6,
		89.6,
		1,
		3.05,
		15.56
	],
	[
		3.1,
		22,
		1.1,
		17820,
		12902,
		8.9,
		62,
		3.26,
		23649,
		86,
		91,
		521,
		17.9,
		17,
		80,
		2.6,
		55,
		77.1,
		58,
		6,
		66.1,
		1,
		7.25,
		14.42
	],
	[
		1,
		19,
		1.7,
		19882,
		29563,
		11.7,
		63,
		8.28,
		23977,
		85,
		43,
		488,
		17.4,
		10,
		89,
		1.2,
		56,
		80.8,
		46,
		5.1,
		69.2,
		0.9,
		9.77,
		14.72
	],
	[
		1.3,
		25,
		1.1,
		18534,
		8896,
		10.7,
		61,
		8.8,
		22151,
		92,
		91,
		472,
		16.2,
		16,
		81,
		2.9,
		59,
		76.5,
		66,
		6.2,
		62.1,
		1.2,
		6.23,
		14.92
	],
	[
		0.6,
		19,
		1.5,
		19130,
		17271,
		5.2,
		64,
		5.27,
		33068,
		89,
		86,
		499,
		18.3,
		14,
		91,
		2.8,
		52,
		80.4,
		65,
		5.7,
		83.9,
		0.4,
		5.5,
		14.75
	],
	[
		0.1,
		23,
		1.9,
		22007,
		29819,
		26.6,
		57,
		12.92,
		36013,
		96,
		57,
		490,
		17.7,
		12,
		71,
		1.6,
		73,
		83.2,
		72,
		6.4,
		81.6,
		0.6,
		5.61,
		15.93
	],
	[
		0,
		20,
		1.8,
		28859,
		69899,
		5.2,
		75,
		1.33,
		40994,
		92,
		82,
		482,
		19.1,
		7,
		95,
		2,
		86,
		82,
		81,
		7.3,
		76.8,
		0.8,
		1.1,
		15.18
	],
	[
		0,
		22,
		1.8,
		35952,
		120265,
		1.7,
		80,
		1.71,
		57082,
		93,
		88,
		518,
		17.4,
		17,
		97,
		2.6,
		48,
		82.9,
		81,
		7.6,
		87.4,
		0.5,
		6.34,
		15.01
	],
	[
		7.6,
		21,
		1.1,
		13471,
		3886,
		9.1,
		50,
		2.04,
		15992,
		84,
		36,
		462,
		16.9,
		17,
		63,
		2.1,
		85,
		76.6,
		68,
		5.5,
		60.4,
		1.7,
		39.26,
		12.24
	],
	[
		0.4,
		23,
		1.9,
		26687,
		69927,
		5.7,
		73,
		2.22,
		41659,
		93,
		79,
		502,
		16.7,
		11,
		87,
		2.9,
		66,
		81.1,
		74,
		6.5,
		77.8,
		0.2,
		12.83,
		14.87
	],
	[
		0.2,
		21,
		2.5,
		30474,
		75775,
		3.9,
		72,
		0.89,
		48164,
		94,
		90,
		522,
		16.3,
		12,
		90,
		3,
		68,
		81.5,
		89,
		7.4,
		81.7,
		1.5,
		3.83,
		14.41
	],
	[
		4.2,
		22,
		1,
		12806,
		9856,
		5.2,
		60,
		0.06,
		12850,
		75,
		34,
		417,
		14.4,
		12,
		68,
		3.5,
		63,
		74.6,
		66,
		6.2,
		39.9,
		23.4,
		28.28,
		12.8
	],
	[
		0.1,
		19,
		2.4,
		41071,
		163268,
		5.2,
		68,
		1.42,
		57139,
		90,
		90,
		492,
		17.1,
		11,
		84,
		3.2,
		67,
		78.8,
		88,
		6.9,
		73.9,
		5.2,
		11.69,
		14.47
	],
	[
		9.4,
		18,
		1.2,
		15094,
		18172,
		8.1,
		62,
		1.67,
		21370,
		82,
		61,
		436,
		17.1,
		18,
		71,
		1.5,
		49,
		78.8,
		59,
		6.5,
		50.2,
		3.8,
		13.84,
		14.91
	],
	[
		6.7,
		21,
		0.9,
		11487,
		7566,
		6.6,
		67,
		0.81,
		10229,
		90,
		46,
		402,
		15.6,
		17,
		73,
		1.3,
		79,
		75,
		70,
		6.5,
		39.5,
		26.7,
		9.45,
		14.27
	]
];
var statistics$1 = {
	Dwellings_without_basic_facilities: {
		count: 38,
		mean: 3.1605263158,
		std: 4.8000866813,
		min: 0,
		"25%": 0.125,
		"50%": 0.75,
		"75%": 4.35,
		max: 20.5
	},
	Housing_expenditure: {
		count: 38,
		mean: 21.0789473684,
		std: 2.9351695835,
		min: 11,
		"25%": 19.25,
		"50%": 21,
		"75%": 22.75,
		max: 26
	},
	Rooms_per_person: {
		count: 38,
		mean: 1.6131578947,
		std: 0.466250746,
		min: 0.7,
		"25%": 1.2,
		"50%": 1.65,
		"75%": 1.9,
		max: 2.5
	},
	Household_net_adjusted_disposable_income: {
		count: 38,
		mean: 23742.9210526316,
		std: 8044.3115485973,
		min: 8712,
		"25%": 17889.75,
		"50%": 23091,
		"75%": 28819.25,
		max: 41071
	},
	Household_net_financial_wealth: {
		count: 38,
		mean: 43839.9473684211,
		std: 35212.4867778212,
		min: 3687,
		"25%": 17020.5,
		"50%": 31356.5,
		"75%": 62583.25,
		max: 163268
	},
	Labour_market_insecurity: {
		count: 38,
		mean: 6.8684210526,
		std: 6.7093764669,
		min: 0.7,
		"25%": 2.8,
		"50%": 5.05,
		"75%": 7.95,
		max: 32
	},
	Employment_rate: {
		count: 38,
		mean: 66.3684210526,
		std: 8.198289382,
		min: 43,
		"25%": 62,
		"50%": 67.5,
		"75%": 72.75,
		max: 82
	},
	"Long-term_unemployment_rate": {
		count: 38,
		mean: 3.7060526316,
		std: 4.2472022839,
		min: 0.01,
		"25%": 1.3375,
		"50%": 2.005,
		"75%": 4.2475,
		max: 19.47
	},
	Personal_earnings: {
		count: 38,
		mean: 35934.3947368421,
		std: 14804.883862811,
		min: 5429,
		"25%": 22614.75,
		"50%": 36333,
		"75%": 48146.25,
		max: 61511
	},
	Quality_of_support_network: {
		count: 38,
		mean: 89.6315789474,
		std: 5.359614007,
		min: 75,
		"25%": 86.5,
		"50%": 90.5,
		"75%": 93,
		max: 99
	},
	Educational_attainment: {
		count: 38,
		mean: 76.6315789474,
		std: 16.0714974371,
		min: 34,
		"25%": 73.25,
		"50%": 82,
		"75%": 87.75,
		max: 95
	},
	Student_skills: {
		count: 38,
		mean: 491.1578947368,
		std: 34.5202849224,
		min: 384,
		"25%": 482.5,
		"50%": 497,
		"75%": 514.25,
		max: 542
	},
	Years_in_education: {
		count: 38,
		mean: 17.3631578947,
		std: 1.2713944361,
		min: 14.4,
		"25%": 16.475,
		"50%": 17.4,
		"75%": 18,
		max: 19.7
	},
	Air_pollution: {
		count: 38,
		mean: 13.8421052632,
		std: 4.9730425501,
		min: 6,
		"25%": 11,
		"50%": 14,
		"75%": 17,
		max: 29
	},
	Water_quality: {
		count: 38,
		mean: 82.5,
		std: 11.5495407654,
		min: 49,
		"25%": 73.75,
		"50%": 84,
		"75%": 92.75,
		max: 97
	},
	Stakeholder_engagement_for_developing_regulations: {
		count: 38,
		mean: 2.0263157895,
		std: 0.7062210857,
		min: 0.8,
		"25%": 1.5,
		"50%": 2.1,
		"75%": 2.6,
		max: 3.5
	},
	Voter_turnout: {
		count: 38,
		mean: 70.1052631579,
		std: 11.8339627451,
		min: 48,
		"25%": 62.25,
		"50%": 71,
		"75%": 77.75,
		max: 93
	},
	Life_expectancy: {
		count: 38,
		mean: 79.2684210526,
		std: 4.7751669145,
		min: 56.8,
		"25%": 77.55,
		"50%": 81.1,
		"75%": 81.875,
		max: 83.4
	},
	"Self-reported_health": {
		count: 38,
		mean: 67.6052631579,
		std: 13.8672070371,
		min: 35,
		"25%": 61.25,
		"50%": 68.5,
		"75%": 76,
		max: 90
	},
	Life_satisfaction: {
		count: 38,
		mean: 6.5052631579,
		std: 0.7679201002,
		min: 4.9,
		"25%": 5.9,
		"50%": 6.5,
		"75%": 7.25,
		max: 7.6
	},
	Feeling_safe_walking_alone_at_night: {
		count: 38,
		mean: 68.7131578947,
		std: 13.0525584331,
		min: 39.5,
		"25%": 62.2,
		"50%": 69.85,
		"75%": 78.025,
		max: 89.6
	},
	Homicide_rate: {
		count: 38,
		mean: 3.0736842105,
		std: 5.8155283374,
		min: 0.2,
		"25%": 0.6,
		"50%": 1,
		"75%": 1.65,
		max: 26.7
	},
	Employees_working_very_long_hours: {
		count: 38,
		mean: 9.1339473684,
		std: 8.2402494516,
		min: 0.18,
		"25%": 3.7775,
		"50%": 6.285,
		"75%": 13.25,
		max: 39.26
	},
	Time_devoted_to_leisure_and_personal_care: {
		count: 38,
		mean: 14.8160526316,
		std: 0.7831003507,
		min: 12.24,
		"25%": 14.49,
		"50%": 14.88,
		"75%": 15.17,
		max: 16.36
	}
};
var oecd = {
	names: names$1,
	labels: labels$1,
	columns: columns$1,
	values: values$1,
	statistics: statistics$1
};

var oecd$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    names: names$1,
    labels: labels$1,
    columns: columns$1,
    values: values$1,
    statistics: statistics$1,
    'default': oecd
});

var names = [
	"Key to the Gate",
	"Trumpets Of Doom",
	"Tunnel of Set XIII",
	"Hail Murder - Live In South America 2003",
	"Moti Ragnarokum",
	"Hail Murder",
	"Key To The Gate",
	"Tunnel of Set XIII",
	"Krigaren si gravferd",
	"PERVERTOR OF THE 7 GATES",
	"Love In A Void",
	"Osiris",
	"A World Of Bones",
	"Pervertor Of The 7 Gates",
	"Tunnel of Set XIII",
	"Bellum Omnium Contra Omnes",
	"Ghastly Indoctrination",
	"Fear of Napalm",
	"Go To Hell",
	"Pull the Plug - Live in L.A. Death & Raw – 1998",
	"Tomorrow's Victim",
	"Stillborn Saviour",
	"Divine in fire",
	"Lunatic Of God's Creation - Reissue",
	"Thrasher's Abbatoir",
	"Silent Violence",
	"Sacred Serenity",
	"Evidence In The Furnace",
	"Misanthrope",
	"Oxidised Razor Masticator",
	"Misanthrope",
	"Pull the Plug - Live at Backstreets",
	"Go to Hell",
	"No Sympathy For Fools",
	"Year One Now",
	"Misanthrope - Demo",
	"Together as One",
	"Silent Violence",
	"Shreds Of Flesh",
	"Pull the Plug",
	"Nothing Is Everything",
	"The Ancient Ones",
	"Addicted to Vaginal Skin",
	"Deathrow (no regrets)",
	"Livestock Marketplace",
	"Amok",
	"Bible Basher",
	"Pull the Plug - 12/05/87 Rehearsals",
	"Shreds Of Flesh",
	"So You Die",
	"Let the Stillborn Come to Me",
	"Silent Violence",
	"Deathrow (no Regrets)",
	"Thrasher's Abbatoir",
	"Painkiller",
	"Nothing Is Everything",
	"Out Of Touch",
	"By The Light",
	"Crucified For The Innocence",
	"Together As One",
	"War is Coming",
	"Silent Violence",
	"Shreds Of Flesh",
	"Room 101",
	"Together as One",
	"Deathrow (no regrets)",
	"Addicted to Vaginal Skin (Live)",
	"Oxidised Razor Masticator",
	"Livestock Marketplace - Bonus Track",
	"Spiritual Healing",
	"Behold The Throne Of Chaos",
	"On Most Surfaces",
	"Faster",
	"Draconian trilogy (Live in Miskolc)",
	"When the Sun Hits",
	"Secret of the runes",
	"Lorelei",
	"Enter",
	"When the Sun Hits",
	"Estranged - A Timeless Spell",
	"Face Your Demons - Session Version",
	"Murder",
	"Anagram",
	"Face Your Demons - Alternative Version",
	"Short Glance",
	"Inimical Chimera - Remaster",
	"Nobody Dares",
	"Memories",
	"Forgiven",
	"Frail",
	"Who I Am",
	"Pale Tortured Blue",
	"Restless",
	"When the Sun Hits",
	"Candles",
	"Liberty Bell",
	"Lava",
	"Survivalism - deadmau5 Remix",
	"You Know Who You Are",
	"Capital G",
	"The Frail",
	"Far Too Frail",
	"Another Version of the Truth - kronos and enrique gonzalez muller",
	"Starved for Truth - Part 1",
	"In The Army Now",
	"Capital G - Paul Epworth Phones 666 Revolutions Mix",
	"Sharp Dressed Man",
	"The Frail - Remix Version",
	"Dead Eyes Opened 12\"",
	"Dead Eyes Opened (USA 2015)",
	"Bullet",
	"Copy of a",
	"Mount",
	"My Thorny Thorny Crown",
	"Sin",
	"So What",
	"End Of Days Part 2 (Extreme Mayan Makeover Mix)",
	"Sharp Dressed Man",
	"My Thorny Thorny Crown",
	"She's Got A Cause",
	"Dead Eyes Opened",
	"Bitch",
	"Pantomime",
	"On the Surface of Scardonia",
	"Crucified",
	"Sweet Dreams (Are Made Of This)",
	"A Hole In The Wall",
	"Tough Guy",
	"Living Dead Girl - Subliminal Seduction Mix",
	"Living Dead Girl",
	"Living Dead Girl - Photek Remix",
	"Spine For You",
	"Spookshow Baby",
	"Falls Apart",
	"Dreamtime",
	"Birds Of Hell Awaiting",
	"Stillborn",
	"Come On - Go Off - Rotersand Remix",
	"Rowboat",
	"Come On - Go Off",
	"Living Dead Girl",
	"Falls Apart",
	"Coward",
	"Reload",
	"Birds Of Hell Awaiting",
	"The Vaults of Re:Memory",
	"WO BIST DU",
	"Birds Of Hell Awaiting",
	"Thirteen",
	"Over My Head",
	"I Hate Today",
	"WO BIST DU",
	"Fadeaway",
	"Survive",
	"Dragula",
	"OHNE DICH",
	"Sucks (Live)",
	"Rowboat",
	"Everything Is Boring",
	"Living Dead Girl - Live",
	"Blue Monday",
	"Candy-O",
	"OHNE DICH - RMX BY LAIBACH",
	"Spookshow Baby - Black Leather Catsuit Mix",
	"Keep It Clean",
	"Ego Tripp",
	"Vapor Transmission - Intro Album Version",
	"Lunchbox",
	"What?",
	"Living Dead Girl",
	"Dogma",
	"Dogma",
	"Fadeaway",
	"Mesopotamia",
	"Fadeaway - Instrumental",
	"Spookshow Baby - Black Leather Catsuit Mix",
	"Living Dead Girl",
	"Light In The Shadows",
	"Birds Of Hell Awaiting",
	"Make Up Your Mind",
	"Fadeaway - Live",
	"Keine Lust",
	"Solaris",
	"Midnight Train",
	"Tough Guy - Tim Ismag Remix",
	"House Of 1000 Corpses/Unholy 3",
	"Rainmaker",
	"Tears of the Dragon - Live At The Marquee",
	"The Nomad",
	"Melt The Ice Away",
	"Living After Midnight",
	"Painkiller",
	"Fear of the Dark",
	"The Rage",
	"Anthem To The Estranged",
	"Never Walk Alone..A Call To Arms",
	"Lightning Strikes Twice",
	"The Haunting",
	"When the Wild Wind Blows",
	"Come And Get It",
	"Louie Louie - Alternative Version",
	"Do or Die",
	"Enter Sandman",
	"Get Back In Line - Live in Wacken",
	"Get Back In Line",
	"Greenhouse Effect",
	"The Fallen Angel",
	"Purgatory",
	"Come and Get It",
	"Electric Eye - Live from Battle Cry",
	"Parasite",
	"Tears of the Dragon (Acoustic Chillout) [Bonus Track]",
	"Through The Never (Live in Mexico City)",
	"Escape",
	"Get Back In Line - Live",
	"Electric Eye - Live from the San Antonio Civic Center",
	"Johnny B. Goode",
	"Rainmaker",
	"Tears of the Dragon",
	"Trapped Under Ice",
	"Battery (Live in Mexico City)",
	"The Four Horsemen (Live in Mexico City)",
	"Tears Of A Clown",
	"The Threat Is Real",
	"Electric Eye - Live",
	"Electric Eye",
	"Electric Eye",
	"The Unforgiven (Live in Mexico City)",
	"Up to the Limit",
	"Blood Money",
	"Battery",
	"Agony",
	"So What",
	"Bare Bones",
	"Carry On",
	"Nightmare/The Dreamtime",
	"Call To Arms",
	"Another Life",
	"The Thin Line Between Love And Hate",
	"Louie Louie",
	"Burnin' Up",
	"Tears of the Dragon - Live In Brazil",
	"Souls Of Black (Alcatraz Revisit)",
	"Enter Sandman (Live)",
	"No More Lies - Live",
	"Painkiller - Live from Battle Cry",
	"Electric Eye",
	"No More Lies",
	"Enter Sandman (Live with the SFSO)",
	"Rainmaker - Live",
	"Tears of the Dragon",
	"Red Star Falling",
	"The Threat Is Real",
	"Rainmaker",
	"Together as One",
	"One",
	"Capricorn",
	"Up To The Limit",
	"Wish You Were Dead",
	"Get Back In Line - Live Manchester",
	"All Nightmare Long",
	"Battery (Live)",
	"Tears of the Dragon",
	"Wish You Were Dead",
	"Battery (Live with the SFSO)",
	"Rock 'N' Roll",
	"Red Star Falling - orchestral version",
	"All Men Play On Ten",
	"Afraid to Shoot Strangers",
	"Electric Funeral",
	"For Whom The Bell Tolls (Live in Mexico City)",
	"No More Lies",
	"Go to Hell",
	"Go To Hell",
	"Tears Of The Dragon",
	"Jack The Ripper",
	"No More Lies",
	"Let Me Out",
	"One Of A Kind",
	"The Riddle",
	"The Haunting",
	"Written in stone",
	"Full Moon",
	"Draconian Love",
	"Ain't Your Fairytale",
	"Ghost Division",
	"Neverland",
	"The champion",
	"The dragon lies bleeding",
	"Back To Back",
	"Hero of Zeroes",
	"Dreamland",
	"We're Gonna Make It",
	"Not Like You",
	"Zeroes",
	"In the Army Now (Bonus Track)",
	"Back to back",
	"The bitch is back",
	"Carry the Torch",
	"Carry the Torch (Track Commentary)",
	"The Golden Spiral",
	"Vosstanie Roda",
	"Suden joiku",
	"The Golden Spiral",
	"A Burning Arrow",
	"Carry the Torch",
	"Vosstanie Roda",
	"Neverland"
];
var labels = [
	"black metal",
	"black metal",
	"black metal",
	"black metal",
	"black metal",
	"black metal",
	"black metal",
	"black metal",
	"black metal",
	"black metal",
	"black metal",
	"black metal",
	"black metal",
	"black metal",
	"black metal",
	"black metal",
	"black metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"death metal",
	"gothic metal",
	"gothic metal",
	"gothic metal",
	"gothic metal",
	"gothic metal",
	"gothic metal",
	"gothic metal",
	"gothic metal",
	"gothic metal",
	"gothic metal",
	"gothic metal",
	"gothic metal",
	"gothic metal",
	"gothic metal",
	"gothic metal",
	"gothic metal",
	"gothic metal",
	"gothic metal",
	"gothic metal",
	"gothic metal",
	"gothic metal",
	"gothic metal",
	"gothic metal",
	"gothic metal",
	"gothic metal",
	"industrial",
	"industrial",
	"industrial",
	"industrial",
	"industrial",
	"industrial",
	"industrial",
	"industrial",
	"industrial",
	"industrial",
	"industrial",
	"industrial",
	"industrial",
	"industrial",
	"industrial",
	"industrial",
	"industrial",
	"industrial",
	"industrial",
	"industrial",
	"industrial",
	"industrial",
	"industrial",
	"industrial",
	"industrial",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"industrial metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"metal",
	"power metal",
	"power metal",
	"power metal",
	"power metal",
	"power metal",
	"power metal",
	"power metal",
	"power metal",
	"power metal",
	"power metal",
	"power metal",
	"power metal",
	"power metal",
	"power metal",
	"power metal",
	"power metal",
	"power metal",
	"power metal",
	"power metal",
	"power metal",
	"power metal",
	"folk metal",
	"folk metal",
	"folk metal",
	"folk metal",
	"folk metal",
	"folk metal",
	"folk metal",
	"folk metal",
	"folk metal",
	"folk metal"
];
var columns = [
	"danceability",
	"popularity",
	"energy",
	"acousticness",
	"instrumentalness",
	"liveness",
	"valence"
];
var values = [
	[
		0.0966,
		0.19,
		0.88,
		0.000038799999999999994,
		662,
		105,
		256
	],
	[
		0.24,
		0.14,
		996,
		0.0000134,
		0.00266,
		179,
		147
	],
	[
		285,
		0.04,
		0.0945,
		835,
		927,
		0.0898,
		0.0432
	],
	[
		152,
		0.13,
		983,
		0.000020600000000000003,
		0.0053100000000000005,
		953,
		0.0482
	],
	[
		481,
		0.18,
		281,
		937,
		0.91,
		226,
		259
	],
	[
		208,
		0.26,
		934,
		0.00000124,
		0.0017399999999999998,
		928,
		0.0347
	],
	[
		153,
		0.27,
		778,
		0.00893,
		903,
		403,
		112
	],
	[
		327,
		0.06,
		102,
		863,
		863,
		456,
		0.0397
	],
	[
		351,
		0.11,
		839,
		0.000625,
		0.0813,
		203,
		0.0372
	],
	[
		277,
		0.03,
		993,
		0.0030399999999999997,
		428,
		179,
		141
	],
	[
		103,
		0.03,
		997,
		0.00728,
		0.0185,
		385,
		0.0487
	],
	[
		0.46,
		0.19,
		975,
		0.00000343,
		639,
		309,
		242
	],
	[
		242,
		0.04,
		718,
		0.0000136,
		923,
		134,
		416
	],
	[
		276,
		0.04,
		994,
		0.0033399999999999997,
		417,
		406,
		149
	],
	[
		303,
		0,
		116,
		815,
		955,
		377,
		0.0601
	],
	[
		284,
		0.05,
		633,
		0.00000109,
		0.0195,
		0.0949,
		0.0349
	],
	[
		332,
		0.12,
		813,
		0.000022,
		812,
		203,
		0.04
	],
	[
		224,
		0.17,
		946,
		0.000007699999999999999,
		861,
		216,
		374
	],
	[
		0.22,
		0.23,
		971,
		0.00000732,
		198,
		0.0852,
		346
	],
	[
		175,
		0.16,
		957,
		0.000149,
		0.0234,
		722,
		285
	],
	[
		377,
		0.18,
		717,
		0.00021899999999999998,
		831,
		121,
		302
	],
	[
		187,
		0.23,
		912,
		0.00000442,
		0.0000345,
		558,
		176
	],
	[
		322,
		0.04,
		995,
		0.000164,
		0.0018800000000000002,
		323,
		104
	],
	[
		298,
		0.29,
		996,
		0.0000218,
		218,
		0.0947,
		0.0649
	],
	[
		148,
		0.26,
		998,
		0.0000031,
		184,
		184,
		0.0602
	],
	[
		378,
		0.06,
		0.92,
		0.0000261,
		845,
		0.0849,
		495
	],
	[
		444,
		0.03,
		0.99,
		0.000014800000000000002,
		374,
		0.0392,
		326
	],
	[
		521,
		0.24,
		991,
		0.000207,
		597,
		0.0707,
		0.17
	],
	[
		397,
		0.29,
		987,
		0.00023199999999999997,
		0.00282,
		145,
		213
	],
	[
		0.21,
		0.05,
		0.87,
		0.00162,
		667,
		342,
		0.0396
	],
	[
		397,
		0.28,
		987,
		0.00023199999999999997,
		0.00282,
		145,
		213
	],
	[
		164,
		0.14,
		957,
		609,
		212,
		855,
		0.0442
	],
	[
		319,
		0.18,
		969,
		0.0000519,
		506,
		0.0874,
		0.0379
	],
	[
		431,
		0.18,
		903,
		0.0000261,
		0.0362,
		273,
		389
	],
	[
		0.13,
		0.16,
		943,
		0.0000017,
		0.000174,
		299,
		0.18
	],
	[
		286,
		0.18,
		824,
		0.00109,
		572,
		0.16,
		544
	],
	[
		311,
		0.21,
		945,
		0.0000123,
		286,
		0.0915,
		386
	],
	[
		429,
		0.23,
		941,
		0.00032,
		728,
		0.0882,
		342
	],
	[
		173,
		0.12,
		0.98,
		0.00000668,
		404,
		175,
		104
	],
	[
		226,
		0.41,
		978,
		0.0000036000000000000003,
		533,
		0.0436,
		252
	],
	[
		379,
		0.25,
		974,
		0.00000651,
		233,
		0.0203,
		225
	],
	[
		303,
		0.21,
		882,
		0.000327,
		0.0037799999999999995,
		134,
		535
	],
	[
		244,
		0.34,
		987,
		0.00005660000000000001,
		779,
		0.0664,
		256
	],
	[
		167,
		0.07,
		454,
		0.0053100000000000005,
		0.0347,
		108,
		215
	],
	[
		447,
		0.09,
		941,
		0.00006159999999999999,
		155,
		0.0935,
		577
	],
	[
		437,
		0.1,
		886,
		0.000039899999999999994,
		0.0248,
		122,
		268
	],
	[
		335,
		0.22,
		944,
		0.00243,
		419,
		103,
		436
	],
	[
		154,
		0.16,
		938,
		0.0994,
		0.52,
		355,
		167
	],
	[
		181,
		0.04,
		974,
		0.00000634,
		308,
		255,
		128
	],
	[
		318,
		0.33,
		947,
		0.00000135,
		909,
		0.0694,
		311
	],
	[
		224,
		0.21,
		963,
		0.0000019,
		164,
		368,
		201
	],
	[
		321,
		0.15,
		955,
		0.0000416,
		898,
		973,
		196
	],
	[
		0.27,
		0.07,
		485,
		0.0031899999999999997,
		0.0574,
		199,
		261
	],
	[
		148,
		0.19,
		998,
		0.0000031,
		184,
		184,
		0.0602
	],
	[
		428,
		0.38,
		995,
		0.000020600000000000003,
		429,
		305,
		135
	],
	[
		412,
		0.22,
		943,
		0.0000923,
		0.0956,
		166,
		159
	],
	[
		261,
		0.23,
		961,
		0.000032200000000000003,
		0.0543,
		155,
		364
	],
	[
		256,
		0.19,
		709,
		0.000136,
		0.2,
		183,
		476
	],
	[
		258,
		0.19,
		993,
		0.00022400000000000002,
		631,
		125,
		122
	],
	[
		268,
		0.28,
		962,
		0.000169,
		325,
		0.0599,
		193
	],
	[
		0.34,
		0.23,
		936,
		3,
		0.0455,
		445,
		381
	],
	[
		368,
		0.14,
		883,
		0.000453,
		0.87,
		351,
		107
	],
	[
		179,
		0.02,
		972,
		0.00000715,
		0.38,
		0.2,
		144
	],
	[
		338,
		0.24,
		855,
		0.00000716,
		184,
		118,
		386
	],
	[
		311,
		0.24,
		945,
		0.0000123,
		286,
		0.0915,
		386
	],
	[
		239,
		0.09,
		508,
		0.00375,
		0.0334,
		258,
		227
	],
	[
		195,
		0.14,
		955,
		437,
		769,
		903,
		234
	],
	[
		209,
		0.1,
		0.87,
		0.0216,
		878,
		482,
		0.0929
	],
	[
		447,
		0.18,
		941,
		0.00006159999999999999,
		155,
		0.0935,
		577
	],
	[
		343,
		0.32,
		942,
		0.000026300000000000002,
		0.0136,
		0.0701,
		366
	],
	[
		211,
		0.09,
		988,
		0.0000384,
		0.0481,
		318,
		0.0393
	],
	[
		336,
		0.24,
		688,
		0.0014199999999999998,
		0.000472,
		158,
		245
	],
	[
		503,
		0.44,
		923,
		0.00119,
		0.00047400000000000003,
		117,
		519
	],
	[
		402,
		0.18,
		686,
		0.008440000000000001,
		453,
		0.92,
		144
	],
	[
		252,
		0.17,
		729,
		0.0017,
		0.0458,
		0.0515,
		0.17
	],
	[
		496,
		0.19,
		952,
		0.00000417,
		611,
		281,
		173
	],
	[
		524,
		0.31,
		717,
		0.005379999999999999,
		209,
		0.0922,
		381
	],
	[
		457,
		0.22,
		718,
		0.000021899999999999997,
		0.0214,
		385,
		162
	],
	[
		234,
		0.11,
		728,
		0.0791,
		0.0006219999999999999,
		0.0557,
		161
	],
	[
		363,
		0.29,
		915,
		0.0052899999999999996,
		0.0563,
		0.3,
		339
	],
	[
		402,
		0.13,
		817,
		0.0012699999999999999,
		0,
		0.11,
		0.57
	],
	[
		514,
		0.28,
		958,
		0.007809999999999999,
		0.00000892,
		0.0827,
		341
	],
	[
		495,
		0.05,
		873,
		0.0000115,
		0.00439,
		492,
		573
	],
	[
		451,
		0.17,
		923,
		0.000524,
		0.00728,
		0.0968,
		539
	],
	[
		526,
		0.06,
		728,
		0.000133,
		841,
		178,
		172
	],
	[
		434,
		0.18,
		865,
		0.000132,
		0.0873,
		279,
		214
	],
	[
		426,
		0.05,
		136,
		918,
		0.00073,
		0.0992,
		106
	],
	[
		425,
		0.39,
		677,
		165,
		0.00000435,
		158,
		197
	],
	[
		524,
		0.27,
		342,
		938,
		0.0010199999999999999,
		132,
		165
	],
	[
		504,
		0.21,
		542,
		254,
		0.00829,
		244,
		138
	],
	[
		451,
		0.3,
		898,
		0.000027600000000000003,
		0.00507,
		268,
		179
	],
	[
		334,
		0.32,
		531,
		0.00183,
		0.00294,
		0.31,
		102
	],
	[
		531,
		0.24,
		0.66,
		0.000417,
		0.000932,
		267,
		0.0406
	],
	[
		252,
		0.06,
		718,
		0.0019100000000000002,
		0.0561,
		0.0721,
		147
	],
	[
		459,
		0.19,
		643,
		0.0026,
		569,
		159,
		0.0563
	],
	[
		373,
		0.22,
		912,
		0.00011899999999999999,
		0.00359,
		395,
		61
	],
	[
		441,
		0.26,
		828,
		0.000132,
		763,
		0.0875,
		338
	],
	[
		771,
		0.4,
		457,
		539,
		0.00031099999999999997,
		104,
		576
	],
	[
		738,
		0.17,
		0.87,
		0.0544,
		905,
		119,
		389
	],
	[
		352,
		0.39,
		895,
		0.03,
		0.00000181,
		105,
		638
	],
	[
		177,
		0.37,
		0.0040100000000000005,
		953,
		868,
		244,
		159
	],
	[
		631,
		0.17,
		732,
		0.00292,
		0.00072,
		168,
		773
	],
	[
		289,
		0.23,
		0.73,
		644,
		732,
		373,
		284
	],
	[
		448,
		0.04,
		903,
		325,
		0,
		398,
		225
	],
	[
		588,
		0.04,
		676,
		0.0294,
		0.000118,
		846,
		515
	],
	[
		0.8,
		0.25,
		764,
		0.0009480000000000001,
		0.000739,
		0.0596,
		0.58
	],
	[
		304,
		0.16,
		927,
		0.0000123,
		278,
		294,
		155
	],
	[
		163,
		0.23,
		374,
		591,
		409,
		486,
		319
	],
	[
		668,
		0.07,
		866,
		0.0015300000000000001,
		915,
		403,
		861
	],
	[
		785,
		0.11,
		711,
		155,
		905,
		0.0669,
		964
	],
	[
		734,
		0.12,
		889,
		0.000178,
		803,
		328,
		355
	],
	[
		635,
		0.44,
		832,
		0.0238,
		384,
		223,
		693
	],
	[
		0.5,
		0.14,
		982,
		0.009859999999999999,
		0.9,
		196,
		0.61
	],
	[
		351,
		0.03,
		345,
		625,
		0.19,
		431,
		251
	],
	[
		0.63,
		0.38,
		865,
		0.0009660000000000001,
		607,
		817,
		742
	],
	[
		682,
		0.34,
		607,
		0.000024,
		384,
		178,
		509
	],
	[
		407,
		0.06,
		966,
		0.0000124,
		0.86,
		356,
		0.15
	],
	[
		303,
		0.12,
		948,
		0.0000118,
		0.32,
		341,
		134
	],
	[
		356,
		0.02,
		338,
		658,
		0.0846,
		391,
		241
	],
	[
		685,
		0.19,
		494,
		117,
		0.00366,
		0.0915,
		959
	],
	[
		664,
		0.26,
		961,
		0.000984,
		934,
		191,
		856
	],
	[
		652,
		0.34,
		983,
		0.000729,
		0.00108,
		347,
		428
	],
	[
		469,
		0.27,
		812,
		0.00008690000000000001,
		0.0000199,
		337,
		422
	],
	[
		0.0642,
		0.2,
		304,
		303,
		927,
		76,
		0.0321
	],
	[
		706,
		0.17,
		967,
		0.000737,
		0.00000422,
		313,
		716
	],
	[
		199,
		0.65,
		622,
		0.00745,
		794,
		204,
		142
	],
	[
		503,
		0.18,
		936,
		0.00000516,
		593,
		0.15,
		0.24
	],
	[
		414,
		0.28,
		933,
		0.000338,
		0.00619,
		0.26,
		433
	],
	[
		595,
		0.29,
		868,
		0.000319,
		292,
		739,
		373
	],
	[
		524,
		0.4,
		944,
		0.00513,
		0.0269,
		236,
		532
	],
	[
		661,
		0.32,
		0.78,
		0.00744,
		782,
		126,
		804
	],
	[
		513,
		0.25,
		965,
		0.0000301,
		281,
		525,
		345
	],
	[
		562,
		0.36,
		995,
		0.0135,
		0.0268,
		0.0728,
		197
	],
	[
		537,
		0.2,
		774,
		0.00015800000000000002,
		164,
		544,
		474
	],
	[
		613,
		0.24,
		662,
		0.0022,
		817,
		85,
		0.0547
	],
	[
		623,
		0.16,
		0.84,
		0.00031,
		0.00225,
		208,
		484
	],
	[
		0.52,
		0.23,
		931,
		0.000041200000000000005,
		736,
		0.0857,
		395
	],
	[
		531,
		0.09,
		928,
		0.000797,
		621,
		138,
		212
	],
	[
		496,
		0.08,
		696,
		0.00279,
		313,
		312,
		185
	],
	[
		484,
		0.16,
		767,
		0.00158,
		765,
		111,
		0.0472
	],
	[
		512,
		0.47,
		952,
		0.00385,
		0.07,
		211,
		0.51
	],
	[
		421,
		0.24,
		965,
		0.00000693,
		0.0251,
		219,
		637
	],
	[
		526,
		0.29,
		893,
		0.000408,
		0.00000614,
		0.0603,
		0.61
	],
	[
		465,
		0.43,
		829,
		0.000154,
		0.00445,
		324,
		255
	],
	[
		393,
		0.15,
		833,
		0.00032900000000000003,
		0.00318,
		214,
		523
	],
	[
		171,
		0.28,
		433,
		0.0539,
		868,
		104,
		0.0335
	],
	[
		449,
		0.39,
		814,
		0.00897,
		399,
		112,
		199
	],
	[
		605,
		0.38,
		842,
		0.000314,
		0.00158,
		257,
		0.46
	],
	[
		333,
		0.27,
		666,
		504,
		971,
		394,
		439
	],
	[
		466,
		0.22,
		987,
		0.0008449999999999999,
		0.00000262,
		719,
		255
	],
	[
		208,
		0.16,
		489,
		0.00941,
		951,
		0.0649,
		114
	],
	[
		0.46,
		0.35,
		772,
		0.00705,
		254,
		116,
		196
	],
	[
		437,
		0.3,
		816,
		0.0000256,
		0.00007979999999999999,
		109,
		326
	],
	[
		482,
		0.31,
		992,
		0.0000348,
		0.0605,
		123,
		434
	],
	[
		565,
		0.63,
		949,
		0.000046399999999999996,
		0.0000107,
		0.0822,
		0.63
	],
	[
		252,
		0.44,
		596,
		0.00462,
		0.000283,
		112,
		0.19
	],
	[
		0.49,
		0.14,
		866,
		0.00161,
		643,
		424,
		535
	],
	[
		496,
		0.31,
		696,
		0.00279,
		313,
		312,
		185
	],
	[
		589,
		0.31,
		886,
		3,
		0.007809999999999999,
		434,
		462
	],
	[
		514,
		0.32,
		982,
		0.0043100000000000005,
		0.0000501,
		968,
		227
	],
	[
		589,
		0.52,
		696,
		0.0000865,
		0.0000343,
		0.0779,
		933
	],
	[
		477,
		0.23,
		0.97,
		0.000121,
		0.0107,
		308,
		675
	],
	[
		486,
		0.33,
		841,
		0.00473,
		0.000825,
		0.0708,
		157
	],
	[
		562,
		0.25,
		838,
		0.000547,
		88,
		416,
		359
	],
	[
		629,
		0.07,
		971,
		0.00283,
		0.0164,
		0.0961,
		432
	],
	[
		389,
		0.23,
		927,
		0.0207,
		0.00307,
		943,
		217
	],
	[
		418,
		0.22,
		386,
		0.0323,
		192,
		347,
		0.0378
	],
	[
		434,
		0.41,
		962,
		0.00558,
		301,
		223,
		286
	],
	[
		551,
		0.39,
		976,
		0.00257,
		0.00019099999999999998,
		328,
		842
	],
	[
		518,
		0.36,
		0.95,
		0.00419,
		0.0414,
		221,
		523
	],
	[
		474,
		0.33,
		895,
		0.00041799999999999997,
		0.0508,
		442,
		271
	],
	[
		639,
		0.27,
		882,
		0.000346,
		541,
		0.0803,
		353
	],
	[
		441,
		0.22,
		821,
		0.0000249,
		0.0000735,
		0.11,
		321
	],
	[
		526,
		0.23,
		985,
		0.000618,
		389,
		294,
		441
	],
	[
		444,
		0.15,
		706,
		0.0000312,
		793,
		109,
		432
	],
	[
		564,
		0,
		837,
		0.00047599999999999997,
		212,
		354,
		413
	],
	[
		485,
		0.58,
		907,
		0.00302,
		0.00617,
		326,
		0.46
	],
	[
		592,
		0.24,
		983,
		0.00114,
		0,
		258,
		0.28
	],
	[
		0.4,
		0.35,
		853,
		0.000363,
		0.00198,
		241,
		403
	],
	[
		478,
		0.2,
		948,
		0.0185,
		0,
		165,
		556
	],
	[
		403,
		0.16,
		941,
		0.0037799999999999995,
		287,
		876,
		0.0909
	],
	[
		545,
		0.49,
		906,
		0.000194,
		0.0162,
		303,
		233
	],
	[
		461,
		0.22,
		913,
		0.000696,
		771,
		0.0911,
		417
	],
	[
		728,
		0.17,
		965,
		0.00822,
		908,
		164,
		911
	],
	[
		529,
		0.25,
		946,
		0.00108,
		0.0613,
		102,
		0.48
	],
	[
		346,
		0.39,
		815,
		0.008490000000000001,
		878,
		117,
		154
	],
	[
		349,
		0.35,
		955,
		0.00247,
		0,
		0.29,
		536
	],
	[
		177,
		0.05,
		764,
		0.00042,
		0.00011499999999999999,
		851,
		253
	],
	[
		336,
		0.34,
		924,
		0.0747,
		0.0022600000000000003,
		137,
		0.4
	],
	[
		465,
		0.43,
		973,
		0.000151,
		0.000685,
		241,
		674
	],
	[
		0.61,
		0.6,
		824,
		0.0136,
		0.00000175,
		0.0606,
		822
	],
	[
		435,
		0.59,
		987,
		0.000195,
		0.0847,
		268,
		0.0993
	],
	[
		301,
		0.56,
		813,
		0.000674,
		0.0006309999999999999,
		197,
		234
	],
	[
		344,
		0.37,
		751,
		0.00441,
		0.0285,
		133,
		567
	],
	[
		298,
		0.23,
		693,
		0.0010400000000000001,
		134,
		131,
		251
	],
	[
		362,
		0.35,
		976,
		0.000303,
		0.0000368,
		0.0496,
		545
	],
	[
		224,
		0.21,
		964,
		106,
		0.00010400000000000001,
		314,
		358
	],
	[
		0.34,
		0.27,
		621,
		0.00000733,
		0.0794,
		0.11,
		317
	],
	[
		304,
		0.33,
		742,
		0.00392,
		306,
		231,
		249
	],
	[
		214,
		0.18,
		992,
		0.0000627,
		524,
		0.0769,
		209
	],
	[
		693,
		0.2,
		807,
		0.0194,
		0.00000267,
		137,
		0.95
	],
	[
		208,
		0.25,
		808,
		0.00000538,
		0.00765,
		0.21,
		291
	],
	[
		579,
		0.77,
		824,
		0.00206,
		0.00903,
		59,
		0.64
	],
	[
		199,
		0.26,
		988,
		79,
		74,
		323,
		197
	],
	[
		0.35,
		0.22,
		991,
		0.0213,
		0.000718,
		126,
		456
	],
	[
		387,
		0.24,
		988,
		0.00299,
		0.000589,
		0.0541,
		271
	],
	[
		0.27,
		0.36,
		983,
		0.0017699999999999999,
		0.00000388,
		333,
		321
	],
	[
		0.13,
		0.33,
		957,
		0.000843,
		0.0966,
		0.52,
		523
	],
	[
		0.41,
		0.3,
		0.98,
		0.008440000000000001,
		0.0439,
		476,
		0.0956
	],
	[
		326,
		0.38,
		979,
		0.00000448,
		414,
		676,
		188
	],
	[
		0.51,
		0.27,
		966,
		0.00116,
		0.0009289999999999999,
		183,
		367
	],
	[
		507,
		0.1,
		479,
		0.0388,
		0,
		118,
		114
	],
	[
		379,
		0.4,
		991,
		0.0000639,
		0.0011300000000000001,
		0.8,
		0.0562
	],
	[
		265,
		0.52,
		937,
		0.00227,
		526,
		161,
		531
	],
	[
		287,
		0.26,
		996,
		0.0438,
		0.000011400000000000001,
		496,
		152
	],
	[
		0.0777,
		0.27,
		953,
		0.0009570000000000001,
		0.0488,
		718,
		132
	],
	[
		333,
		0.4,
		944,
		181,
		0.000664,
		349,
		398
	],
	[
		321,
		0.19,
		0.95,
		0.00223,
		0,
		253,
		523
	],
	[
		493,
		0.11,
		698,
		0.0141,
		0,
		119,
		277
	],
	[
		254,
		0.54,
		985,
		0.000052600000000000005,
		363,
		0.0558,
		0.0485
	],
	[
		274,
		0.4,
		964,
		0.0000201,
		0.0337,
		979,
		115
	],
	[
		373,
		0.4,
		0.92,
		0.000026300000000000002,
		0.0188,
		989,
		126
	],
	[
		311,
		0.41,
		874,
		0.006959999999999999,
		0.0000117,
		0.0861,
		492
	],
	[
		403,
		0.36,
		988,
		0.000048200000000000006,
		0.0141,
		266,
		106
	],
	[
		371,
		0.29,
		934,
		0.000997,
		0.00031299999999999996,
		951,
		115
	],
	[
		431,
		0.4,
		947,
		0.000779,
		0.00025299999999999997,
		356,
		363
	],
	[
		437,
		0.53,
		948,
		0.0007160000000000001,
		0.000261,
		146,
		371
	],
	[
		292,
		0.43,
		0.94,
		0.00263,
		0.0018100000000000002,
		984,
		215
	],
	[
		357,
		0.24,
		651,
		0.000138,
		0.006670000000000001,
		375,
		685
	],
	[
		234,
		0.24,
		931,
		0.0000134,
		919,
		134,
		417
	],
	[
		487,
		0.64,
		944,
		0.000135,
		601,
		0.0905,
		376
	],
	[
		251,
		0.23,
		956,
		0.00927,
		0.000027000000000000002,
		138,
		352
	],
	[
		533,
		0.5,
		983,
		0.00118,
		0.0000313,
		378,
		393
	],
	[
		311,
		0.22,
		765,
		0.0000785,
		0.78,
		148,
		459
	],
	[
		497,
		0.5,
		904,
		0.000389,
		0.00122,
		0.0939,
		425
	],
	[
		356,
		0.21,
		781,
		0.0867,
		0.009009999999999999,
		309,
		374
	],
	[
		449,
		0.3,
		647,
		0.0119,
		0.000041700000000000004,
		0.0907,
		124
	],
	[
		201,
		0.32,
		939,
		0.0011300000000000001,
		603,
		173,
		678
	],
	[
		239,
		0.34,
		0.96,
		0.00215,
		185,
		855,
		269
	],
	[
		668,
		0.29,
		767,
		0.008579999999999999,
		0.00021899999999999998,
		378,
		829
	],
	[
		451,
		0.23,
		932,
		0.0255,
		0.000105,
		0.0983,
		168
	],
	[
		229,
		0.05,
		786,
		4,
		0.000133,
		954,
		171
	],
	[
		439,
		0.05,
		0.88,
		0.000503,
		221,
		537,
		611
	],
	[
		323,
		0.52,
		914,
		0.00265,
		0.000381,
		953,
		183
	],
	[
		212,
		0.19,
		889,
		0.0020800000000000003,
		0.00224,
		978,
		119
	],
	[
		322,
		0.38,
		972,
		0.00000559,
		675,
		954,
		0.0375
	],
	[
		0.22,
		0.29,
		952,
		0.0007059999999999999,
		0.00020299999999999997,
		0.37,
		0.35
	],
	[
		211,
		0.34,
		845,
		12,
		0.00507,
		148,
		0.16
	],
	[
		278,
		0.49,
		0.97,
		0.000144,
		0.0481,
		966,
		142
	],
	[
		292,
		0.2,
		987,
		0.000513,
		0.00000553,
		984,
		0.24
	],
	[
		235,
		0.08,
		782,
		0.000731,
		0.0015199999999999999,
		134,
		273
	],
	[
		418,
		0.17,
		843,
		0.0912,
		0.00000801,
		0.0943,
		0.33
	],
	[
		221,
		0.5,
		988,
		0.000049,
		0.0104,
		0.27,
		0.0894
	],
	[
		321,
		0.27,
		0.95,
		0.00223,
		0,
		253,
		523
	],
	[
		273,
		0.2,
		979,
		0.00000258,
		736,
		354,
		277
	],
	[
		444,
		0.7,
		703,
		0.00112,
		0.0761,
		127,
		425
	],
	[
		291,
		0.26,
		873,
		0.0736,
		0.00205,
		176,
		456
	],
	[
		349,
		0.14,
		976,
		0.00021600000000000002,
		0.0000347,
		949,
		246
	],
	[
		235,
		0.11,
		998,
		0.0000312,
		0.0107,
		0.18,
		484
	],
	[
		295,
		0.23,
		991,
		0.0634,
		712,
		306,
		295
	],
	[
		271,
		0.59,
		985,
		0.0005679999999999999,
		0.00112,
		0.0809,
		351
	],
	[
		341,
		0.5,
		982,
		0.000157,
		0.00246,
		412,
		81
	],
	[
		496,
		0.32,
		0.62,
		0.00386,
		0.00000147,
		114,
		275
	],
	[
		232,
		0.15,
		998,
		0.00003289999999999999,
		0.0123,
		142,
		508
	],
	[
		239,
		0.47,
		976,
		0.000109,
		362,
		954,
		123
	],
	[
		399,
		0.3,
		988,
		0.00435,
		0.00000137,
		592,
		211
	],
	[
		403,
		0.17,
		847,
		0.0722,
		0.0000198,
		108,
		323
	],
	[
		0.39,
		0.31,
		947,
		0.00515,
		0.000025300000000000002,
		538,
		171
	],
	[
		271,
		0.39,
		0.74,
		0.00395,
		0.0289,
		0.0828,
		346
	],
	[
		448,
		0.17,
		0.94,
		0.0000699,
		173,
		102,
		339
	],
	[
		265,
		0.43,
		959,
		0.000047600000000000005,
		0.14,
		977,
		0.0898
	],
	[
		212,
		0.18,
		0.84,
		0.0141,
		0.0059700000000000005,
		147,
		174
	],
	[
		217,
		0.18,
		913,
		0.000354,
		0.0342,
		0.0636,
		0.59
	],
	[
		349,
		0.34,
		864,
		0.000433,
		891,
		173,
		499
	],
	[
		237,
		0.17,
		764,
		0.000824,
		0.00434,
		183,
		276
	],
	[
		446,
		0.28,
		931,
		0.006640000000000001,
		194,
		199,
		517
	],
	[
		212,
		0.25,
		0.84,
		0.0141,
		0.0059700000000000005,
		147,
		174
	],
	[
		403,
		0.23,
		978,
		0.000135,
		0.0000353,
		314,
		119
	],
	[
		249,
		0.2,
		923,
		0.00322,
		0.000557,
		116,
		116
	],
	[
		257,
		0.3,
		915,
		0.000549,
		0,
		153,
		0.51
	],
	[
		496,
		0.38,
		572,
		0.0126,
		0,
		0.1,
		252
	],
	[
		396,
		0.12,
		948,
		0.00266,
		0.0000984,
		358,
		344
	],
	[
		284,
		0.33,
		942,
		0.0126,
		0.00433,
		351,
		183
	],
	[
		578,
		0.39,
		815,
		0.0314,
		0.00011399999999999999,
		114,
		518
	],
	[
		371,
		0.3,
		879,
		0.00000388,
		0.00000862,
		322,
		491
	],
	[
		339,
		0.51,
		945,
		0.0000878,
		0.0000151,
		0.2,
		476
	],
	[
		579,
		0.43,
		914,
		0.0000984,
		0.000901,
		153,
		512
	],
	[
		475,
		0.18,
		934,
		0.000768,
		0.0000369,
		123,
		381
	],
	[
		0.4,
		0.31,
		987,
		0.0000312,
		617,
		146,
		486
	],
	[
		535,
		0.17,
		985,
		0.0000369,
		0.0628,
		67,
		159
	],
	[
		232,
		0.17,
		946,
		0.0000295,
		0.0318,
		322,
		432
	],
	[
		0.51,
		0.34,
		993,
		0.000022,
		0.0224,
		0.22,
		372
	],
	[
		401,
		0.16,
		849,
		0.00020299999999999997,
		0.0000132,
		155,
		444
	],
	[
		435,
		0.2,
		965,
		0.00010400000000000001,
		0.00000147,
		359,
		586
	],
	[
		245,
		0.24,
		876,
		0.0000132,
		102,
		648,
		343
	],
	[
		584,
		0.31,
		759,
		0.000459,
		0.00000388,
		102,
		71
	],
	[
		0.54,
		0.19,
		988,
		0.000043700000000000005,
		66,
		0.0578,
		149
	],
	[
		489,
		0.17,
		956,
		0.0000502,
		29,
		252,
		506
	],
	[
		493,
		0.22,
		993,
		0.0007700000000000001,
		0.0000359,
		252,
		207
	],
	[
		743,
		0.14,
		115,
		0.49,
		0,
		284,
		765
	],
	[
		116,
		0.08,
		742,
		0.00011399999999999999,
		289,
		0.95,
		0.63
	],
	[
		275,
		0.07,
		977,
		0.00575,
		0.00027400000000000005,
		955,
		236
	],
	[
		396,
		0.17,
		939,
		47,
		0.000429,
		205,
		557
	],
	[
		222,
		0.15,
		945,
		0.0000037000000000000006,
		901,
		0.18,
		229
	],
	[
		196,
		0.08,
		835,
		0.0000046,
		821,
		113,
		214
	],
	[
		493,
		0.27,
		993,
		0.0007700000000000001,
		0.0000359,
		252,
		207
	],
	[
		294,
		0.13,
		937,
		0.0000686,
		0.00471,
		342,
		307
	],
	[
		542,
		0.23,
		996,
		0.0008810000000000001,
		0,
		379,
		169
	]
];
var statistics = {
	danceability: {
		count: 308,
		mean: 351.9369756494,
		std: 177.941736142,
		min: 0.0642,
		"25%": 238.5,
		"50%": 351,
		"75%": 478.75,
		max: 785
	},
	popularity: {
		count: 308,
		mean: 0.2498051948,
		std: 0.1373408266,
		min: 0,
		"25%": 0.16,
		"50%": 0.23,
		"75%": 0.33,
		max: 0.77
	},
	energy: {
		count: 308,
		mean: 774.0679821753,
		std: 296.1412424319,
		min: 0.00401,
		"25%": 718,
		"50%": 906.5,
		"75%": 963.25,
		max: 998
	},
	acousticness: {
		count: 308,
		mean: 40.9806956957,
		std: 163.1451038417,
		min: 0.00000109,
		"25%": 0.00006035,
		"50%": 0.0007525,
		"75%": 0.00672,
		max: 953
	},
	instrumentalness: {
		count: 308,
		mean: 204.907109477,
		std: 313.3436522636,
		min: 0,
		"25%": 0.00067975,
		"50%": 0.03445,
		"75%": 365.75,
		max: 971
	},
	liveness: {
		count: 308,
		mean: 252.9452220779,
		std: 262.4485181884,
		min: 0.0203,
		"25%": 44.4875,
		"50%": 179,
		"75%": 347.5,
		max: 989
	},
	valence: {
		count: 308,
		mean: 280.7883938312,
		std: 219.1640342526,
		min: 0.0321,
		"25%": 123.75,
		"50%": 251,
		"75%": 422.75,
		max: 964
	}
};
var spotify = {
	names: names,
	labels: labels,
	columns: columns,
	values: values,
	statistics: statistics
};

var spotify$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    names: names,
    labels: labels,
    columns: columns,
    values: values,
    statistics: statistics,
    'default': spotify
});

const TAU = Math.PI * 2;

function scaleLinear([min, max], [from, to]) {
    const domain_span = max - min;
    const range_span = to - from;
    return (value) => (value - min) / domain_span * range_span + from;
}

function extent(array, acc = d => d) {
    let min = Infinity;
    let max = -Infinity;
    for (const entry of array) {
        min = Math.min(acc(entry), min);
        max = Math.max(acc(entry), max);
    }
    return [min, max];
}

function deviation(array, acc = d => d) {
    const N = array.length;
    let mean = 0;
    for (const entry of array) {
        mean += acc(entry);
    }
    mean /= N;
    let dev = 0;
    for (const entry of array) {
        dev += (acc(entry) - mean);
    }
    return dev / N;
}

function getStatistics({values, columns}) {
    let result = {};
    columns.forEach((dimension, i) => {
        result[dimension] = {};
        const std = deviation(values, row => row[i]);
        result[dimension].std = std;
        const [min, max] = extent(values, row => row[i]);
        result[dimension].min = min;
        result[dimension].max = max;
    });
    return result;
}

/**
 * Creates a uniform grid in 2d and adds a third dimensions by sin(x * {@link freq_x}) * cos(y * {@link freq_y}) * {@link amplitude}.
 * @param {Object} parameters 
 * @param {Number} [parameters.N = 400] - Number of points.
 * @param {Float} [parameters.freq_x = 1] - Multiplicator for sin in the x-direction.
 * @param {Float} [parameters.freq_y = 1] - Multiplicator for cos in the y-direction.
 * @param {Float} [parameters.amplitude = 2] - Amplitutde for z-direction.
 * @param {Float} [parameters.noise = 0] - Add uniform noise to each point at each direction.
 * @param {Number} [parameters.seed = 4711] - Seed for the random number generator.
 * @returns {{values: Array<Array>, labels: Array<String>, columns: Array<String>, statistics: Object}} - The final waves dataset.
 */
function waves({N = 400, freq_x = 1, freq_y = 1, amplitude = 2, noise = 0, seed = 4711} = {}) {
    const R = new Randomizer(seed);
    const a = Math.ceil(Math.sqrt(N));
    let values = [];
    const labels = [];
    const columns = ["axis_1", "axis_2", "axis_3"];
    for (let i = 0; i < N; ++i) {
        let y = i % a / a - .5;
        let x = Math.floor(i / a) / a - .5;
        let z = Math.sin(x * freq_x) * Math.cos(y * freq_y) * amplitude;
        values.push([x, y, z]);
        labels.push(Math.floor(i / N * 8));
    }
    if (noise > 0) {
        values = values.map((row) => {
            return row.map(value => value + R.random * noise);
        });
    }
    
    return {values, labels, columns, statistics: getStatistics({values, labels, columns})};
}

const WAVES = waves();

/**
 * Creates a swissroll.
 * @param {Object} parameters 
 * @param {Number} parameters.N - Number of points.
 * @param {Float} parameters.alpha_start - Angle from which the swissroll starts.
 * @param {Float} parameters.alpha_end - Angle at which the swissroll ends.
 * @param {Float} parameters.noise - Add uniform noise to each point at each direction.
 * @param {Float} parameters.width - Width of the swissroll.
 * @param {Number} parameters.seed - Seed for the random number generator.
 * @param {Number} parameters.num_labels - Number of labels for the swissroll, partitions the swissroll in num_labels parts according to the angle.
 * @returns {{values: Array<Array>, labels: Array<String>, columns: Array<String>, statistics: Object}} - The final swissroll dataset.
 */
function swissroll({N = 400, alpha_start = 1, alpha_end = 2.5, noise = 0, width = 20, seed = 4711, num_labels = 8} = {}) {
    const R = new Randomizer(seed);
    let values = new Array(N);
    const labels = new Array(N);
    const columns = ["X", "Y", "Z"];
    for (let i = 0; i < N; ++i) {
        const alpha = (alpha_start + (i / N * (alpha_end - alpha_start))) * TAU;
        const x = alpha * Math.cos(alpha);
        const y = alpha * Math.sin(alpha);
        const z = width * R.random - width / 2;
        values[i] = [x, y, z];
        labels[i] = Math.floor(i / Math.floor(N / num_labels));
    }
    if (noise > 0) {
        values = values.map((row) => {
            return row.map(value => value + R.random * noise);
        });
    }
    
    return {values, labels, columns, statistics: getStatistics({values, labels, columns})};
}

const SWISSROLL = swissroll();

/**
 * Creates a s-shape.
 * @param {Object} parameters 
 * @param {Number} parameters.N - Number of points.
 * @param {Float} parameters.noise - Add uniform noise to each point at each direction.
 * @param {Float} parameters.width - Width of the s-shape.
 * @param {Number} parameters.seed - Seed for the random number generator.
 * @param {Number} parameters.num_labels - Number of labels for the s-shape, partitions the s-shape in num_labels parts according to the angle.
 * @returns {{values: Array<Array>, labels: Array<String>, columns: Array<String>, statistics: Object}} - The final s-shape dataset.
 */
function sshape({N = 400, noise = 0, width = 20, seed = 4711, num_labels = 8} = {}) {
    const R = new Randomizer(seed);
    let values = new Array(N);
    const labels = new Array(N);
    const columns = ["X", "Y", "Z"];
    for (let i = 0; i < N; ++i) {
        const alpha = 3 * Math.PI * (i / N - .5);
        const x = -Math.sin(alpha);
        const y = Math.sign(alpha) * (Math.cos(alpha) - 1);
        const z = width * R.random - width / 2;
        values[i] = [x, y, z];
        labels[i] = Math.floor(i / (N / num_labels));
    }
    if (noise > 0) {
        values = values.map((row) => {
            return row.map(value => value + R.random * noise);
        });
    }
    
    return {values, labels, columns, statistics: getStatistics({values, labels, columns})};
}

const SSHAPE = sshape();

/**
 * Creates a rays dataset consisting of {@link parameters.D} rays.
 * @param {Object} parameters 
 * @param {Number} [parameters.N = 400] - Roughly the number of points, uses round(N / D) * D.
 * @param {Number} [parameters.D = 7] - Number of rays, and number of the results dimensionality. Creates a ray per direction.
 * @param {Float} [parameters.noise = 0] - Add uniform noise to each point at each direction.
 * @param {Boolean} [parameters.touching = false] - Defines if the rays touches each other at the origin.
 * @param {Float} [paramter.length = 12] - Length of each ray.
 * @param {Number} [parameters.seed = 4711] - Seed for the random number generator.
 * @returns {{values: Array<Array>, labels: Array<String>, columns: Array<String>, statistics: Object}} - The final rays dataset.
 */
function rays({N = 400, D = 7, noise = 0, touching = true, length = 12, seed = 4711} = {}) {
    const R = new Randomizer(seed);
    const n = Math.round(N / D) * D;
    let values = [];
    const labels = [];
    const columns = Array.from({length: D}, (_, i) => `axis_${i + 1}`);
    for (let i = 0; i < n; ++i) {
        let row = Array.from({length: D}, (_, j) => (i % D != j) ? 0 : ((i / N) * length - length / 2));
        if (!touching) {
            row = row.map((v, j) => v + (j - i % D));
        }
        values.push(row);
        labels.push(`ray_${i % D + 1}`);
    }
    if (noise > 0) {
        values = values.map((row) => {
            return row.map(value => value + R.random * noise);
        });
    }
    
    return {values, labels, columns, statistics: getStatistics({values, labels, columns})};
}

const RAYS = rays();

/**
 * Creates a 'moons' dataset consisting of two intersecting circles.
 * @param {Object} parameters 
 * @param {Number} parameters.N - Number of points.
 * @param {Float} parameters.noise - Add uniform noise to each point at each direction.
 * @param {Float} parameters.open - How open the circles should be. Takes a value in [0 and 1), where 0 creates two full circles, 0.5 create two half circles.
 * @param {Number} parameters.seed - Seed for the random number generator.
 * @returns {{values: Array<Array>, labels: Array<String>, columns: Array<String>, statistics: Object}} - The final moons dataset.
 */
function moons({N = 400, noise = 0, open=0.5, seed = 4711} = {}) {
    const R = new Randomizer(seed);
    const N_alpha = Math.floor(N / 2);
    const N_beta = N - N_alpha;

    const scale = scaleLinear([0, 1], [open / 2, 1 - open / 2]);
    let values = new Array(N);
    const labels = new Array(N);
    const columns = ["moon_X", "moon_Y", "moon_Z"];
    for (let i = 0; i < N_alpha; ++i) {
        const alpha = TAU * scale(i / N_alpha) - TAU / 4;
        const x = Math.sin(alpha) - 0.5;
        const y = Math.cos(alpha);
        const z = 0;
        values[i] = [x, y, z];
        labels[i] = "α";
    }
    for (let i = 0; i < N_beta; ++i) {
        const alpha = TAU * scale(i / N_beta) - TAU / 4;
        const x = 1 - Math.sin(alpha) - .5;
        const y = 0;
        const z = 1 - Math.cos(alpha) - 1; 
        values[i + N_alpha] = [x, y, z];
        labels[i + N_alpha] = "β";
    }
    if (noise > 0) {
        values = values.map((row) => {
            return row.map(value => value + R.random * noise);
        });
    }
    
    return {values, labels, columns, statistics: getStatistics({values, labels, columns})};
}

const MOONS = moons();

const MNIST_TRAIN_VALUES_URL = "https://storage.googleapis.com/cvdf-datasets/mnist/train-images-idx3-ubyte.gz"; // "http://yann.lecun.com/exdb/mnist/train-images-idx3-ubyte.gz"
const MNIST_TRAIN_LABELS_URL = "https://storage.googleapis.com/cvdf-datasets/mnist/train-labels-idx1-ubyte.gz"; // "http://yann.lecun.com/exdb/mnist/train-labels-idx1-ubyte.gz"
const MNIST_TEST_VALUES_URL = "https://storage.googleapis.com/cvdf-datasets/mnist/t10k-images-idx3-ubyte.gz";
const MNIST_TEST_LABELS_URL = "https://storage.googleapis.com/cvdf-datasets/mnist/t10k-labels-idx1-ubyte.gz";

/**
 * Downloads and samples the MNIST dataset.
 * @param {Object} parameters
 * @param {Number} [N = 400] - Number of points.
 * @param {Number} [seed = 4711] - Seed for the random number generator.
 * @param {Array<Number>} [digits = [0,1,2,3,4,5,6,7,8,9]] - Filter for which digits end up in the final dataset.
 * @param {Boolean} [big = false] - If big is false, then it downloads the test dataset, if big is true, then it downloads the training dataset.
 * @returns {{values: Array<Array>, labels: Array<String>, columns: Array<String>, statistics: Object}} - The final MNIST dataset sample.
 */
async function mnist({N = 400, seed = 4711, digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], big = false} = {}) {
    const R = new Randomizer(seed);
    const raw_values = await fetch_data$1(big ? MNIST_TRAIN_VALUES_URL : MNIST_TEST_VALUES_URL);
    const raw_labels = await fetch_data$1(big ? MNIST_TRAIN_LABELS_URL : MNIST_TEST_LABELS_URL);


    let all_labels = [];
    for (let i = 0; i < (big ? 60000 : 10000); ++i) {
        all_labels[i] = raw_labels[8 + i];
    }

    const n = Math.floor(N / digits.length);
    const number_digits = Array.from({length: digits.length}, () => n);
    number_digits[0] += (N - (n * digits.length));
    
    const indices = Array.from({length: (big ? 60000 : 10000)}, (_, i) => i);
    const filtered_indices = digits.map(digit => indices.filter(i => all_labels[i] == digit));
    const selected_indices = number_digits.map((n, i) => R.choice(filtered_indices[i], n)).flat();
    const values = [];
    const labels = [];
    for (const i of selected_indices) {
        const data_row = new Array(28 * 28);
        for (let j = 0; j < 28 * 28; ++j) {
            data_row[j] = (raw_values[16 + i * (28 * 28) + j]) / 255;
        }
        values.push(data_row);
        labels.push(raw_labels[8 + i]);
    }
    const columns = Array.from({length: 28 * 28}, (_, i) => `pixel_at_${i % 28}_${Math.floor(i / 28)}}`);
    return {values, labels, columns, statistics: getStatistics({values, labels, columns})};
}

async function fetch_data$1(URL) {
    const response = await fetch(URL, { credentials: "include", cache: "force-cache" });
    let data = await response.arrayBuffer();
    data = pako.inflate(data);
    return data;
}

const FMNIST_TRAIN_VALUES_URL = "https://github.com/zalandoresearch/fashion-mnist/blob/3a25339d53c5d2a6a713c6467f17b37332aae507/data/fashion/train-images-idx3-ubyte.gz?raw=true";
const FMNIST_TRAIN_LABELS_URL = "https://github.com/zalandoresearch/fashion-mnist/blob/3a25339d53c5d2a6a713c6467f17b37332aae507/data/fashion/train-labels-idx1-ubyte.gz?raw=true";
const FMNIST_TEST_VALUES_URL = "https://github.com/zalandoresearch/fashion-mnist/blob/3a25339d53c5d2a6a713c6467f17b37332aae507/data/fashion/t10k-images-idx3-ubyte.gz?raw=true";
const FMNIST_TEST_LABELS_URL = "https://github.com/zalandoresearch/fashion-mnist/blob/3a25339d53c5d2a6a713c6467f17b37332aae507/data/fashion/t10k-labels-idx1-ubyte.gz?raw=true";
const FMNIST_LABELS_DICT = {
    0: "T-shirt/top",
    1: "Trouser",
    2: "Pullover",
    3: "Dress",
    4: "Coat",
    5: "Sandal",
    6: "Shirt",
    7: "Sneaker",
    8: "Bag",
    9: "Ankle boot"
};

/**
 * Downloads and samples the FMNIST dataset.
 * @param {Object} parameters
 * @param {Number} [N = 400] - Number of points.
 * @param {Number} [seed = 4711] - Seed for the random number generator.
 * @param {Array<Number>} [items = [0,1,2,3,4,5,6,7,8,9]] - Filter for which items end up in the final dataset.
 * @param {Boolean} [big = false] - If big is false, then it downloads the test dataset (4.22MB + 5.03KB), if big is true, then it downloads the training dataset (25.2MB + 28.8KB).
 * @returns {{values: Array<Array>, labels: Array<String>, columns: Array<String>, statistics: Object}} - The final FMNIST dataset sample.
 */
async function fmnist({N = 400, seed = 4711, items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], big = false} = {}) {
    const R = new Randomizer(seed);
    const raw_values = await fetch_data(big ? FMNIST_TRAIN_VALUES_URL : FMNIST_TEST_VALUES_URL);
    const raw_labels = await fetch_data(big ? FMNIST_TRAIN_LABELS_URL : FMNIST_TEST_LABELS_URL);

    let all_labels = [];
    for (let i = 0; i < (big ? 60000 : 10000); ++i) {
        all_labels[i] = raw_labels[8 + i];
    }

    const n = Math.floor(N / items.length);
    const number_digits = Array.from({length: items.length}, () => n);
    number_digits[0] += (N - (n * items.length));
    
    const indices = Array.from({length: (big ? 60000 : 10000)}, (_, i) => i);
    const filtered_indices = items.map(digit => indices.filter(i => all_labels[i] == digit));
    const selected_indices = number_digits.map((n, i) => R.choice(filtered_indices[i], n)).flat();
    const values = [];
    const labels = [];
    for (const i of selected_indices) {
        const data_row = new Array(28 * 28);
        for (let j = 0; j < 28 * 28; ++j) {
            data_row[j] = (raw_values[16 + i * (28 * 28) + j]) / 255;
        }
        values.push(data_row);
        labels.push(FMNIST_LABELS_DICT[raw_labels[8 + i]]);
    }
    const columns = Array.from({length: 28 * 28}, (_, i) => `pixel_at_${i % 28}_${Math.floor(i / 28)}}`);
    return {values, labels, columns, statistics: getStatistics({values, labels, columns})};
}

async function fetch_data(URL) {
    const response = await fetch(URL, { credentials: "include", cache: "force-cache" });
    let data = await response.arrayBuffer();
    data = pako.inflate(data);
    return data;
}

export { iris$1 as IRIS, MOONS, oecd$1 as OECD, RAYS, spotify$1 as SPOTIFY, SSHAPE, SWISSROLL, WAVES, fmnist as fetch_fmnist, mnist as fetch_mnist, moons, rays, sshape, swissroll, waves };
