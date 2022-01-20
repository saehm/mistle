'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var druidjs = require('@saehrimnir/druidjs');
var pako = require('pako');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var pako__default = /*#__PURE__*/_interopDefaultLegacy(pako);

var names$3=["Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica"];var labels$3=["Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica"];var columns$3=["sepallength","sepalwidth","petallength","petalwidth"];var values$3=[[5.1,3.5,1.4,0.2],[4.9,3,1.4,0.2],[4.7,3.2,1.3,0.2],[4.6,3.1,1.5,0.2],[5,3.6,1.4,0.2],[5.4,3.9,1.7,0.4],[4.6,3.4,1.4,0.3],[5,3.4,1.5,0.2],[4.4,2.9,1.4,0.2],[4.9,3.1,1.5,0.1],[5.4,3.7,1.5,0.2],[4.8,3.4,1.6,0.2],[4.8,3,1.4,0.1],[4.3,3,1.1,0.1],[5.8,4,1.2,0.2],[5.7,4.4,1.5,0.4],[5.4,3.9,1.3,0.4],[5.1,3.5,1.4,0.3],[5.7,3.8,1.7,0.3],[5.1,3.8,1.5,0.3],[5.4,3.4,1.7,0.2],[5.1,3.7,1.5,0.4],[4.6,3.6,1,0.2],[5.1,3.3,1.7,0.5],[4.8,3.4,1.9,0.2],[5,3,1.6,0.2],[5,3.4,1.6,0.4],[5.2,3.5,1.5,0.2],[5.2,3.4,1.4,0.2],[4.7,3.2,1.6,0.2],[4.8,3.1,1.6,0.2],[5.4,3.4,1.5,0.4],[5.2,4.1,1.5,0.1],[5.5,4.2,1.4,0.2],[4.9,3.1,1.5,0.1],[5,3.2,1.2,0.2],[5.5,3.5,1.3,0.2],[4.9,3.1,1.5,0.1],[4.4,3,1.3,0.2],[5.1,3.4,1.5,0.2],[5,3.5,1.3,0.3],[4.5,2.3,1.3,0.3],[4.4,3.2,1.3,0.2],[5,3.5,1.6,0.6],[5.1,3.8,1.9,0.4],[4.8,3,1.4,0.3],[5.1,3.8,1.6,0.2],[4.6,3.2,1.4,0.2],[5.3,3.7,1.5,0.2],[5,3.3,1.4,0.2],[7,3.2,4.7,1.4],[6.4,3.2,4.5,1.5],[6.9,3.1,4.9,1.5],[5.5,2.3,4,1.3],[6.5,2.8,4.6,1.5],[5.7,2.8,4.5,1.3],[6.3,3.3,4.7,1.6],[4.9,2.4,3.3,1],[6.6,2.9,4.6,1.3],[5.2,2.7,3.9,1.4],[5,2,3.5,1],[5.9,3,4.2,1.5],[6,2.2,4,1],[6.1,2.9,4.7,1.4],[5.6,2.9,3.6,1.3],[6.7,3.1,4.4,1.4],[5.6,3,4.5,1.5],[5.8,2.7,4.1,1],[6.2,2.2,4.5,1.5],[5.6,2.5,3.9,1.1],[5.9,3.2,4.8,1.8],[6.1,2.8,4,1.3],[6.3,2.5,4.9,1.5],[6.1,2.8,4.7,1.2],[6.4,2.9,4.3,1.3],[6.6,3,4.4,1.4],[6.8,2.8,4.8,1.4],[6.7,3,5,1.7],[6,2.9,4.5,1.5],[5.7,2.6,3.5,1],[5.5,2.4,3.8,1.1],[5.5,2.4,3.7,1],[5.8,2.7,3.9,1.2],[6,2.7,5.1,1.6],[5.4,3,4.5,1.5],[6,3.4,4.5,1.6],[6.7,3.1,4.7,1.5],[6.3,2.3,4.4,1.3],[5.6,3,4.1,1.3],[5.5,2.5,4,1.3],[5.5,2.6,4.4,1.2],[6.1,3,4.6,1.4],[5.8,2.6,4,1.2],[5,2.3,3.3,1],[5.6,2.7,4.2,1.3],[5.7,3,4.2,1.2],[5.7,2.9,4.2,1.3],[6.2,2.9,4.3,1.3],[5.1,2.5,3,1.1],[5.7,2.8,4.1,1.3],[6.3,3.3,6,2.5],[5.8,2.7,5.1,1.9],[7.1,3,5.9,2.1],[6.3,2.9,5.6,1.8],[6.5,3,5.8,2.2],[7.6,3,6.6,2.1],[4.9,2.5,4.5,1.7],[7.3,2.9,6.3,1.8],[6.7,2.5,5.8,1.8],[7.2,3.6,6.1,2.5],[6.5,3.2,5.1,2],[6.4,2.7,5.3,1.9],[6.8,3,5.5,2.1],[5.7,2.5,5,2],[5.8,2.8,5.1,2.4],[6.4,3.2,5.3,2.3],[6.5,3,5.5,1.8],[7.7,3.8,6.7,2.2],[7.7,2.6,6.9,2.3],[6,2.2,5,1.5],[6.9,3.2,5.7,2.3],[5.6,2.8,4.9,2],[7.7,2.8,6.7,2],[6.3,2.7,4.9,1.8],[6.7,3.3,5.7,2.1],[7.2,3.2,6,1.8],[6.2,2.8,4.8,1.8],[6.1,3,4.9,1.8],[6.4,2.8,5.6,2.1],[7.2,3,5.8,1.6],[7.4,2.8,6.1,1.9],[7.9,3.8,6.4,2],[6.4,2.8,5.6,2.2],[6.3,2.8,5.1,1.5],[6.1,2.6,5.6,1.4],[7.7,3,6.1,2.3],[6.3,3.4,5.6,2.4],[6.4,3.1,5.5,1.8],[6,3,4.8,1.8],[6.9,3.1,5.4,2.1],[6.7,3.1,5.6,2.4],[6.9,3.1,5.1,2.3],[5.8,2.7,5.1,1.9],[6.8,3.2,5.9,2.3],[6.7,3.3,5.7,2.5],[6.7,3,5.2,2.3],[6.3,2.5,5,1.9],[6.5,3,5.2,2],[6.2,3.4,5.4,2.3],[5.9,3,5.1,1.8]];var statistics$3={sepallength:{count:150,mean:5.8433333333,std:0.828066128,min:4.3,"25%":5.1,"50%":5.8,"75%":6.4,max:7.9},sepalwidth:{count:150,mean:3.054,std:0.4335943114,min:2,"25%":2.8,"50%":3,"75%":3.3,max:4.4},petallength:{count:150,mean:3.7586666667,std:1.76442042,min:1,"25%":1.6,"50%":4.35,"75%":5.1,max:6.9},petalwidth:{count:150,mean:1.1986666667,std:0.7631607417,min:0.1,"25%":0.3,"50%":1.3,"75%":1.8,max:2.5}};var iris = {names:names$3,labels:labels$3,columns:columns$3,values:values$3,statistics:statistics$3};

var iris$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    names: names$3,
    labels: labels$3,
    columns: columns$3,
    values: values$3,
    statistics: statistics$3,
    'default': iris
});

var names$2=["South_Africa","Israel","Japan","Korea","Russia","Australia","New_Zealand","Austria","Belgium","Czech_Republic","Denmark","Estonia","Finland","France","Germany","Greece","Hungary","Iceland","Ireland","Italy","Latvia","Luxembourg","Netherlands","Norway","Poland","Portugal","Slovak_Republic","Slovenia","Spain","Sweden","Switzerland","Turkey","United_Kingdom","Canada","Mexico","United_States","Chile","Brazil"];var labels$2=["Africa","Asia","Asia","Asia","Asia","Australia","Australia","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","North_America","North_America","North_America","South_America","South_America"];var columns$2=["Dwellings_without_basic_facilities","Housing_expenditure","Rooms_per_person","Household_net_adjusted_disposable_income","Household_net_financial_wealth","Labour_market_insecurity","Employment_rate","Long-term_unemployment_rate","Personal_earnings","Quality_of_support_network","Educational_attainment","Student_skills","Years_in_education","Air_pollution","Water_quality","Stakeholder_engagement_for_developing_regulations","Voter_turnout","Life_expectancy","Self-reported_health","Life_satisfaction","Feeling_safe_walking_alone_at_night","Homicide_rate","Employees_working_very_long_hours","Time_devoted_to_leisure_and_personal_care"];var values$2=[[20.5,18,0.7,8712,16937,22.6,43,14.37,5429,90,65,384,15.4,14,69,1.6,73,56.8,67,4.9,39.8,9.6,18.07,14.73],[4.4,21,1.2,22116,50051,3.9,68,0.63,29635,86,85,474,15.9,26,65,0.9,72,82.1,80,7.1,66.3,1.8,14.74,13.94],[6.4,22,1.9,27323,92818,2.4,73,1.36,35672,91,94,540,16,16,87,1.3,53,83.4,35,5.9,70.2,0.3,21.89,14.85],[4.2,16,1.4,19372,30852,2.1,65,0.01,36653,76,85,542,17.5,29,78,2.4,76,81.8,35,5.8,67.7,1.1,23.12,14.7],[14.4,11,0.9,17006,3687,5.1,69,1.45,26977,91,95,481,16.1,14,49,0.8,65,70.7,39,6,52.9,11.3,0.18,14.91],[1.1,20,2.3,33138,48836,3.9,72,1.32,51148,95,77,512,19.2,6,94,2.7,93,82.2,85,7.3,62.6,0.8,13.39,14.35],[0.3,23,2.4,23213,81271,4.9,74,0.78,45183,99,74,509,18,9,92,2.5,77,81.4,90,7.4,64.4,1.2,13.78,14.87],[1,21,1.6,31667,55623,2.2,71,1.53,45988,93,84,500,17.1,15,93,1.3,75,81.2,69,7.1,81.2,0.4,7.32,14.55],[2.1,21,2.2,28700,89057,3.6,62,4.26,48093,88,74,509,18.8,19,83,2.2,89,80.7,74,6.9,69.6,1.1,4.73,15.77],[0.7,26,1.4,18953,20170,4.7,69,2.72,21185,90,93,500,17.4,17,88,2.6,59,78.3,60,6.6,70.1,0.9,5.99,15.03],[0.5,25,1.9,26945,54839,2.3,73,1.66,49589,96,80,498,19.6,11,95,2.1,86,80.4,72,7.5,85.2,0.3,2.21,15.87],[7.2,19,1.6,16565,15728,7.6,70,3.32,21020,90,91,526,17.8,9,84,2.8,64,77.3,53,5.6,67.2,4.8,3.29,14.9],[0.6,22,1.9,28238,24482,2.6,69,1.97,40742,94,87,529,19.7,7,94,2.3,69,81.1,65,7.4,85.8,1.5,3.6,15.17],[0.5,21,1.8,29759,53851,4.6,64,4.21,40828,89,75,500,16.4,14,84,2.1,80,82.3,67,6.4,70.6,0.6,7.77,16.36],[0,22,1.8,31925,49822,2.7,74,2.21,43872,92,87,515,18.1,15,94,2.1,72,80.9,65,7,74.6,0.5,4.96,15.55],[0.5,26,1.2,18099,17568,32,49,19.47,26436,83,68,466,18.5,15,69,1.9,64,81.4,74,5.6,62.5,1.5,6.37,14.74],[5.3,20,1.1,15614,17774,7.8,62,3.78,21399,82,83,487,17.2,16,76,1.2,62,75.7,57,5.3,53.2,1.2,3.76,15.04],[0,24,1.6,27918,54275,0.7,82,0.67,56789,96,73,484,19.6,7,97,1.6,81,82.1,77,7.5,78.1,0.3,13.79,14.13],[0.1,20,2,22969,31861,5,61,6.98,53286,95,79,516,17.8,8,82,0.8,70,81.1,82,6.8,77,0.8,4.11,15.3],[0.8,24,1.4,25004,56833,11.8,57,7.79,34744,91,59,490,16.8,18,70,1.5,75,82.8,66,5.8,59.3,0.8,3.83,14.89],[14.7,26,1.2,13655,9837,8,66,4.67,22270,84,90,494,17.8,12,76,2.4,59,74.1,50,5.9,61.6,6.1,2.45,13.83],[0.1,21,2,40914,64500,2.1,67,1.6,61511,93,82,490,15.1,15,85,1.5,91,81.9,72,6.7,70.6,0.2,3.27,15.17],[0,19,1.9,27759,71251,3.1,73,2.98,51003,88,76,519,17.9,17,94,1.3,75,81.4,76,7.3,80.5,0.8,0.44,15.9],[0,18,2,33393,16930,1.5,75,0.41,51718,93,82,496,18,6,97,1.9,78,81.8,76,7.6,89.6,1,3.05,15.56],[3.1,22,1.1,17820,12902,8.9,62,3.26,23649,86,91,521,17.9,17,80,2.6,55,77.1,58,6,66.1,1,7.25,14.42],[1,19,1.7,19882,29563,11.7,63,8.28,23977,85,43,488,17.4,10,89,1.2,56,80.8,46,5.1,69.2,0.9,9.77,14.72],[1.3,25,1.1,18534,8896,10.7,61,8.8,22151,92,91,472,16.2,16,81,2.9,59,76.5,66,6.2,62.1,1.2,6.23,14.92],[0.6,19,1.5,19130,17271,5.2,64,5.27,33068,89,86,499,18.3,14,91,2.8,52,80.4,65,5.7,83.9,0.4,5.5,14.75],[0.1,23,1.9,22007,29819,26.6,57,12.92,36013,96,57,490,17.7,12,71,1.6,73,83.2,72,6.4,81.6,0.6,5.61,15.93],[0,20,1.8,28859,69899,5.2,75,1.33,40994,92,82,482,19.1,7,95,2,86,82,81,7.3,76.8,0.8,1.1,15.18],[0,22,1.8,35952,120265,1.7,80,1.71,57082,93,88,518,17.4,17,97,2.6,48,82.9,81,7.6,87.4,0.5,6.34,15.01],[7.6,21,1.1,13471,3886,9.1,50,2.04,15992,84,36,462,16.9,17,63,2.1,85,76.6,68,5.5,60.4,1.7,39.26,12.24],[0.4,23,1.9,26687,69927,5.7,73,2.22,41659,93,79,502,16.7,11,87,2.9,66,81.1,74,6.5,77.8,0.2,12.83,14.87],[0.2,21,2.5,30474,75775,3.9,72,0.89,48164,94,90,522,16.3,12,90,3,68,81.5,89,7.4,81.7,1.5,3.83,14.41],[4.2,22,1,12806,9856,5.2,60,0.06,12850,75,34,417,14.4,12,68,3.5,63,74.6,66,6.2,39.9,23.4,28.28,12.8],[0.1,19,2.4,41071,163268,5.2,68,1.42,57139,90,90,492,17.1,11,84,3.2,67,78.8,88,6.9,73.9,5.2,11.69,14.47],[9.4,18,1.2,15094,18172,8.1,62,1.67,21370,82,61,436,17.1,18,71,1.5,49,78.8,59,6.5,50.2,3.8,13.84,14.91],[6.7,21,0.9,11487,7566,6.6,67,0.81,10229,90,46,402,15.6,17,73,1.3,79,75,70,6.5,39.5,26.7,9.45,14.27]];var statistics$2={Dwellings_without_basic_facilities:{count:38,mean:3.1605263158,std:4.8000866813,min:0,"25%":0.125,"50%":0.75,"75%":4.35,max:20.5},Housing_expenditure:{count:38,mean:21.0789473684,std:2.9351695835,min:11,"25%":19.25,"50%":21,"75%":22.75,max:26},Rooms_per_person:{count:38,mean:1.6131578947,std:0.466250746,min:0.7,"25%":1.2,"50%":1.65,"75%":1.9,max:2.5},Household_net_adjusted_disposable_income:{count:38,mean:23742.9210526316,std:8044.3115485973,min:8712,"25%":17889.75,"50%":23091,"75%":28819.25,max:41071},Household_net_financial_wealth:{count:38,mean:43839.9473684211,std:35212.4867778212,min:3687,"25%":17020.5,"50%":31356.5,"75%":62583.25,max:163268},Labour_market_insecurity:{count:38,mean:6.8684210526,std:6.7093764669,min:0.7,"25%":2.8,"50%":5.05,"75%":7.95,max:32},Employment_rate:{count:38,mean:66.3684210526,std:8.198289382,min:43,"25%":62,"50%":67.5,"75%":72.75,max:82},"Long-term_unemployment_rate":{count:38,mean:3.7060526316,std:4.2472022839,min:0.01,"25%":1.3375,"50%":2.005,"75%":4.2475,max:19.47},Personal_earnings:{count:38,mean:35934.3947368421,std:14804.883862811,min:5429,"25%":22614.75,"50%":36333,"75%":48146.25,max:61511},Quality_of_support_network:{count:38,mean:89.6315789474,std:5.359614007,min:75,"25%":86.5,"50%":90.5,"75%":93,max:99},Educational_attainment:{count:38,mean:76.6315789474,std:16.0714974371,min:34,"25%":73.25,"50%":82,"75%":87.75,max:95},Student_skills:{count:38,mean:491.1578947368,std:34.5202849224,min:384,"25%":482.5,"50%":497,"75%":514.25,max:542},Years_in_education:{count:38,mean:17.3631578947,std:1.2713944361,min:14.4,"25%":16.475,"50%":17.4,"75%":18,max:19.7},Air_pollution:{count:38,mean:13.8421052632,std:4.9730425501,min:6,"25%":11,"50%":14,"75%":17,max:29},Water_quality:{count:38,mean:82.5,std:11.5495407654,min:49,"25%":73.75,"50%":84,"75%":92.75,max:97},Stakeholder_engagement_for_developing_regulations:{count:38,mean:2.0263157895,std:0.7062210857,min:0.8,"25%":1.5,"50%":2.1,"75%":2.6,max:3.5},Voter_turnout:{count:38,mean:70.1052631579,std:11.8339627451,min:48,"25%":62.25,"50%":71,"75%":77.75,max:93},Life_expectancy:{count:38,mean:79.2684210526,std:4.7751669145,min:56.8,"25%":77.55,"50%":81.1,"75%":81.875,max:83.4},"Self-reported_health":{count:38,mean:67.6052631579,std:13.8672070371,min:35,"25%":61.25,"50%":68.5,"75%":76,max:90},Life_satisfaction:{count:38,mean:6.5052631579,std:0.7679201002,min:4.9,"25%":5.9,"50%":6.5,"75%":7.25,max:7.6},Feeling_safe_walking_alone_at_night:{count:38,mean:68.7131578947,std:13.0525584331,min:39.5,"25%":62.2,"50%":69.85,"75%":78.025,max:89.6},Homicide_rate:{count:38,mean:3.0736842105,std:5.8155283374,min:0.2,"25%":0.6,"50%":1,"75%":1.65,max:26.7},Employees_working_very_long_hours:{count:38,mean:9.1339473684,std:8.2402494516,min:0.18,"25%":3.7775,"50%":6.285,"75%":13.25,max:39.26},Time_devoted_to_leisure_and_personal_care:{count:38,mean:14.8160526316,std:0.7831003507,min:12.24,"25%":14.49,"50%":14.88,"75%":15.17,max:16.36}};var oecd = {names:names$2,labels:labels$2,columns:columns$2,values:values$2,statistics:statistics$2};

var oecd$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    names: names$2,
    labels: labels$2,
    columns: columns$2,
    values: values$2,
    statistics: statistics$2,
    'default': oecd
});

var names$1=["Key to the Gate","Trumpets Of Doom","Tunnel of Set XIII","Hail Murder - Live In South America 2003","Moti Ragnarokum","Hail Murder","Key To The Gate","Tunnel of Set XIII","Krigaren si gravferd","PERVERTOR OF THE 7 GATES","Love In A Void","Osiris","A World Of Bones","Pervertor Of The 7 Gates","Tunnel of Set XIII","Bellum Omnium Contra Omnes","Ghastly Indoctrination","Fear of Napalm","Go To Hell","Pull the Plug - Live in L.A. Death & Raw – 1998","Tomorrow's Victim","Stillborn Saviour","Divine in fire","Lunatic Of God's Creation - Reissue","Thrasher's Abbatoir","Silent Violence","Sacred Serenity","Evidence In The Furnace","Misanthrope","Oxidised Razor Masticator","Misanthrope","Pull the Plug - Live at Backstreets","Go to Hell","No Sympathy For Fools","Year One Now","Misanthrope - Demo","Together as One","Silent Violence","Shreds Of Flesh","Pull the Plug","Nothing Is Everything","The Ancient Ones","Addicted to Vaginal Skin","Deathrow (no regrets)","Livestock Marketplace","Amok","Bible Basher","Pull the Plug - 12/05/87 Rehearsals","Shreds Of Flesh","So You Die","Let the Stillborn Come to Me","Silent Violence","Deathrow (no Regrets)","Thrasher's Abbatoir","Painkiller","Nothing Is Everything","Out Of Touch","By The Light","Crucified For The Innocence","Together As One","War is Coming","Silent Violence","Shreds Of Flesh","Room 101","Together as One","Deathrow (no regrets)","Addicted to Vaginal Skin (Live)","Oxidised Razor Masticator","Livestock Marketplace - Bonus Track","Spiritual Healing","Behold The Throne Of Chaos","On Most Surfaces","Faster","Draconian trilogy (Live in Miskolc)","When the Sun Hits","Secret of the runes","Lorelei","Enter","When the Sun Hits","Estranged - A Timeless Spell","Face Your Demons - Session Version","Murder","Anagram","Face Your Demons - Alternative Version","Short Glance","Inimical Chimera - Remaster","Nobody Dares","Memories","Forgiven","Frail","Who I Am","Pale Tortured Blue","Restless","When the Sun Hits","Candles","Liberty Bell","Lava","Survivalism - deadmau5 Remix","You Know Who You Are","Capital G","The Frail","Far Too Frail","Another Version of the Truth - kronos and enrique gonzalez muller","Starved for Truth - Part 1","In The Army Now","Capital G - Paul Epworth Phones 666 Revolutions Mix","Sharp Dressed Man","The Frail - Remix Version","Dead Eyes Opened 12\"","Dead Eyes Opened (USA 2015)","Bullet","Copy of a","Mount","My Thorny Thorny Crown","Sin","So What","End Of Days Part 2 (Extreme Mayan Makeover Mix)","Sharp Dressed Man","My Thorny Thorny Crown","She's Got A Cause","Dead Eyes Opened","Bitch","Pantomime","On the Surface of Scardonia","Crucified","Sweet Dreams (Are Made Of This)","A Hole In The Wall","Tough Guy","Living Dead Girl - Subliminal Seduction Mix","Living Dead Girl","Living Dead Girl - Photek Remix","Spine For You","Spookshow Baby","Falls Apart","Dreamtime","Birds Of Hell Awaiting","Stillborn","Come On - Go Off - Rotersand Remix","Rowboat","Come On - Go Off","Living Dead Girl","Falls Apart","Coward","Reload","Birds Of Hell Awaiting","The Vaults of Re:Memory","WO BIST DU","Birds Of Hell Awaiting","Thirteen","Over My Head","I Hate Today","WO BIST DU","Fadeaway","Survive","Dragula","OHNE DICH","Sucks (Live)","Rowboat","Everything Is Boring","Living Dead Girl - Live","Blue Monday","Candy-O","OHNE DICH - RMX BY LAIBACH","Spookshow Baby - Black Leather Catsuit Mix","Keep It Clean","Ego Tripp","Vapor Transmission - Intro Album Version","Lunchbox","What?","Living Dead Girl","Dogma","Dogma","Fadeaway","Mesopotamia","Fadeaway - Instrumental","Spookshow Baby - Black Leather Catsuit Mix","Living Dead Girl","Light In The Shadows","Birds Of Hell Awaiting","Make Up Your Mind","Fadeaway - Live","Keine Lust","Solaris","Midnight Train","Tough Guy - Tim Ismag Remix","House Of 1000 Corpses/Unholy 3","Rainmaker","Tears of the Dragon - Live At The Marquee","The Nomad","Melt The Ice Away","Living After Midnight","Painkiller","Fear of the Dark","The Rage","Anthem To The Estranged","Never Walk Alone..A Call To Arms","Lightning Strikes Twice","The Haunting","When the Wild Wind Blows","Come And Get It","Louie Louie - Alternative Version","Do or Die","Enter Sandman","Get Back In Line - Live in Wacken","Get Back In Line","Greenhouse Effect","The Fallen Angel","Purgatory","Come and Get It","Electric Eye - Live from Battle Cry","Parasite","Tears of the Dragon (Acoustic Chillout) [Bonus Track]","Through The Never (Live in Mexico City)","Escape","Get Back In Line - Live","Electric Eye - Live from the San Antonio Civic Center","Johnny B. Goode","Rainmaker","Tears of the Dragon","Trapped Under Ice","Battery (Live in Mexico City)","The Four Horsemen (Live in Mexico City)","Tears Of A Clown","The Threat Is Real","Electric Eye - Live","Electric Eye","Electric Eye","The Unforgiven (Live in Mexico City)","Up to the Limit","Blood Money","Battery","Agony","So What","Bare Bones","Carry On","Nightmare/The Dreamtime","Call To Arms","Another Life","The Thin Line Between Love And Hate","Louie Louie","Burnin' Up","Tears of the Dragon - Live In Brazil","Souls Of Black (Alcatraz Revisit)","Enter Sandman (Live)","No More Lies - Live","Painkiller - Live from Battle Cry","Electric Eye","No More Lies","Enter Sandman (Live with the SFSO)","Rainmaker - Live","Tears of the Dragon","Red Star Falling","The Threat Is Real","Rainmaker","Together as One","One","Capricorn","Up To The Limit","Wish You Were Dead","Get Back In Line - Live Manchester","All Nightmare Long","Battery (Live)","Tears of the Dragon","Wish You Were Dead","Battery (Live with the SFSO)","Rock 'N' Roll","Red Star Falling - orchestral version","All Men Play On Ten","Afraid to Shoot Strangers","Electric Funeral","For Whom The Bell Tolls (Live in Mexico City)","No More Lies","Go to Hell","Go To Hell","Tears Of The Dragon","Jack The Ripper","No More Lies","Let Me Out","One Of A Kind","The Riddle","The Haunting","Written in stone","Full Moon","Draconian Love","Ain't Your Fairytale","Ghost Division","Neverland","The champion","The dragon lies bleeding","Back To Back","Hero of Zeroes","Dreamland","We're Gonna Make It","Not Like You","Zeroes","In the Army Now (Bonus Track)","Back to back","The bitch is back","Carry the Torch","Carry the Torch (Track Commentary)","The Golden Spiral","Vosstanie Roda","Suden joiku","The Golden Spiral","A Burning Arrow","Carry the Torch","Vosstanie Roda","Neverland"];var labels$1=["black metal","black metal","black metal","black metal","black metal","black metal","black metal","black metal","black metal","black metal","black metal","black metal","black metal","black metal","black metal","black metal","black metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","gothic metal","gothic metal","gothic metal","gothic metal","gothic metal","gothic metal","gothic metal","gothic metal","gothic metal","gothic metal","gothic metal","gothic metal","gothic metal","gothic metal","gothic metal","gothic metal","gothic metal","gothic metal","gothic metal","gothic metal","gothic metal","gothic metal","gothic metal","gothic metal","gothic metal","industrial","industrial","industrial","industrial","industrial","industrial","industrial","industrial","industrial","industrial","industrial","industrial","industrial","industrial","industrial","industrial","industrial","industrial","industrial","industrial","industrial","industrial","industrial","industrial","industrial","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","power metal","power metal","power metal","power metal","power metal","power metal","power metal","power metal","power metal","power metal","power metal","power metal","power metal","power metal","power metal","power metal","power metal","power metal","power metal","power metal","power metal","folk metal","folk metal","folk metal","folk metal","folk metal","folk metal","folk metal","folk metal","folk metal","folk metal"];var columns$1=["danceability","popularity","energy","acousticness","instrumentalness","liveness","valence"];var values$1=[[0.0966,0.19,0.88,0.000038799999999999994,662,105,256],[0.24,0.14,996,0.0000134,0.00266,179,147],[285,0.04,0.0945,835,927,0.0898,0.0432],[152,0.13,983,0.000020600000000000003,0.0053100000000000005,953,0.0482],[481,0.18,281,937,0.91,226,259],[208,0.26,934,0.00000124,0.0017399999999999998,928,0.0347],[153,0.27,778,0.00893,903,403,112],[327,0.06,102,863,863,456,0.0397],[351,0.11,839,0.000625,0.0813,203,0.0372],[277,0.03,993,0.0030399999999999997,428,179,141],[103,0.03,997,0.00728,0.0185,385,0.0487],[0.46,0.19,975,0.00000343,639,309,242],[242,0.04,718,0.0000136,923,134,416],[276,0.04,994,0.0033399999999999997,417,406,149],[303,0,116,815,955,377,0.0601],[284,0.05,633,0.00000109,0.0195,0.0949,0.0349],[332,0.12,813,0.000022,812,203,0.04],[224,0.17,946,0.000007699999999999999,861,216,374],[0.22,0.23,971,0.00000732,198,0.0852,346],[175,0.16,957,0.000149,0.0234,722,285],[377,0.18,717,0.00021899999999999998,831,121,302],[187,0.23,912,0.00000442,0.0000345,558,176],[322,0.04,995,0.000164,0.0018800000000000002,323,104],[298,0.29,996,0.0000218,218,0.0947,0.0649],[148,0.26,998,0.0000031,184,184,0.0602],[378,0.06,0.92,0.0000261,845,0.0849,495],[444,0.03,0.99,0.000014800000000000002,374,0.0392,326],[521,0.24,991,0.000207,597,0.0707,0.17],[397,0.29,987,0.00023199999999999997,0.00282,145,213],[0.21,0.05,0.87,0.00162,667,342,0.0396],[397,0.28,987,0.00023199999999999997,0.00282,145,213],[164,0.14,957,609,212,855,0.0442],[319,0.18,969,0.0000519,506,0.0874,0.0379],[431,0.18,903,0.0000261,0.0362,273,389],[0.13,0.16,943,0.0000017,0.000174,299,0.18],[286,0.18,824,0.00109,572,0.16,544],[311,0.21,945,0.0000123,286,0.0915,386],[429,0.23,941,0.00032,728,0.0882,342],[173,0.12,0.98,0.00000668,404,175,104],[226,0.41,978,0.0000036000000000000003,533,0.0436,252],[379,0.25,974,0.00000651,233,0.0203,225],[303,0.21,882,0.000327,0.0037799999999999995,134,535],[244,0.34,987,0.00005660000000000001,779,0.0664,256],[167,0.07,454,0.0053100000000000005,0.0347,108,215],[447,0.09,941,0.00006159999999999999,155,0.0935,577],[437,0.1,886,0.000039899999999999994,0.0248,122,268],[335,0.22,944,0.00243,419,103,436],[154,0.16,938,0.0994,0.52,355,167],[181,0.04,974,0.00000634,308,255,128],[318,0.33,947,0.00000135,909,0.0694,311],[224,0.21,963,0.0000019,164,368,201],[321,0.15,955,0.0000416,898,973,196],[0.27,0.07,485,0.0031899999999999997,0.0574,199,261],[148,0.19,998,0.0000031,184,184,0.0602],[428,0.38,995,0.000020600000000000003,429,305,135],[412,0.22,943,0.0000923,0.0956,166,159],[261,0.23,961,0.000032200000000000003,0.0543,155,364],[256,0.19,709,0.000136,0.2,183,476],[258,0.19,993,0.00022400000000000002,631,125,122],[268,0.28,962,0.000169,325,0.0599,193],[0.34,0.23,936,3,0.0455,445,381],[368,0.14,883,0.000453,0.87,351,107],[179,0.02,972,0.00000715,0.38,0.2,144],[338,0.24,855,0.00000716,184,118,386],[311,0.24,945,0.0000123,286,0.0915,386],[239,0.09,508,0.00375,0.0334,258,227],[195,0.14,955,437,769,903,234],[209,0.1,0.87,0.0216,878,482,0.0929],[447,0.18,941,0.00006159999999999999,155,0.0935,577],[343,0.32,942,0.000026300000000000002,0.0136,0.0701,366],[211,0.09,988,0.0000384,0.0481,318,0.0393],[336,0.24,688,0.0014199999999999998,0.000472,158,245],[503,0.44,923,0.00119,0.00047400000000000003,117,519],[402,0.18,686,0.008440000000000001,453,0.92,144],[252,0.17,729,0.0017,0.0458,0.0515,0.17],[496,0.19,952,0.00000417,611,281,173],[524,0.31,717,0.005379999999999999,209,0.0922,381],[457,0.22,718,0.000021899999999999997,0.0214,385,162],[234,0.11,728,0.0791,0.0006219999999999999,0.0557,161],[363,0.29,915,0.0052899999999999996,0.0563,0.3,339],[402,0.13,817,0.0012699999999999999,0,0.11,0.57],[514,0.28,958,0.007809999999999999,0.00000892,0.0827,341],[495,0.05,873,0.0000115,0.00439,492,573],[451,0.17,923,0.000524,0.00728,0.0968,539],[526,0.06,728,0.000133,841,178,172],[434,0.18,865,0.000132,0.0873,279,214],[426,0.05,136,918,0.00073,0.0992,106],[425,0.39,677,165,0.00000435,158,197],[524,0.27,342,938,0.0010199999999999999,132,165],[504,0.21,542,254,0.00829,244,138],[451,0.3,898,0.000027600000000000003,0.00507,268,179],[334,0.32,531,0.00183,0.00294,0.31,102],[531,0.24,0.66,0.000417,0.000932,267,0.0406],[252,0.06,718,0.0019100000000000002,0.0561,0.0721,147],[459,0.19,643,0.0026,569,159,0.0563],[373,0.22,912,0.00011899999999999999,0.00359,395,61],[441,0.26,828,0.000132,763,0.0875,338],[771,0.4,457,539,0.00031099999999999997,104,576],[738,0.17,0.87,0.0544,905,119,389],[352,0.39,895,0.03,0.00000181,105,638],[177,0.37,0.0040100000000000005,953,868,244,159],[631,0.17,732,0.00292,0.00072,168,773],[289,0.23,0.73,644,732,373,284],[448,0.04,903,325,0,398,225],[588,0.04,676,0.0294,0.000118,846,515],[0.8,0.25,764,0.0009480000000000001,0.000739,0.0596,0.58],[304,0.16,927,0.0000123,278,294,155],[163,0.23,374,591,409,486,319],[668,0.07,866,0.0015300000000000001,915,403,861],[785,0.11,711,155,905,0.0669,964],[734,0.12,889,0.000178,803,328,355],[635,0.44,832,0.0238,384,223,693],[0.5,0.14,982,0.009859999999999999,0.9,196,0.61],[351,0.03,345,625,0.19,431,251],[0.63,0.38,865,0.0009660000000000001,607,817,742],[682,0.34,607,0.000024,384,178,509],[407,0.06,966,0.0000124,0.86,356,0.15],[303,0.12,948,0.0000118,0.32,341,134],[356,0.02,338,658,0.0846,391,241],[685,0.19,494,117,0.00366,0.0915,959],[664,0.26,961,0.000984,934,191,856],[652,0.34,983,0.000729,0.00108,347,428],[469,0.27,812,0.00008690000000000001,0.0000199,337,422],[0.0642,0.2,304,303,927,76,0.0321],[706,0.17,967,0.000737,0.00000422,313,716],[199,0.65,622,0.00745,794,204,142],[503,0.18,936,0.00000516,593,0.15,0.24],[414,0.28,933,0.000338,0.00619,0.26,433],[595,0.29,868,0.000319,292,739,373],[524,0.4,944,0.00513,0.0269,236,532],[661,0.32,0.78,0.00744,782,126,804],[513,0.25,965,0.0000301,281,525,345],[562,0.36,995,0.0135,0.0268,0.0728,197],[537,0.2,774,0.00015800000000000002,164,544,474],[613,0.24,662,0.0022,817,85,0.0547],[623,0.16,0.84,0.00031,0.00225,208,484],[0.52,0.23,931,0.000041200000000000005,736,0.0857,395],[531,0.09,928,0.000797,621,138,212],[496,0.08,696,0.00279,313,312,185],[484,0.16,767,0.00158,765,111,0.0472],[512,0.47,952,0.00385,0.07,211,0.51],[421,0.24,965,0.00000693,0.0251,219,637],[526,0.29,893,0.000408,0.00000614,0.0603,0.61],[465,0.43,829,0.000154,0.00445,324,255],[393,0.15,833,0.00032900000000000003,0.00318,214,523],[171,0.28,433,0.0539,868,104,0.0335],[449,0.39,814,0.00897,399,112,199],[605,0.38,842,0.000314,0.00158,257,0.46],[333,0.27,666,504,971,394,439],[466,0.22,987,0.0008449999999999999,0.00000262,719,255],[208,0.16,489,0.00941,951,0.0649,114],[0.46,0.35,772,0.00705,254,116,196],[437,0.3,816,0.0000256,0.00007979999999999999,109,326],[482,0.31,992,0.0000348,0.0605,123,434],[565,0.63,949,0.000046399999999999996,0.0000107,0.0822,0.63],[252,0.44,596,0.00462,0.000283,112,0.19],[0.49,0.14,866,0.00161,643,424,535],[496,0.31,696,0.00279,313,312,185],[589,0.31,886,3,0.007809999999999999,434,462],[514,0.32,982,0.0043100000000000005,0.0000501,968,227],[589,0.52,696,0.0000865,0.0000343,0.0779,933],[477,0.23,0.97,0.000121,0.0107,308,675],[486,0.33,841,0.00473,0.000825,0.0708,157],[562,0.25,838,0.000547,88,416,359],[629,0.07,971,0.00283,0.0164,0.0961,432],[389,0.23,927,0.0207,0.00307,943,217],[418,0.22,386,0.0323,192,347,0.0378],[434,0.41,962,0.00558,301,223,286],[551,0.39,976,0.00257,0.00019099999999999998,328,842],[518,0.36,0.95,0.00419,0.0414,221,523],[474,0.33,895,0.00041799999999999997,0.0508,442,271],[639,0.27,882,0.000346,541,0.0803,353],[441,0.22,821,0.0000249,0.0000735,0.11,321],[526,0.23,985,0.000618,389,294,441],[444,0.15,706,0.0000312,793,109,432],[564,0,837,0.00047599999999999997,212,354,413],[485,0.58,907,0.00302,0.00617,326,0.46],[592,0.24,983,0.00114,0,258,0.28],[0.4,0.35,853,0.000363,0.00198,241,403],[478,0.2,948,0.0185,0,165,556],[403,0.16,941,0.0037799999999999995,287,876,0.0909],[545,0.49,906,0.000194,0.0162,303,233],[461,0.22,913,0.000696,771,0.0911,417],[728,0.17,965,0.00822,908,164,911],[529,0.25,946,0.00108,0.0613,102,0.48],[346,0.39,815,0.008490000000000001,878,117,154],[349,0.35,955,0.00247,0,0.29,536],[177,0.05,764,0.00042,0.00011499999999999999,851,253],[336,0.34,924,0.0747,0.0022600000000000003,137,0.4],[465,0.43,973,0.000151,0.000685,241,674],[0.61,0.6,824,0.0136,0.00000175,0.0606,822],[435,0.59,987,0.000195,0.0847,268,0.0993],[301,0.56,813,0.000674,0.0006309999999999999,197,234],[344,0.37,751,0.00441,0.0285,133,567],[298,0.23,693,0.0010400000000000001,134,131,251],[362,0.35,976,0.000303,0.0000368,0.0496,545],[224,0.21,964,106,0.00010400000000000001,314,358],[0.34,0.27,621,0.00000733,0.0794,0.11,317],[304,0.33,742,0.00392,306,231,249],[214,0.18,992,0.0000627,524,0.0769,209],[693,0.2,807,0.0194,0.00000267,137,0.95],[208,0.25,808,0.00000538,0.00765,0.21,291],[579,0.77,824,0.00206,0.00903,59,0.64],[199,0.26,988,79,74,323,197],[0.35,0.22,991,0.0213,0.000718,126,456],[387,0.24,988,0.00299,0.000589,0.0541,271],[0.27,0.36,983,0.0017699999999999999,0.00000388,333,321],[0.13,0.33,957,0.000843,0.0966,0.52,523],[0.41,0.3,0.98,0.008440000000000001,0.0439,476,0.0956],[326,0.38,979,0.00000448,414,676,188],[0.51,0.27,966,0.00116,0.0009289999999999999,183,367],[507,0.1,479,0.0388,0,118,114],[379,0.4,991,0.0000639,0.0011300000000000001,0.8,0.0562],[265,0.52,937,0.00227,526,161,531],[287,0.26,996,0.0438,0.000011400000000000001,496,152],[0.0777,0.27,953,0.0009570000000000001,0.0488,718,132],[333,0.4,944,181,0.000664,349,398],[321,0.19,0.95,0.00223,0,253,523],[493,0.11,698,0.0141,0,119,277],[254,0.54,985,0.000052600000000000005,363,0.0558,0.0485],[274,0.4,964,0.0000201,0.0337,979,115],[373,0.4,0.92,0.000026300000000000002,0.0188,989,126],[311,0.41,874,0.006959999999999999,0.0000117,0.0861,492],[403,0.36,988,0.000048200000000000006,0.0141,266,106],[371,0.29,934,0.000997,0.00031299999999999996,951,115],[431,0.4,947,0.000779,0.00025299999999999997,356,363],[437,0.53,948,0.0007160000000000001,0.000261,146,371],[292,0.43,0.94,0.00263,0.0018100000000000002,984,215],[357,0.24,651,0.000138,0.006670000000000001,375,685],[234,0.24,931,0.0000134,919,134,417],[487,0.64,944,0.000135,601,0.0905,376],[251,0.23,956,0.00927,0.000027000000000000002,138,352],[533,0.5,983,0.00118,0.0000313,378,393],[311,0.22,765,0.0000785,0.78,148,459],[497,0.5,904,0.000389,0.00122,0.0939,425],[356,0.21,781,0.0867,0.009009999999999999,309,374],[449,0.3,647,0.0119,0.000041700000000000004,0.0907,124],[201,0.32,939,0.0011300000000000001,603,173,678],[239,0.34,0.96,0.00215,185,855,269],[668,0.29,767,0.008579999999999999,0.00021899999999999998,378,829],[451,0.23,932,0.0255,0.000105,0.0983,168],[229,0.05,786,4,0.000133,954,171],[439,0.05,0.88,0.000503,221,537,611],[323,0.52,914,0.00265,0.000381,953,183],[212,0.19,889,0.0020800000000000003,0.00224,978,119],[322,0.38,972,0.00000559,675,954,0.0375],[0.22,0.29,952,0.0007059999999999999,0.00020299999999999997,0.37,0.35],[211,0.34,845,12,0.00507,148,0.16],[278,0.49,0.97,0.000144,0.0481,966,142],[292,0.2,987,0.000513,0.00000553,984,0.24],[235,0.08,782,0.000731,0.0015199999999999999,134,273],[418,0.17,843,0.0912,0.00000801,0.0943,0.33],[221,0.5,988,0.000049,0.0104,0.27,0.0894],[321,0.27,0.95,0.00223,0,253,523],[273,0.2,979,0.00000258,736,354,277],[444,0.7,703,0.00112,0.0761,127,425],[291,0.26,873,0.0736,0.00205,176,456],[349,0.14,976,0.00021600000000000002,0.0000347,949,246],[235,0.11,998,0.0000312,0.0107,0.18,484],[295,0.23,991,0.0634,712,306,295],[271,0.59,985,0.0005679999999999999,0.00112,0.0809,351],[341,0.5,982,0.000157,0.00246,412,81],[496,0.32,0.62,0.00386,0.00000147,114,275],[232,0.15,998,0.00003289999999999999,0.0123,142,508],[239,0.47,976,0.000109,362,954,123],[399,0.3,988,0.00435,0.00000137,592,211],[403,0.17,847,0.0722,0.0000198,108,323],[0.39,0.31,947,0.00515,0.000025300000000000002,538,171],[271,0.39,0.74,0.00395,0.0289,0.0828,346],[448,0.17,0.94,0.0000699,173,102,339],[265,0.43,959,0.000047600000000000005,0.14,977,0.0898],[212,0.18,0.84,0.0141,0.0059700000000000005,147,174],[217,0.18,913,0.000354,0.0342,0.0636,0.59],[349,0.34,864,0.000433,891,173,499],[237,0.17,764,0.000824,0.00434,183,276],[446,0.28,931,0.006640000000000001,194,199,517],[212,0.25,0.84,0.0141,0.0059700000000000005,147,174],[403,0.23,978,0.000135,0.0000353,314,119],[249,0.2,923,0.00322,0.000557,116,116],[257,0.3,915,0.000549,0,153,0.51],[496,0.38,572,0.0126,0,0.1,252],[396,0.12,948,0.00266,0.0000984,358,344],[284,0.33,942,0.0126,0.00433,351,183],[578,0.39,815,0.0314,0.00011399999999999999,114,518],[371,0.3,879,0.00000388,0.00000862,322,491],[339,0.51,945,0.0000878,0.0000151,0.2,476],[579,0.43,914,0.0000984,0.000901,153,512],[475,0.18,934,0.000768,0.0000369,123,381],[0.4,0.31,987,0.0000312,617,146,486],[535,0.17,985,0.0000369,0.0628,67,159],[232,0.17,946,0.0000295,0.0318,322,432],[0.51,0.34,993,0.000022,0.0224,0.22,372],[401,0.16,849,0.00020299999999999997,0.0000132,155,444],[435,0.2,965,0.00010400000000000001,0.00000147,359,586],[245,0.24,876,0.0000132,102,648,343],[584,0.31,759,0.000459,0.00000388,102,71],[0.54,0.19,988,0.000043700000000000005,66,0.0578,149],[489,0.17,956,0.0000502,29,252,506],[493,0.22,993,0.0007700000000000001,0.0000359,252,207],[743,0.14,115,0.49,0,284,765],[116,0.08,742,0.00011399999999999999,289,0.95,0.63],[275,0.07,977,0.00575,0.00027400000000000005,955,236],[396,0.17,939,47,0.000429,205,557],[222,0.15,945,0.0000037000000000000006,901,0.18,229],[196,0.08,835,0.0000046,821,113,214],[493,0.27,993,0.0007700000000000001,0.0000359,252,207],[294,0.13,937,0.0000686,0.00471,342,307],[542,0.23,996,0.0008810000000000001,0,379,169]];var statistics$1={danceability:{count:308,mean:351.9369756494,std:177.941736142,min:0.0642,"25%":238.5,"50%":351,"75%":478.75,max:785},popularity:{count:308,mean:0.2498051948,std:0.1373408266,min:0,"25%":0.16,"50%":0.23,"75%":0.33,max:0.77},energy:{count:308,mean:774.0679821753,std:296.1412424319,min:0.00401,"25%":718,"50%":906.5,"75%":963.25,max:998},acousticness:{count:308,mean:40.9806956957,std:163.1451038417,min:0.00000109,"25%":0.00006035,"50%":0.0007525,"75%":0.00672,max:953},instrumentalness:{count:308,mean:204.907109477,std:313.3436522636,min:0,"25%":0.00067975,"50%":0.03445,"75%":365.75,max:971},liveness:{count:308,mean:252.9452220779,std:262.4485181884,min:0.0203,"25%":44.4875,"50%":179,"75%":347.5,max:989},valence:{count:308,mean:280.7883938312,std:219.1640342526,min:0.0321,"25%":123.75,"50%":251,"75%":422.75,max:964}};var spotify = {names:names$1,labels:labels$1,columns:columns$1,values:values$1,statistics:statistics$1};

var spotify$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    names: names$1,
    labels: labels$1,
    columns: columns$1,
    values: values$1,
    statistics: statistics$1,
    'default': spotify
});

var names=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,832,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976,977,978,979,980,981,982,983,984,985,986,987,988,989,990,991,992,993,994,995,996,997,998,999,1000,1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1016,1017,1018,1019,1020,1021,1022,1023,1024,1025,1026,1027,1028,1029,1030,1031,1032,1033,1034,1035,1036,1037,1038,1039,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1058,1059,1060,1061,1062,1063,1064,1065,1066,1067,1068,1069,1070,1071,1072,1073,1074,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103,1104,1105,1106,1107,1108,1109,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1120,1121,1122,1123,1124,1125,1126,1127,1128,1129,1130,1131,1132,1133,1134,1135,1136,1137,1138,1139,1140,1141,1142,1143,1144,1145,1146,1147,1148,1149,1150,1151,1152,1153,1154,1155,1156,1157,1158,1159,1160,1161,1162,1163,1164,1165,1166,1167,1168,1169,1170,1171,1172,1173,1174,1175,1176,1177,1178,1179,1180,1181,1182,1183,1184,1185,1186,1187,1188,1189,1190,1191,1192,1193,1194,1195,1196,1197,1198,1199];var labels=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10];var columns=["x","y","z"];var values=[[354.353,59.583,25.541],[355.459,122.502,45.178],[359.823,55.527,22.241],[360.121,53.385,22.519],[362.306,124.112,51.508],[362.623,122.319,44.728],[363.843,64.337,21.555],[364.286,69.572,21.051],[364.476,126.986,51.558],[366.852,27.708,22.695],[371.849,56.09,14.62],[372.03,57.295,15.459],[373.438,43.106,16.058],[373.688,119.783,35.191],[375.985,34.369,17.926],[378.71,81.16,14.5],[379.469,129.094,52.416],[379.845,105.958,22.279],[380.772,49.885,13.777],[383.903,123.274,37.927],[383.934,130.246,46.63],[389.241,93.401,15.352],[390.074,78.891,13.047],[391.72,129.545,51.298],[392.01,73.567,14.164],[393.125,131.446,54.835],[394.645,50.778,12.397],[394.795,129.578,42.795],[395.658,100.036,14.609],[395.832,100.381,14.591],[396.046,115.856,24.576],[397.339,103.288,17],[397.648,82.606,11.272],[398.221,95.162,13.147],[402.134,132.19,56.155],[406.357,118.833,25.78],[406.616,124.073,34.317],[409.853,76.051,9.889],[410.68,79.499,10.019],[415.588,113.356,78.244],[416.705,116.919,70.276],[417.45,124.172,36.812],[419.873,113.574,26.125],[420.29,124.023,69.898],[420.359,81.692,11.35],[420.42,86.531,12.662],[420.788,84.461,11.773],[422.569,97.365,16.122],[423.18,114.654,79.764],[425.167,128.447,78.845],[425.631,126.095,70.405],[426.471,124.768,64.651],[427.534,123.779,79.755],[428.33,128.991,83.211],[429.292,96.764,140.609],[429.364,107.745,23.136],[430.657,105.731,24.419],[430.95,123.264,68.878],[431.167,87.232,13.731],[431.208,100.579,21.053],[431.329,128.067,76.194],[431.399,114.906,69.995],[431.491,125.977,72.387],[431.574,96.006,18.595],[433.268,123.058,65.093],[433.652,129.991,76.062],[434.303,119.663,39.684],[434.318,130.289,75.931],[435.454,116.928,69.786],[435.528,110.925,127.056],[435.579,119.892,78.288],[435.649,109.348,79.654],[435.745,121.515,88.092],[435.924,122.617,48.265],[436.158,122.22,47.573],[436.392,118.812,37.67],[436.477,104.707,75.533],[437.245,96.162,137.681],[437.431,123.604,60.153],[438.459,117.008,80.622],[438.578,120.52,96.904],[438.684,121.887,92.275],[438.801,93.613,19.564],[439.029,108.977,28.73],[439.255,118.705,104.14],[440.145,119.045,83.113],[440.695,98.877,22.491],[441.191,89.323,139.957],[441.25,85.791,14.972],[441.833,116.011,70.434],[442.914,114.101,108.861],[443.33,118.497,65.576],[443.518,126.466,74.857],[444.366,125.088,73.591],[444.454,116.102,45.955],[444.914,124.999,73.83],[446.091,118.096,97.765],[446.32,108.117,37.591],[446.418,112.587,69.406],[446.561,103.085,70.042],[447.296,100.826,127.992],[447.379,117.234,54.135],[447.596,99.127,129.413],[448.406,104.062,33.813],[449.008,102.095,31.648],[449.634,98.988,29.41],[450.125,98.163,72.331],[452.681,122.605,75.442],[453.142,114.327,93.005],[454.435,113.988,74.415],[455.156,104.69,40.915],[455.806,114.404,77.015],[455.868,113.568,57.391],[456.267,92.907,126.052],[457.305,107.806,80.309],[457.732,106.54,82.02],[457.816,113.342,73.902],[457.894,107.921,105.22],[458.229,114.887,75.351],[459.045,94.898,120.775],[459.254,116.189,76.604],[460.066,109.491,79.619],[460.569,108.84,69.285],[461.95,92.466,36.902],[464.77,111.782,75.947],[466.344,104.893,79.541],[466.545,106.845,79.988],[467.705,107.101,69.15],[468.342,100.115,52.13],[470.518,107.071,73.479],[475.889,43.567,142.015],[477.015,44.943,147.713],[477.614,85.003,124.663],[479.374,65.086,139.898],[479.378,88.958,122.444],[480.505,80.876,131.561],[480.914,97.615,95.685],[483.147,80.128,114.64],[485.037,84.136,124.033],[485.186,82.113,129.894],[486.749,48.092,137.739],[488.488,67.066,140.031],[490.643,52.364,136.161],[491.216,53.963,135.67],[249.089,-170.062,114.667],[255.729,-160.912,100.235],[255.885,-161.085,111.705],[257.346,-156.339,98.755],[257.604,-158.037,110.227],[257.794,-163.745,88.652],[258.151,-169.225,83.891],[258.469,-155.795,101.619],[259.845,-153.118,97.26],[263.445,-164.012,85.522],[263.467,-156.427,103.682],[263.518,-160.248,109.436],[264.082,-134.478,106.777],[264.218,-145.438,93.042],[264.977,-153.007,88.869],[265.055,-170.489,121.479],[265.829,-171.055,122.253],[265.901,-161.529,89.305],[266.557,-171.04,117.7],[266.861,-138.697,111.095],[267.263,-157.206,113.654],[270.585,-139.415,109.982],[270.769,-127.391,87.47],[271.226,-115.051,98.89],[271.297,-166.429,81.415],[271.471,-113.972,116.199],[272.093,-124.37,113.56],[272.87,-129.549,109.27],[273.022,-136.385,111.969],[273.715,-120.397,113.585],[273.739,-146.56,86.577],[273.827,-116.553,86.517],[274.072,-133.517,99.042],[274.176,-124.639,98.738],[274.487,-98.419,110.18],[276.485,-122.7,87.634],[276.486,-117.762,112.462],[276.651,-108.33,113.916],[276.68,-114.098,113.63],[277.112,-121.911,102.091],[278.007,-125.97,88.561],[278.041,-127.059,91.53],[279.231,-124.658,95.641],[280.927,-88.277,100.728],[284.248,-74.06,101.677],[311.221,-169.442,34.356],[313.322,-168.532,50.247],[315.725,-166.812,37.045],[315.806,-170.804,51.863],[316.788,-166.793,50.876],[317.654,-168.261,34.334],[318.112,-78.366,50.336],[318.929,-165.503,38.499],[322.118,-72.82,46.518],[324.244,-82.027,54.711],[324.827,-74.624,37.945],[325.654,-115.387,59.705],[325.829,-168.795,60.946],[326.1,-166.05,59.425],[326.347,-165.697,65.172],[326.39,-117.053,37.051],[327.015,-167.301,65.045],[327.602,-164.59,47.489],[328.325,-143.868,46.693],[328.589,-149.539,46.861],[328.66,-162.441,53.826],[329.34,-137.739,53.086],[329.669,-113.433,52.031],[330.128,-62.651,42.611],[330.524,-151.377,36.963],[330.827,-167.732,26.081],[331.631,-159.972,62.37],[331.634,-95.128,38.552],[332.751,-151.351,51.591],[333.183,-128.212,58.376],[334.06,-161.131,48.908],[334.449,-137.19,54.495],[334.806,-119.93,60.516],[334.859,-147.129,44.621],[335.221,-144.981,60.188],[335.354,-128.255,47.626],[336.587,-132.143,59.13],[336.744,-120.344,39.162],[336.793,-148.487,61.6],[337.14,-120.839,41.661],[337.844,-146.495,55.391],[337.973,-136.486,40.96],[338.332,-125.091,36.09],[338.381,-125.946,36.138],[339.45,-138.543,46.903],[340.053,-131.019,56.025],[340.23,-143.664,58.296],[341.134,-149.024,36.023],[341.424,-139.787,62.063],[342.124,-151.764,58.707],[342.395,-136.704,37.75],[342.539,-133.432,58.853],[343.181,-136.662,36.357],[344.336,-155.134,59.409],[63.13,92.752,11.44],[65.138,106.429,46.867],[65.515,90.501,142.013],[66.09,87.486,135.328],[66.618,83.822,143.842],[67.77,80.533,-10.63],[68.222,96.994,129.09],[69.406,90.553,9.662],[69.898,86.937,-9.066],[70.433,102.137,16.257],[72.712,75.351,-2.868],[72.952,71.457,160.312],[75.036,65.453,-12.28],[77.703,81.029,-2.106],[79.496,82.604,-9.382],[80.023,71.554,149.798],[81.745,59.995,166.551],[83.202,66.942,165.467],[85.148,73.021,158.517],[87.201,66.82,154.847],[90.977,53.335,169.04],[94.229,55.861,-10.24],[95.899,39.525,-13.196],[97.335,43.265,-21.748],[99.032,51.903,-20.891],[99.134,54.21,-19.491],[100.779,41.618,-7.672],[107.633,45.468,-17.265],[112.878,40.821,154.891],[119.185,31.379,148.119],[120.036,27.291,3.303],[124.548,36.524,157.364],[126.815,33.805,159.394],[128.923,21.846,-7.627],[132.371,24.82,12.417],[141.587,19.065,136.736],[144.336,23.195,131.328],[144.737,23.261,25.186],[144.977,30.654,139.052],[148.602,24.173,29.318],[149.83,19.834,30.136],[155.016,23.351,14.745],[157.009,21.153,138.81],[157.434,17.003,33.601],[158.672,20.651,136.944],[159.052,26.107,137.947],[163.105,25.545,23.467],[164.995,25.779,25.348],[166.662,21.875,43.465],[168.507,37.439,108.122],[171.952,28.021,125.032],[175.499,25.631,48.228],[176.705,27.465,110.721],[176.942,59.777,60.126],[178.981,65.253,62.721],[178.997,59.527,58.056],[179.575,53.821,64.595],[179.752,55.317,92.787],[180.627,67.855,62.18],[181.807,53.431,69.734],[182.509,57.71,56.342],[184.391,56.548,77.86],[184.453,52.614,69.051],[186.715,42.156,51.376],[187.291,50.756,74.014],[187.475,50.413,86.562],[187.584,53.031,78.85],[187.965,55.886,53.428],[188.977,48.326,53.622],[189.106,64.227,83.75],[189.924,57.091,77.905],[192.89,51.113,59.931],[194.845,50.645,91.054],[198.111,63.021,74.335],[199.902,62.445,68.794],[288.911,69.232,124.172],[292.762,82.134,122.612],[297.169,71.618,119.137],[298.417,81.039,120.574],[299.351,80.689,121.715],[299.711,77.348,118.619],[302.395,123.146,102.646],[305.736,109.455,119.182],[306.822,94.636,114.25],[307.599,127.34,101.402],[308.383,61.032,116.196],[308.776,111.914,122.727],[309.067,103.704,92.486],[310.234,72.462,116.598],[310.4,61.067,118.035],[310.876,128.956,101.077],[310.944,111.742,82.104],[311.289,117.429,116.693],[311.754,98.054,88.649],[313.686,77.822,118.901],[315.377,85.656,119.307],[316.89,80.183,122.848],[317.242,112.294,84.801],[318.15,66.955,109.473],[318.209,95.961,100.262],[318.278,88.781,101.613],[318.457,87.825,115.354],[318.582,76.161,112.666],[318.737,96.565,77.749],[318.888,79.308,126.613],[319.008,110.576,106.955],[319.052,111.914,92.285],[319.325,91.556,105.881],[321.145,107.648,106.863],[321.4,109.686,109.177],[321.448,66.008,128.286],[321.741,95.021,120.798],[322.114,98.681,110.059],[322.444,68.877,130.399],[322.622,106.67,91.94],[322.74,100.48,86.367],[323.157,92.437,126.976],[323.302,102.196,91.635],[323.423,118.743,115.111],[323.828,132.236,96.277],[324.394,112.706,111.001],[324.664,103.529,109.948],[327.464,73.012,112.901],[327.614,91.273,131.845],[327.866,42.288,116.76],[328.191,80.44,136.049],[328.957,110.257,89.024],[330.871,106.805,126.311],[331.134,106.6,90.032],[332.3,22.379,118.214],[332.673,108.154,103.596],[333.648,88.805,113.205],[333.711,105.003,107.479],[335.551,27.471,122.687],[335.761,83.493,148.301],[335.805,85.577,119.544],[337.111,54.622,125.324],[337.166,20.599,118.952],[337.394,38.942,124.508],[340.414,88.162,140.296],[340.841,83.447,120.244],[341.208,88.292,120.711],[341.364,101.24,116.345],[341.809,26.587,122.415],[342.419,55.425,126.796],[342.758,106.648,111.817],[343.515,88.762,119.081],[344.126,55.332,125.746],[344.466,16.142,124.258],[346.196,17.656,122.942],[347.292,17.839,123.506],[348.642,78.977,128.14],[349.236,41.205,128.503],[349.51,23.88,126.087],[350.26,87.84,127.652],[353.787,11.366,121.976],[357.101,27.432,130.418],[358.861,104.252,125.994],[358.965,105.25,125.581],[360.176,52.696,133.493],[360.356,66.25,132.672],[362.091,56.333,133.394],[366.014,104.702,123.592],[369.164,102.931,126.99],[369.804,75.362,136.159],[370.577,74.304,136.192],[372.29,38.335,138.252],[375.332,45.144,140.138],[382.176,50.832,142.742],[386.978,94.738,136.251],[387.189,75.097,142.576],[387.439,70.55,142.162],[388.366,87.06,139.346],[395.143,98.512,139.965],[398.836,91.142,143.595],[403.161,66.268,145.667],[407.049,81.976,146.063],[414.926,80.163,147.204],[417.864,93.026,143.954],[418.905,100.136,139.882],[418.986,102.406,139.315],[320.47,126.231,77.663],[324.268,101.907,71.16],[324.795,104.172,67.997],[324.98,132.401,75.494],[326.012,107.322,66.438],[326.518,123.192,75.15],[327.497,104.395,62.074],[327.713,111.13,67.609],[330.889,106.141,60.358],[333.03,152.901,75.185],[333.109,143.202,77.811],[333.406,139.402,78.01],[333.604,124.428,74.325],[333.717,104.392,73.978],[333.879,112.371,81.447],[334.864,119.24,63.943],[335.001,114.39,70.872],[335.321,121.57,75.007],[335.726,110.268,65.161],[336.078,116.592,64.361],[337.366,146.15,74.127],[337.463,111.378,96.901],[338.556,113.119,53.732],[339.028,113.356,68.531],[339.915,125.161,73.902],[341.194,116.04,100.171],[341.863,114.23,46.311],[341.9,106.866,108.647],[343.138,128.894,75.507],[343.438,113.27,69.108],[344.121,107.461,76.757],[344.126,121.002,58.106],[344.713,119.978,87.621],[344.75,120.053,86.978],[345.308,119.256,88.697],[345.794,145.425,75.834],[346.543,116.796,50.136],[347.154,112.098,72.018],[347.78,140.021,79.641],[348.642,118.286,45.356],[349.792,110.833,72.857],[350.816,124.012,96.77],[351.475,128.443,94.429],[351.506,124.057,86.387],[351.73,123.288,83.536],[356.246,126.412,51.977],[356.8,127.96,71.862],[357.123,123.511,68.817],[357.693,135.999,75.544],[358.738,150.969,79.155],[358.899,127.55,57.918],[359.119,130.939,69.295],[359.361,122.041,81.744],[359.486,129.475,97.988],[359.716,137.144,78.358],[360.906,129.318,64.556],[361.143,122.63,70.333],[362.097,121.344,109.36],[362.474,124.728,104.516],[363.336,152.925,77.145],[363.836,114.225,117.229],[364.15,126.44,67.726],[365.413,126.355,63.441],[365.444,141.232,75.973],[365.734,122.392,70.018],[365.764,128.592,64.37],[367.348,129.776,91.333],[368.35,128.009,90.451],[368.546,147.191,78.553],[369.414,128.799,92.134],[371.445,133.062,93.052],[372.294,131.091,100.127],[372.671,123.895,114.672],[373.333,154.898,78.285],[375.248,116.667,80.722],[375.508,117.422,122.717],[376.713,150.217,75.521],[376.904,131.257,81.512],[377.19,130.924,66.675],[377.245,109.538,126.956],[377.575,111.17,127.397],[378.115,133.234,74.899],[378.699,122.017,80.76],[379.959,131.213,92.025],[380.811,131.2,65.433],[381.726,117.149,80.475],[381.729,125.759,67.141],[382.024,127.06,66.368],[382.121,117.141,80.407],[384.059,147.401,77.411],[384.616,123.634,83.532],[384.952,140.703,77.507],[385.091,117.182,123.821],[385.471,119.645,80.568],[386.275,124.277,120.15],[386.429,128.604,86.75],[386.998,136.281,74.911],[387.088,120.029,120.469],[387.48,132.011,72.573],[387.535,123.32,70.225],[387.959,135.086,84.211],[389.498,138.325,74.814],[389.55,139.786,75.038],[389.709,130.216,101.332],[389.74,134.122,65.904],[390.649,140.52,75.19],[391.545,131.575,60.629],[392.941,114.574,74.945],[395.139,122.479,80.667],[396.142,121.061,70.983],[396.174,132.262,74.671],[396.411,124.366,119.217],[398.21,132.388,56.398],[399.57,131.368,97.206],[399.819,130.803,89.363],[400.244,131.432,70.653],[400.445,116.404,75.329],[400.607,124.306,68.798],[401.551,124.767,68.166],[401.926,114.133,74.572],[403.293,125.152,84.139],[403.515,130.247,64.605],[404.078,133.963,76.947],[405.259,133.967,75.113],[406.772,131.453,84.439],[406.998,131.235,65.752],[407.87,114.856,78.743],[407.962,130.673,57.02],[408.417,126.401,80.658],[411.299,130.168,73.518],[411.546,128.505,99.091],[412.792,129.886,81.635],[414.592,133.872,75.709],[415.469,126.235,69.661],[415.686,123.654,119.113],[415.823,122.532,118.696],[417.736,124.477,80.241],[420.914,126.636,99.023],[425.589,123.397,112.193],[426.718,135.696,76.175],[426.955,137.491,75.568],[274.17,26.68,77.96],[278.375,20.24,77.293],[279.327,19.669,77.283],[279.556,29.814,78.015],[281.655,32.503,112.329],[282.242,26.506,113.853],[282.322,34.536,75.012],[282.56,39.221,35.702],[282.598,23.465,73.169],[283.204,40.575,124.837],[283.229,13.044,122.38],[284.58,-58.73,107.117],[284.808,-52.583,119.056],[284.906,26.308,125.157],[284.932,44.934,75.206],[285.145,42.94,35.056],[285.179,-40.066,120.795],[285.279,0.969,122.702],[285.529,-56.992,107.795],[285.79,19.07,124.963],[285.883,31.145,35.951],[287.45,44.648,113.721],[288.466,14.474,77.953],[288.645,-71.899,116.887],[288.757,27.066,72.143],[289.046,-63.638,111.695],[289.296,22.226,34.973],[289.336,51.111,119.966],[289.492,49.686,117.027],[289.675,23.291,79.79],[289.857,42.46,37.01],[290.254,39.658,112.307],[290.325,57.138,83.925],[290.328,55.257,116.402],[290.504,11.387,76.164],[290.709,11.489,75.917],[290.786,37.974,111.702],[291.117,36.546,84.537],[291.55,62.449,110.065],[292.093,61.193,68.498],[292.568,44.583,108.038],[292.734,-33.111,105.616],[292.788,23.095,77.018],[292.867,36.958,65.093],[292.895,-79.433,116.35],[293.09,28.988,112.726],[293.212,46.533,133.236],[294.152,45.369,88.189],[294.683,-13.288,126.736],[294.882,51.397,126.005],[294.942,-39.006,124.187],[294.974,-51.453,122.56],[295.113,11.091,24.033],[295.947,10.985,73.131],[296.272,-65.592,119.317],[296.989,-51.008,114.649],[297.913,16.006,81.589],[298.075,17.482,79.503],[298.552,11.116,122.032],[298.762,-51.156,115.621],[298.875,-0.582,33.308],[298.918,41.995,43.036],[299.025,30.518,124.683],[299.409,5.251,74.613],[300.118,-23.84,116.006],[300.756,-53.184,106.561],[300.807,-51.549,108.257],[301.976,-51.246,106.702],[302.736,11.872,39.349],[304.093,14.231,69.764],[304.307,38.488,126.435],[304.387,35.778,124.785],[304.39,9.072,72.922],[305.514,31.035,97.61],[306.657,54.244,27.404],[307.727,-47.83,34.711],[308.519,-45.646,42.244],[308.526,-23.941,39.23],[309.192,-34.375,48.366],[309.207,49.911,50.788],[309.572,-32.43,26.928],[309.811,2.104,71.854],[310.225,60.46,50.686],[312.525,-48.02,51.148],[314.837,-13.833,34.188],[315.572,-3.759,77.526],[317.028,-62.907,43.99],[317.032,38.088,112.103],[317.13,0.26,80.866],[317.195,-4.614,81.536],[317.199,13.395,49.422],[317.2,-3.441,83.746],[318.057,42.268,113.558],[318.074,-6.247,78.435],[318.402,-51.882,52.93],[318.796,65.045,35.958],[319.733,-33.256,30.748],[319.829,-20.171,25.054],[321.055,4.742,92.294],[321.357,7.191,56.488],[322.464,14.209,108.738],[322.61,22.877,109.887],[322.905,24.11,110.009],[323.476,16.586,110.195],[323.48,25.214,42.174],[323.489,1.439,70.961],[323.587,1.453,70.293],[323.844,29.35,111.396],[325.02,-44.878,46.661],[325.198,-47.527,34.189],[326.101,-8.55,74.54],[326.579,54.835,37.345],[326.966,-46.438,43.328],[329.058,65.343,36.741],[329.29,59.89,36.315],[330.781,23.92,35.441],[331.004,-50.313,42.038],[331.068,-4.733,81.782],[333.045,12.811,43.645],[333.168,9.122,47.589],[333.608,14.665,118.561],[334.385,36.044,31.359],[336.894,57.666,32.13],[337.333,-50.534,28.721],[337.876,4.113,102.127],[338.296,-51.672,31.131],[338.491,-10.809,73.811],[338.531,8.503,113.877],[341.251,39.02,31.159],[342.056,49.358,28.543],[342.279,-42.708,37.056],[342.425,40.618,31.155],[343.508,38.793,30.439],[343.788,41.166,29.974],[347.491,8.292,41.372],[351.001,26.45,26.796],[352.264,20.523,26.502],[354.796,20.226,30.023],[470.411,85.967,33.821],[470.477,88.744,37.978],[471.945,94.389,84.808],[472.772,52.253,12.24],[474.899,101.596,54.73],[475.186,96.991,77.535],[476.074,69.338,18.046],[477.501,95.507,74.217],[478.35,101.136,65.18],[478.566,83.332,56.887],[478.691,98.02,84.606],[478.746,103.207,75.699],[478.941,101.068,74.715],[479.355,97.652,68.262],[479.407,103.039,85.449],[479.859,80.873,29.476],[481.251,67.268,16.324],[481.365,96.481,61.736],[481.732,103.496,83.334],[481.926,35.796,10.661],[482.211,75.231,60.078],[482.806,102.039,62.597],[483.958,40.909,7.888],[484.079,83.684,68.201],[487.268,44.751,28.935],[487.51,49.199,15.312],[487.577,100.065,84.738],[487.857,92.853,78.913],[488.595,46.542,14.75],[488.735,40.412,58.747],[488.884,35.108,49.395],[489.017,44.931,18.164],[489.148,42.948,106.3],[489.243,41.788,41.383],[489.328,65.888,102.192],[489.578,63.186,109.848],[489.662,46.046,26.764],[489.96,84.991,63.21],[490.643,44.117,112.26],[490.855,65.076,56.546],[491.346,47.561,114.48],[491.546,59.793,100.875],[491.568,32.676,82.71],[492.024,80.062,91.056],[492.323,76.57,93.557],[492.962,38.683,88.182],[493.003,60.62,121.455],[493.111,-35.652,120.456],[493.439,96.535,83.611],[493.518,96.507,64.295],[493.597,90.886,75.529],[494.136,86.223,77.796],[494.368,87.65,80.027],[494.488,87.963,82.365],[494.589,95.75,65.917],[495.037,-25.416,112.45],[495.449,88.237,76.184],[495.503,85.853,80.721],[495.791,33.266,114.71],[496.693,86.503,74.67],[497.36,-25.845,110.932],[498.292,35.03,57.537],[498.625,24.866,118.798],[500.28,87.979,83.928],[500.314,44.551,94.44],[501.153,46.06,115.439],[501.87,39.416,98.327],[502.83,45.676,113.142],[502.962,-44.725,114.814],[503.806,-0.649,42.312],[503.921,40.858,96.821],[504.207,-14.79,114.819],[505.803,0.941,33.289],[506.054,80.008,73.694],[506.154,80.135,72.278],[506.235,76.455,71.021],[507.836,18.789,130.166],[508.145,4.099,29.845],[508.288,44.648,52.968],[508.767,36.599,120.966],[509.203,-21.138,43.338],[509.265,30.361,83.486],[509.703,35.541,57.278],[509.705,10.03,27.288],[510.698,22.615,125.223],[510.945,30.677,33.883],[511.241,34.101,32.498],[511.84,23.965,124.35],[511.848,79.516,77.865],[512.308,24.978,32.61],[512.443,71.024,87.371],[513.763,-21.101,30.818],[514.192,77.907,76.507],[514.727,26.749,124.062],[515.881,18.064,82.494],[516.378,68.857,85.122],[517.504,-30.046,30.653],[517.64,64.121,63.996],[518.355,-31.923,30.892],[518.438,65.628,84.537],[518.568,66.508,82.032],[521.721,20.327,86.318],[523.005,61.532,67.771],[523.291,29.03,63.091],[524.629,63.65,72.922],[526.719,35.144,89.207],[529.209,64.497,77.532],[529.518,35.951,60.796],[532.238,48.513,86.757],[533.91,48.858,66.061],[535.031,62.885,76.63],[537.154,54.848,76.665],[540.56,51.919,75.583],[542.587,47.186,78.064],[544.812,33.053,83.416],[546.096,25.635,78.183],[546.581,40.681,74.579],[546.781,26.063,85.262],[548.653,18.667,77.009],[551.636,1.376,76.805],[552.937,-4.798,73.591],[553.082,-21.971,76.136],[553.126,-39.434,74.27],[553.503,-41.611,73.669],[553.894,21.899,75.885],[554.281,-10.585,74.047],[554.597,-43.242,73.792],[556.496,2.272,76.221],[556.73,3.753,75.443],[193.012,94.861,64.524],[194.113,90.702,63.118],[199.41,124.937,67.25],[200.894,121.179,106.459],[201.965,75.149,76.106],[202.114,68.472,96.077],[202.49,125.142,80.111],[204.769,122.95,58.263],[204.831,137.173,78.645],[205.062,101.322,57.608],[205.984,86.643,95.767],[206.048,84.811,78.065],[206.94,121.627,55.677],[207.03,124.119,50.967],[207.144,86.848,70.131],[207.32,124.28,82.833],[208.43,97.247,63.993],[209.324,93.696,96.73],[209.644,90.606,95.176],[210.265,122.255,101.973],[210.604,89.512,69.317],[211.08,137.683,66.592],[211.285,91.03,68.063],[211.391,53.676,80.36],[211.793,109.915,101.915],[212.097,118.106,103.298],[212.14,127.878,48.032],[212.344,122.157,72.104],[212.361,77.335,74.113],[212.793,109.173,110.622],[213.546,143.757,78.319],[213.8,111.58,99.062],[213.92,126.048,116.142],[215.169,105.702,93.734],[215.305,106.842,93.765],[215.77,109.067,115.021],[216.065,79.265,71.523],[216.459,134.504,58.408],[217.219,81.361,89.932],[217.499,142.289,63.733],[217.683,119.231,104.637],[218.587,59.232,71.49],[219.564,75.578,68.132],[219.909,85.402,78.621],[221.868,116.955,96.561],[222.234,116.761,96.015],[222.52,57.19,84.886],[223.852,79.116,69.009],[223.86,87.507,93.517],[224.304,127.917,97.836],[224.543,86.437,66.491],[224.78,148.623,99.842],[225.56,87.402,66.214],[225.753,61.193,66.926],[226.344,109.789,90.41],[228.482,113.035,117.089],[229.447,110.48,70.051],[229.954,159.535,104.318],[230.14,80.343,60.498],[230.635,161.564,104.092],[230.868,73.386,98.824],[231.054,75.413,99.643],[234.467,66.115,72.199],[234.747,160.143,107.761],[235.683,139.567,113.675],[236.205,81.387,65.735],[236.658,101.857,91.41],[237.579,94.147,89.973],[237.9,114.14,87.172],[238.205,129.836,44.208],[238.464,82.154,66.209],[238.647,143.572,118.332],[238.684,80.044,69.308],[238.882,96.866,83.024],[239.03,78.5,70.518],[239.418,167.055,73.285],[239.507,97.776,88.512],[239.674,79.511,89.557],[239.763,112.422,71.654],[240.04,118.613,49.273],[240.335,125.232,113.596],[240.395,79.778,69.639],[240.824,82.186,68.16],[240.849,90.282,56.488],[241.244,89.944,62.006],[241.285,66.801,65.565],[241.58,118.959,57.027],[241.935,145.983,77.968],[243.55,154.523,49.144],[243.646,116.567,98.317],[243.655,83.587,67.046],[244.208,109.928,57.253],[244.522,118.044,50.251],[244.969,112.042,76.765],[245.045,118.892,61.792],[245.425,135.266,81.128],[245.468,159.137,88.287],[245.694,146.662,116.988],[245.9,136.86,75.486],[246.172,137.638,73.64],[246.38,87.641,61.55],[246.553,117.279,75.428],[246.733,105.276,101.485],[246.794,111.305,70.501],[248.32,155.752,94.839],[248.942,117.836,105.142],[249.442,115.89,105.71],[249.905,118.029,91.782],[250.025,116.872,66.847],[250.208,111,79.53],[251.018,133.871,52.715],[251.249,114.827,80.453],[251.391,116.764,94.762],[251.534,151.401,95.702],[252.638,145.701,56.431],[252.988,149.001,60.342],[253.919,115.23,81.438],[255.465,129.887,98.237],[255.513,116.267,70.054],[256.084,118.892,96.966],[258.009,112.336,73.816],[258.319,114.994,82.671],[259.772,118.862,68.06],[260.651,116.618,67.801],[261.294,123.937,83.661],[263.046,129.357,75.948],[263.805,128.252,71.828],[263.927,107.215,73.893],[264.595,122.024,87.266],[265.091,119.111,57.103],[265.58,114.092,64.949],[265.767,120.312,57.961],[265.998,108.469,75.929],[267.884,120.992,74.422],[268.432,116.493,87.391],[268.616,124.92,75.592],[268.765,114.837,93.54],[273.988,113.79,87.37],[275.599,113.819,81.85],[272.197,102.749,76.763],[272.23,105.466,71.582],[272.246,113.11,68.516],[272.895,102.635,79.278],[272.906,116.766,67.492],[273.554,114.514,67.391],[273.718,115.415,65.276],[273.727,109.963,70.408],[274.786,102.654,83.13],[275.965,108.706,84.288],[276.237,106.238,65.837],[276.88,100.988,69.451],[277.098,100.815,82.098],[277.412,104.891,89.928],[277.695,109.181,86.283],[277.973,98.694,80.952],[278.929,99.059,71.378],[279.212,106.35,69.421],[279.66,120.496,72.732],[280.575,106.467,86.51],[281.287,121.086,78.792],[281.974,70.173,35.018],[281.984,102.116,90.055],[282.287,110.039,85.806],[282.425,100.887,68.495],[282.582,102.482,85.978],[283.006,101.743,70.948],[283.747,103.65,69.839],[283.856,110.573,71.264],[284.42,108.155,70.835],[284.543,76.579,33.705],[284.76,69.317,34.246],[285.11,102.74,66.295],[285.816,101.089,83.553],[287.255,110.12,67.312],[289,99.275,90.645],[289.059,110.481,87.205],[289.734,121.412,76.917],[290.216,110.08,68.376],[291.248,74.58,33.583],[291.254,81.014,33.296],[291.968,105.982,70.157],[292.176,99.613,52.262],[293.053,95.365,49.236],[293.195,113.229,68.583],[293.221,107.857,37.257],[293.616,96.679,34.657],[293.779,94.54,38.781],[294.41,97.649,62.769],[296.037,92.932,73.656],[296.462,127.357,78.643],[297.756,71.886,64.626],[297.856,105.857,82.07],[297.895,127.003,78.276],[298.164,125.501,78.077],[298.374,106.281,82.286],[298.485,86.603,64.546],[298.855,96.267,60.097],[300.848,92.452,76.585],[301.549,85.677,62.29],[302.656,96.705,85.863],[303.319,111.558,71.468],[303.916,110.331,72.307],[304.399,105.865,88.035],[304.57,107.061,49.593],[304.815,95.837,65.084],[305.909,109.232,67.785],[305.911,136.036,61.809],[306.405,97.643,44.452],[306.498,100.324,45.857],[306.552,106.701,65.187],[306.901,74.025,32.383],[306.94,86.807,58.975],[307.297,105.687,47.567],[308.904,93.202,38.785],[308.931,97.576,67.891],[309.65,117.217,50.007],[310.83,79.442,34.909],[311.778,79.274,52.2],[311.802,71.089,51.285],[312.859,134.862,59.339],[312.901,105.27,61.181],[313.42,114.215,71.801],[314.161,85.132,36.843],[314.339,117.926,77.217],[316.051,101.74,66.903],[316.115,90.732,49.833],[316.848,107.448,63.339],[317.054,127.696,57.355],[317.477,80.458,43.318],[318.005,96.404,47.788],[318.337,109.708,68.468],[320.337,118.258,40.427],[320.605,98.052,63.967],[322.221,117.435,40.353],[323.894,107.911,62.34],[324.39,113.466,33.078],[324.527,97.458,48.824],[324.884,103.142,20.901],[325.382,88.111,48.162],[325.865,110.327,27.715],[326.695,82.376,18.11],[328.181,95.886,12.743],[331.671,89.271,12.407],[332.671,100.535,16.512],[332.856,97.301,17.42],[333.026,96.671,42.133],[333.625,92.205,39.6],[334.876,85.04,37.614],[335.445,106.111,45.365],[341.685,99.433,39.713],[342.666,64.547,31.932],[342.776,73.641,32.847],[343.08,81.217,31.761],[344.707,105.242,39.989],[345.332,83.012,31.156],[348.017,114.458,41.451],[348.426,110.908,41.773],[348.81,110.848,41.386],[353.116,95.992,31.568],[354.125,84.792,27.758],[354.589,75.904,27.95],[358.474,107.058,35.815],[362.282,104.267,30.653],[365.163,84.139,23.712],[369.33,97.565,22.798],[505.316,-69.209,44.561],[512.036,-62.483,48.169],[514.452,-77.641,39.38],[522.42,-85.002,34.025],[523.343,-95.107,40.387],[523.615,-84.776,48.815],[524.091,-85.035,30.941],[524.255,-73.455,30.375],[525.483,-74.294,52.265],[525.541,-69.492,38.881],[526.724,-56.333,47.925],[527.248,-72.01,33.652],[528.593,-79.256,51.427],[530.05,-72.19,39.979],[531.603,-70.745,46.922],[533.082,-166.608,50.617],[534.212,-167.092,45.438],[534.239,-89.137,49.218],[535.104,-74.919,34.755],[537.019,-97.151,47.019],[537.274,-167.695,46.483],[537.313,-102.061,38.535],[537.599,-161.095,49.801],[537.756,-165.403,50.036],[538.9,-88.51,34.568],[540.288,-150.707,37.925],[540.682,-112.628,46.946],[540.776,-135.245,44.538],[540.785,-94.637,35.542],[541.116,-149.227,45.638],[541.156,-112.277,46.578],[541.415,-145.452,42.504],[541.712,-151.094,36.821],[542.829,-160.198,54.802],[543.293,-168.553,26.035],[543.591,-145.246,47.431],[544.295,-104.705,34.446],[544.734,-118.089,31.541],[544.987,-161.282,56.766],[545.969,-151.05,53.288],[546.526,-153.364,46.678],[546.703,-140.843,48.318],[546.838,-140.014,47.633],[546.906,-135.676,32.93],[546.969,-171.025,22.388],[547.158,-134.462,32.391],[548.257,-115.05,33.696],[549.548,-119.488,34.314],[549.616,-148.464,47.258],[550.141,-162.868,26.208],[551.221,-134.517,45.9],[552.139,-135.944,35.097],[553.312,-149.261,46.21],[555.115,-146.245,32.58],[555.697,-149.567,31.355],[560.154,-145.277,44.119],[562.453,-138.587,36.358],[567.405,-142.122,45.493],[464.791,-168.965,100.23],[465.566,-170.114,125.473],[468.316,-168.674,126.713],[468.537,-167.445,120.883],[469.02,-166.462,109.2],[472.792,-169.759,121.407],[473.676,-161.403,104.667],[473.926,-166.101,123.654],[474.871,-157.165,113.281],[475.554,-168.627,121.922],[476.216,-162.305,115.81],[476.965,-168.463,104.675],[478.1,-71.451,115.646],[478.7,-158.814,102.96],[479.611,-161.648,109.881],[481.577,-169.791,125.838],[482.676,-164.717,121.18],[482.843,-137.446,104.142],[482.981,-158.438,121.55],[483.063,-140.047,110.311],[483.763,-141.543,105.196],[483.977,-64.184,121.699],[483.994,-162.732,97.387],[485.131,-87.679,113.088],[485.204,-77.11,111.956],[485.441,-152.398,116.872],[485.79,-158.137,111.407],[486.921,-144.769,116.398],[487.063,-152.186,105.84],[489.811,-143.224,103.805],[489.911,-54.958,107.77],[490.399,-139.554,104.198],[491.585,-133.539,120.05],[493.439,-128.079,115.132],[493.744,-136.785,106.946],[494.563,-128.896,119.103],[494.589,-144.234,106.57],[494.628,-150.033,106.052],[496.741,-86.714,118.531],[497.248,-75.757,123.579],[498.285,-110.512,115.944],[500.321,-81.426,106.352],[501.583,-147.863,107.75],[503.634,-57.81,104.698],[505.325,-147.461,115.315]];var statistics={x:{count:1200,mean:351.5825575,std:107.940879597,min:63.13,"25%":284.51225,"50%":335.271,"75%":436.41325,max:567.405},y:{count:1200,mean:44.4816041667,std:91.5668068743,min:-171.055,"25%":17.6125,"50%":80.4955,"75%":111.914,max:167.055},z:{count:1200,mean:75.9319608333,std:34.36417168,min:-21.748,"25%":50.31475,"50%":75.2675,"75%":102.7245,max:169.04}};var mammoth = {names:names,labels:labels,columns:columns,values:values,statistics:statistics};

var mammoth$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    names: names,
    labels: labels,
    columns: columns,
    values: values,
    statistics: statistics,
    'default': mammoth
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


async function fetch_data(URL) {
    let fetch;
    try {
        if (process && typeof process !== undefined && process.release.name === "node") {
            fetch = (await Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('cross-fetch')); })).fetch;
        }
    } catch {
        fetch = window.fetch;
    }
    const headers = {
        credential: "include",
        cache: "force-cache",
        mode: "cors"
    };
    const response = await fetch(URL, headers);
    let data = await response.arrayBuffer();
    data = pako__default["default"].inflate(data);
    return data;
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
    const R = new druidjs.Randomizer(seed);
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
    const R = new druidjs.Randomizer(seed);
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
    const R = new druidjs.Randomizer(seed);
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
    const R = new druidjs.Randomizer(seed);
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
    const R = new druidjs.Randomizer(seed);
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
function blobs({N = 400, D = 3, centers, deviations, seed = 4711} = {}) {
    const R = new druidjs.Randomizer(seed);
    const values = [];
    const labels = [];
    const columns = Array.from({length: D}, (_, i) => `axis_${i}`);

    if (centers == null) {
        centers = 3;
    }

    if (Number.isInteger(centers)) {
        centers = Array.from({length: centers}, () => {
            return Array.from({length: D}, () => R.random * 12 - 6);
        });
    }

    if (!Array.isArray(centers)) {
        throw "Centers needs to be an array, an integer, or null (defaults to centers = 3)!";
    }

    if (!deviations) {
        deviations = centers.map(center => center.map(() => 1));
    } else {
        if (Number.isFinite(deviations)) {
            deviations = centers.map(center => center.map(() => deviations));
        }
        if (Array.isArray(deviations) && deviations.length != centers.length) {
            throw "If deviations is given, then its value needs to be a number or an array of the same length as centers! (defaults to deviations = 1)";
        }
    }

    const number_of_points_per_blob = Math.floor(N / centers.length);
    const residuum = N - number_of_points_per_blob * centers.length;
    const ns = Array.from({length: centers.length}, () => number_of_points_per_blob);
    ns[0] += residuum;
    for (let i = 0; i < centers.length; ++i) {
        const n = ns[i];
        let randoms = [];
        for (let d = 0; d < D; ++d) {
            randoms.push(randomNormal(R, centers[i][d], deviations[i][d]));
        }
        for (let j = 0; j < n; ++j) {
            values.push(randoms.map(r => r()));
            labels.push(`blob_${i + 1}`);
        }
    }
    
    return {values, labels, columns, statistics: getStatistics({values, labels, columns})};
}

const BLOBS = blobs();

// https://github.com/d3/d3-random/blob/588790e06454c27f7dae4e7cffeadf2c783d88c3/src/normal.js

function randomNormal(R, mu = 0, sigma = 1) {
    let x;
    let r;
    return function() {
        let y;
        if (x != null) {
            y = x;
            x = null;
        } else {
            do {
                x = R.random * 2 - 1;
                y = R.random * 2 - 1;
                r = x * x + y * y;
            } while (!r || r > 1);
        }
        return mu + sigma * y * Math.sqrt(-2 * Math.log(r) / r);
    }
}

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
    const R = new druidjs.Randomizer(seed);
    const raw_values = await fetch_data(big ? MNIST_TRAIN_VALUES_URL : MNIST_TEST_VALUES_URL);
    const raw_labels = await fetch_data(big ? MNIST_TRAIN_LABELS_URL : MNIST_TEST_LABELS_URL);


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
    const columns = Array.from({length: 28 * 28}, (_, i) => `pixel_at_${i % 28}_${Math.floor(i / 28)}`);
    return {values, labels, columns, statistics: getStatistics({values, labels, columns})};
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
    const R = new druidjs.Randomizer(seed);
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
    const columns = Array.from({length: 28 * 28}, (_, i) => `pixel_at_${i % 28}_${Math.floor(i / 28)}`);
    return {values, labels, columns, statistics: getStatistics({values, labels, columns})};
}

exports.BLOBS = BLOBS;
exports.IRIS = iris$1;
exports.MAMMOTH = mammoth$1;
exports.MOONS = MOONS;
exports.OECD = oecd$1;
exports.RAYS = RAYS;
exports.SPOTIFY = spotify$1;
exports.SSHAPE = SSHAPE;
exports.SWISSROLL = SWISSROLL;
exports.WAVES = WAVES;
exports.blobs = blobs;
exports.fetch_fmnist = fmnist;
exports.fetch_mnist = mnist;
exports.moons = moons;
exports.rays = rays;
exports.sshape = sshape;
exports.swissroll = swissroll;
exports.waves = waves;
//# sourceMappingURL=dataset.js.map
