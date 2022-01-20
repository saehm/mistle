(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
typeof define === 'function' && define.amd ? define(['exports'], factory) :
(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.datasets = global.datasets || {}));
})(this, (function (exports) { 'use strict';

var names$3=["Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica"];var labels$4=["Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-setosa","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-versicolor","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica","Iris-virginica"];var columns$4=["sepallength","sepalwidth","petallength","petalwidth"];var values$4=[[5.1,3.5,1.4,0.2],[4.9,3,1.4,0.2],[4.7,3.2,1.3,0.2],[4.6,3.1,1.5,0.2],[5,3.6,1.4,0.2],[5.4,3.9,1.7,0.4],[4.6,3.4,1.4,0.3],[5,3.4,1.5,0.2],[4.4,2.9,1.4,0.2],[4.9,3.1,1.5,0.1],[5.4,3.7,1.5,0.2],[4.8,3.4,1.6,0.2],[4.8,3,1.4,0.1],[4.3,3,1.1,0.1],[5.8,4,1.2,0.2],[5.7,4.4,1.5,0.4],[5.4,3.9,1.3,0.4],[5.1,3.5,1.4,0.3],[5.7,3.8,1.7,0.3],[5.1,3.8,1.5,0.3],[5.4,3.4,1.7,0.2],[5.1,3.7,1.5,0.4],[4.6,3.6,1,0.2],[5.1,3.3,1.7,0.5],[4.8,3.4,1.9,0.2],[5,3,1.6,0.2],[5,3.4,1.6,0.4],[5.2,3.5,1.5,0.2],[5.2,3.4,1.4,0.2],[4.7,3.2,1.6,0.2],[4.8,3.1,1.6,0.2],[5.4,3.4,1.5,0.4],[5.2,4.1,1.5,0.1],[5.5,4.2,1.4,0.2],[4.9,3.1,1.5,0.1],[5,3.2,1.2,0.2],[5.5,3.5,1.3,0.2],[4.9,3.1,1.5,0.1],[4.4,3,1.3,0.2],[5.1,3.4,1.5,0.2],[5,3.5,1.3,0.3],[4.5,2.3,1.3,0.3],[4.4,3.2,1.3,0.2],[5,3.5,1.6,0.6],[5.1,3.8,1.9,0.4],[4.8,3,1.4,0.3],[5.1,3.8,1.6,0.2],[4.6,3.2,1.4,0.2],[5.3,3.7,1.5,0.2],[5,3.3,1.4,0.2],[7,3.2,4.7,1.4],[6.4,3.2,4.5,1.5],[6.9,3.1,4.9,1.5],[5.5,2.3,4,1.3],[6.5,2.8,4.6,1.5],[5.7,2.8,4.5,1.3],[6.3,3.3,4.7,1.6],[4.9,2.4,3.3,1],[6.6,2.9,4.6,1.3],[5.2,2.7,3.9,1.4],[5,2,3.5,1],[5.9,3,4.2,1.5],[6,2.2,4,1],[6.1,2.9,4.7,1.4],[5.6,2.9,3.6,1.3],[6.7,3.1,4.4,1.4],[5.6,3,4.5,1.5],[5.8,2.7,4.1,1],[6.2,2.2,4.5,1.5],[5.6,2.5,3.9,1.1],[5.9,3.2,4.8,1.8],[6.1,2.8,4,1.3],[6.3,2.5,4.9,1.5],[6.1,2.8,4.7,1.2],[6.4,2.9,4.3,1.3],[6.6,3,4.4,1.4],[6.8,2.8,4.8,1.4],[6.7,3,5,1.7],[6,2.9,4.5,1.5],[5.7,2.6,3.5,1],[5.5,2.4,3.8,1.1],[5.5,2.4,3.7,1],[5.8,2.7,3.9,1.2],[6,2.7,5.1,1.6],[5.4,3,4.5,1.5],[6,3.4,4.5,1.6],[6.7,3.1,4.7,1.5],[6.3,2.3,4.4,1.3],[5.6,3,4.1,1.3],[5.5,2.5,4,1.3],[5.5,2.6,4.4,1.2],[6.1,3,4.6,1.4],[5.8,2.6,4,1.2],[5,2.3,3.3,1],[5.6,2.7,4.2,1.3],[5.7,3,4.2,1.2],[5.7,2.9,4.2,1.3],[6.2,2.9,4.3,1.3],[5.1,2.5,3,1.1],[5.7,2.8,4.1,1.3],[6.3,3.3,6,2.5],[5.8,2.7,5.1,1.9],[7.1,3,5.9,2.1],[6.3,2.9,5.6,1.8],[6.5,3,5.8,2.2],[7.6,3,6.6,2.1],[4.9,2.5,4.5,1.7],[7.3,2.9,6.3,1.8],[6.7,2.5,5.8,1.8],[7.2,3.6,6.1,2.5],[6.5,3.2,5.1,2],[6.4,2.7,5.3,1.9],[6.8,3,5.5,2.1],[5.7,2.5,5,2],[5.8,2.8,5.1,2.4],[6.4,3.2,5.3,2.3],[6.5,3,5.5,1.8],[7.7,3.8,6.7,2.2],[7.7,2.6,6.9,2.3],[6,2.2,5,1.5],[6.9,3.2,5.7,2.3],[5.6,2.8,4.9,2],[7.7,2.8,6.7,2],[6.3,2.7,4.9,1.8],[6.7,3.3,5.7,2.1],[7.2,3.2,6,1.8],[6.2,2.8,4.8,1.8],[6.1,3,4.9,1.8],[6.4,2.8,5.6,2.1],[7.2,3,5.8,1.6],[7.4,2.8,6.1,1.9],[7.9,3.8,6.4,2],[6.4,2.8,5.6,2.2],[6.3,2.8,5.1,1.5],[6.1,2.6,5.6,1.4],[7.7,3,6.1,2.3],[6.3,3.4,5.6,2.4],[6.4,3.1,5.5,1.8],[6,3,4.8,1.8],[6.9,3.1,5.4,2.1],[6.7,3.1,5.6,2.4],[6.9,3.1,5.1,2.3],[5.8,2.7,5.1,1.9],[6.8,3.2,5.9,2.3],[6.7,3.3,5.7,2.5],[6.7,3,5.2,2.3],[6.3,2.5,5,1.9],[6.5,3,5.2,2],[6.2,3.4,5.4,2.3],[5.9,3,5.1,1.8]];var statistics$4={sepallength:{count:150,mean:5.8433333333,std:0.828066128,min:4.3,"25%":5.1,"50%":5.8,"75%":6.4,max:7.9},sepalwidth:{count:150,mean:3.054,std:0.4335943114,min:2,"25%":2.8,"50%":3,"75%":3.3,max:4.4},petallength:{count:150,mean:3.7586666667,std:1.76442042,min:1,"25%":1.6,"50%":4.35,"75%":5.1,max:6.9},petalwidth:{count:150,mean:1.1986666667,std:0.7631607417,min:0.1,"25%":0.3,"50%":1.3,"75%":1.8,max:2.5}};var iris = {names:names$3,labels:labels$4,columns:columns$4,values:values$4,statistics:statistics$4};

var iris$1 = /*#__PURE__*/Object.freeze({
__proto__: null,
names: names$3,
labels: labels$4,
columns: columns$4,
values: values$4,
statistics: statistics$4,
'default': iris
});

var names$2=["South_Africa","Israel","Japan","Korea","Russia","Australia","New_Zealand","Austria","Belgium","Czech_Republic","Denmark","Estonia","Finland","France","Germany","Greece","Hungary","Iceland","Ireland","Italy","Latvia","Luxembourg","Netherlands","Norway","Poland","Portugal","Slovak_Republic","Slovenia","Spain","Sweden","Switzerland","Turkey","United_Kingdom","Canada","Mexico","United_States","Chile","Brazil"];var labels$3=["Africa","Asia","Asia","Asia","Asia","Australia","Australia","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","North_America","North_America","North_America","South_America","South_America"];var columns$3=["Dwellings_without_basic_facilities","Housing_expenditure","Rooms_per_person","Household_net_adjusted_disposable_income","Household_net_financial_wealth","Labour_market_insecurity","Employment_rate","Long-term_unemployment_rate","Personal_earnings","Quality_of_support_network","Educational_attainment","Student_skills","Years_in_education","Air_pollution","Water_quality","Stakeholder_engagement_for_developing_regulations","Voter_turnout","Life_expectancy","Self-reported_health","Life_satisfaction","Feeling_safe_walking_alone_at_night","Homicide_rate","Employees_working_very_long_hours","Time_devoted_to_leisure_and_personal_care"];var values$3=[[20.5,18,0.7,8712,16937,22.6,43,14.37,5429,90,65,384,15.4,14,69,1.6,73,56.8,67,4.9,39.8,9.6,18.07,14.73],[4.4,21,1.2,22116,50051,3.9,68,0.63,29635,86,85,474,15.9,26,65,0.9,72,82.1,80,7.1,66.3,1.8,14.74,13.94],[6.4,22,1.9,27323,92818,2.4,73,1.36,35672,91,94,540,16,16,87,1.3,53,83.4,35,5.9,70.2,0.3,21.89,14.85],[4.2,16,1.4,19372,30852,2.1,65,0.01,36653,76,85,542,17.5,29,78,2.4,76,81.8,35,5.8,67.7,1.1,23.12,14.7],[14.4,11,0.9,17006,3687,5.1,69,1.45,26977,91,95,481,16.1,14,49,0.8,65,70.7,39,6,52.9,11.3,0.18,14.91],[1.1,20,2.3,33138,48836,3.9,72,1.32,51148,95,77,512,19.2,6,94,2.7,93,82.2,85,7.3,62.6,0.8,13.39,14.35],[0.3,23,2.4,23213,81271,4.9,74,0.78,45183,99,74,509,18,9,92,2.5,77,81.4,90,7.4,64.4,1.2,13.78,14.87],[1,21,1.6,31667,55623,2.2,71,1.53,45988,93,84,500,17.1,15,93,1.3,75,81.2,69,7.1,81.2,0.4,7.32,14.55],[2.1,21,2.2,28700,89057,3.6,62,4.26,48093,88,74,509,18.8,19,83,2.2,89,80.7,74,6.9,69.6,1.1,4.73,15.77],[0.7,26,1.4,18953,20170,4.7,69,2.72,21185,90,93,500,17.4,17,88,2.6,59,78.3,60,6.6,70.1,0.9,5.99,15.03],[0.5,25,1.9,26945,54839,2.3,73,1.66,49589,96,80,498,19.6,11,95,2.1,86,80.4,72,7.5,85.2,0.3,2.21,15.87],[7.2,19,1.6,16565,15728,7.6,70,3.32,21020,90,91,526,17.8,9,84,2.8,64,77.3,53,5.6,67.2,4.8,3.29,14.9],[0.6,22,1.9,28238,24482,2.6,69,1.97,40742,94,87,529,19.7,7,94,2.3,69,81.1,65,7.4,85.8,1.5,3.6,15.17],[0.5,21,1.8,29759,53851,4.6,64,4.21,40828,89,75,500,16.4,14,84,2.1,80,82.3,67,6.4,70.6,0.6,7.77,16.36],[0,22,1.8,31925,49822,2.7,74,2.21,43872,92,87,515,18.1,15,94,2.1,72,80.9,65,7,74.6,0.5,4.96,15.55],[0.5,26,1.2,18099,17568,32,49,19.47,26436,83,68,466,18.5,15,69,1.9,64,81.4,74,5.6,62.5,1.5,6.37,14.74],[5.3,20,1.1,15614,17774,7.8,62,3.78,21399,82,83,487,17.2,16,76,1.2,62,75.7,57,5.3,53.2,1.2,3.76,15.04],[0,24,1.6,27918,54275,0.7,82,0.67,56789,96,73,484,19.6,7,97,1.6,81,82.1,77,7.5,78.1,0.3,13.79,14.13],[0.1,20,2,22969,31861,5,61,6.98,53286,95,79,516,17.8,8,82,0.8,70,81.1,82,6.8,77,0.8,4.11,15.3],[0.8,24,1.4,25004,56833,11.8,57,7.79,34744,91,59,490,16.8,18,70,1.5,75,82.8,66,5.8,59.3,0.8,3.83,14.89],[14.7,26,1.2,13655,9837,8,66,4.67,22270,84,90,494,17.8,12,76,2.4,59,74.1,50,5.9,61.6,6.1,2.45,13.83],[0.1,21,2,40914,64500,2.1,67,1.6,61511,93,82,490,15.1,15,85,1.5,91,81.9,72,6.7,70.6,0.2,3.27,15.17],[0,19,1.9,27759,71251,3.1,73,2.98,51003,88,76,519,17.9,17,94,1.3,75,81.4,76,7.3,80.5,0.8,0.44,15.9],[0,18,2,33393,16930,1.5,75,0.41,51718,93,82,496,18,6,97,1.9,78,81.8,76,7.6,89.6,1,3.05,15.56],[3.1,22,1.1,17820,12902,8.9,62,3.26,23649,86,91,521,17.9,17,80,2.6,55,77.1,58,6,66.1,1,7.25,14.42],[1,19,1.7,19882,29563,11.7,63,8.28,23977,85,43,488,17.4,10,89,1.2,56,80.8,46,5.1,69.2,0.9,9.77,14.72],[1.3,25,1.1,18534,8896,10.7,61,8.8,22151,92,91,472,16.2,16,81,2.9,59,76.5,66,6.2,62.1,1.2,6.23,14.92],[0.6,19,1.5,19130,17271,5.2,64,5.27,33068,89,86,499,18.3,14,91,2.8,52,80.4,65,5.7,83.9,0.4,5.5,14.75],[0.1,23,1.9,22007,29819,26.6,57,12.92,36013,96,57,490,17.7,12,71,1.6,73,83.2,72,6.4,81.6,0.6,5.61,15.93],[0,20,1.8,28859,69899,5.2,75,1.33,40994,92,82,482,19.1,7,95,2,86,82,81,7.3,76.8,0.8,1.1,15.18],[0,22,1.8,35952,120265,1.7,80,1.71,57082,93,88,518,17.4,17,97,2.6,48,82.9,81,7.6,87.4,0.5,6.34,15.01],[7.6,21,1.1,13471,3886,9.1,50,2.04,15992,84,36,462,16.9,17,63,2.1,85,76.6,68,5.5,60.4,1.7,39.26,12.24],[0.4,23,1.9,26687,69927,5.7,73,2.22,41659,93,79,502,16.7,11,87,2.9,66,81.1,74,6.5,77.8,0.2,12.83,14.87],[0.2,21,2.5,30474,75775,3.9,72,0.89,48164,94,90,522,16.3,12,90,3,68,81.5,89,7.4,81.7,1.5,3.83,14.41],[4.2,22,1,12806,9856,5.2,60,0.06,12850,75,34,417,14.4,12,68,3.5,63,74.6,66,6.2,39.9,23.4,28.28,12.8],[0.1,19,2.4,41071,163268,5.2,68,1.42,57139,90,90,492,17.1,11,84,3.2,67,78.8,88,6.9,73.9,5.2,11.69,14.47],[9.4,18,1.2,15094,18172,8.1,62,1.67,21370,82,61,436,17.1,18,71,1.5,49,78.8,59,6.5,50.2,3.8,13.84,14.91],[6.7,21,0.9,11487,7566,6.6,67,0.81,10229,90,46,402,15.6,17,73,1.3,79,75,70,6.5,39.5,26.7,9.45,14.27]];var statistics$3={Dwellings_without_basic_facilities:{count:38,mean:3.1605263158,std:4.8000866813,min:0,"25%":0.125,"50%":0.75,"75%":4.35,max:20.5},Housing_expenditure:{count:38,mean:21.0789473684,std:2.9351695835,min:11,"25%":19.25,"50%":21,"75%":22.75,max:26},Rooms_per_person:{count:38,mean:1.6131578947,std:0.466250746,min:0.7,"25%":1.2,"50%":1.65,"75%":1.9,max:2.5},Household_net_adjusted_disposable_income:{count:38,mean:23742.9210526316,std:8044.3115485973,min:8712,"25%":17889.75,"50%":23091,"75%":28819.25,max:41071},Household_net_financial_wealth:{count:38,mean:43839.9473684211,std:35212.4867778212,min:3687,"25%":17020.5,"50%":31356.5,"75%":62583.25,max:163268},Labour_market_insecurity:{count:38,mean:6.8684210526,std:6.7093764669,min:0.7,"25%":2.8,"50%":5.05,"75%":7.95,max:32},Employment_rate:{count:38,mean:66.3684210526,std:8.198289382,min:43,"25%":62,"50%":67.5,"75%":72.75,max:82},"Long-term_unemployment_rate":{count:38,mean:3.7060526316,std:4.2472022839,min:0.01,"25%":1.3375,"50%":2.005,"75%":4.2475,max:19.47},Personal_earnings:{count:38,mean:35934.3947368421,std:14804.883862811,min:5429,"25%":22614.75,"50%":36333,"75%":48146.25,max:61511},Quality_of_support_network:{count:38,mean:89.6315789474,std:5.359614007,min:75,"25%":86.5,"50%":90.5,"75%":93,max:99},Educational_attainment:{count:38,mean:76.6315789474,std:16.0714974371,min:34,"25%":73.25,"50%":82,"75%":87.75,max:95},Student_skills:{count:38,mean:491.1578947368,std:34.5202849224,min:384,"25%":482.5,"50%":497,"75%":514.25,max:542},Years_in_education:{count:38,mean:17.3631578947,std:1.2713944361,min:14.4,"25%":16.475,"50%":17.4,"75%":18,max:19.7},Air_pollution:{count:38,mean:13.8421052632,std:4.9730425501,min:6,"25%":11,"50%":14,"75%":17,max:29},Water_quality:{count:38,mean:82.5,std:11.5495407654,min:49,"25%":73.75,"50%":84,"75%":92.75,max:97},Stakeholder_engagement_for_developing_regulations:{count:38,mean:2.0263157895,std:0.7062210857,min:0.8,"25%":1.5,"50%":2.1,"75%":2.6,max:3.5},Voter_turnout:{count:38,mean:70.1052631579,std:11.8339627451,min:48,"25%":62.25,"50%":71,"75%":77.75,max:93},Life_expectancy:{count:38,mean:79.2684210526,std:4.7751669145,min:56.8,"25%":77.55,"50%":81.1,"75%":81.875,max:83.4},"Self-reported_health":{count:38,mean:67.6052631579,std:13.8672070371,min:35,"25%":61.25,"50%":68.5,"75%":76,max:90},Life_satisfaction:{count:38,mean:6.5052631579,std:0.7679201002,min:4.9,"25%":5.9,"50%":6.5,"75%":7.25,max:7.6},Feeling_safe_walking_alone_at_night:{count:38,mean:68.7131578947,std:13.0525584331,min:39.5,"25%":62.2,"50%":69.85,"75%":78.025,max:89.6},Homicide_rate:{count:38,mean:3.0736842105,std:5.8155283374,min:0.2,"25%":0.6,"50%":1,"75%":1.65,max:26.7},Employees_working_very_long_hours:{count:38,mean:9.1339473684,std:8.2402494516,min:0.18,"25%":3.7775,"50%":6.285,"75%":13.25,max:39.26},Time_devoted_to_leisure_and_personal_care:{count:38,mean:14.8160526316,std:0.7831003507,min:12.24,"25%":14.49,"50%":14.88,"75%":15.17,max:16.36}};var oecd = {names:names$2,labels:labels$3,columns:columns$3,values:values$3,statistics:statistics$3};

var oecd$1 = /*#__PURE__*/Object.freeze({
__proto__: null,
names: names$2,
labels: labels$3,
columns: columns$3,
values: values$3,
statistics: statistics$3,
'default': oecd
});

var names$1=["Key to the Gate","Trumpets Of Doom","Tunnel of Set XIII","Hail Murder - Live In South America 2003","Moti Ragnarokum","Hail Murder","Key To The Gate","Tunnel of Set XIII","Krigaren si gravferd","PERVERTOR OF THE 7 GATES","Love In A Void","Osiris","A World Of Bones","Pervertor Of The 7 Gates","Tunnel of Set XIII","Bellum Omnium Contra Omnes","Ghastly Indoctrination","Fear of Napalm","Go To Hell","Pull the Plug - Live in L.A. Death & Raw – 1998","Tomorrow's Victim","Stillborn Saviour","Divine in fire","Lunatic Of God's Creation - Reissue","Thrasher's Abbatoir","Silent Violence","Sacred Serenity","Evidence In The Furnace","Misanthrope","Oxidised Razor Masticator","Misanthrope","Pull the Plug - Live at Backstreets","Go to Hell","No Sympathy For Fools","Year One Now","Misanthrope - Demo","Together as One","Silent Violence","Shreds Of Flesh","Pull the Plug","Nothing Is Everything","The Ancient Ones","Addicted to Vaginal Skin","Deathrow (no regrets)","Livestock Marketplace","Amok","Bible Basher","Pull the Plug - 12/05/87 Rehearsals","Shreds Of Flesh","So You Die","Let the Stillborn Come to Me","Silent Violence","Deathrow (no Regrets)","Thrasher's Abbatoir","Painkiller","Nothing Is Everything","Out Of Touch","By The Light","Crucified For The Innocence","Together As One","War is Coming","Silent Violence","Shreds Of Flesh","Room 101","Together as One","Deathrow (no regrets)","Addicted to Vaginal Skin (Live)","Oxidised Razor Masticator","Livestock Marketplace - Bonus Track","Spiritual Healing","Behold The Throne Of Chaos","On Most Surfaces","Faster","Draconian trilogy (Live in Miskolc)","When the Sun Hits","Secret of the runes","Lorelei","Enter","When the Sun Hits","Estranged - A Timeless Spell","Face Your Demons - Session Version","Murder","Anagram","Face Your Demons - Alternative Version","Short Glance","Inimical Chimera - Remaster","Nobody Dares","Memories","Forgiven","Frail","Who I Am","Pale Tortured Blue","Restless","When the Sun Hits","Candles","Liberty Bell","Lava","Survivalism - deadmau5 Remix","You Know Who You Are","Capital G","The Frail","Far Too Frail","Another Version of the Truth - kronos and enrique gonzalez muller","Starved for Truth - Part 1","In The Army Now","Capital G - Paul Epworth Phones 666 Revolutions Mix","Sharp Dressed Man","The Frail - Remix Version","Dead Eyes Opened 12\"","Dead Eyes Opened (USA 2015)","Bullet","Copy of a","Mount","My Thorny Thorny Crown","Sin","So What","End Of Days Part 2 (Extreme Mayan Makeover Mix)","Sharp Dressed Man","My Thorny Thorny Crown","She's Got A Cause","Dead Eyes Opened","Bitch","Pantomime","On the Surface of Scardonia","Crucified","Sweet Dreams (Are Made Of This)","A Hole In The Wall","Tough Guy","Living Dead Girl - Subliminal Seduction Mix","Living Dead Girl","Living Dead Girl - Photek Remix","Spine For You","Spookshow Baby","Falls Apart","Dreamtime","Birds Of Hell Awaiting","Stillborn","Come On - Go Off - Rotersand Remix","Rowboat","Come On - Go Off","Living Dead Girl","Falls Apart","Coward","Reload","Birds Of Hell Awaiting","The Vaults of Re:Memory","WO BIST DU","Birds Of Hell Awaiting","Thirteen","Over My Head","I Hate Today","WO BIST DU","Fadeaway","Survive","Dragula","OHNE DICH","Sucks (Live)","Rowboat","Everything Is Boring","Living Dead Girl - Live","Blue Monday","Candy-O","OHNE DICH - RMX BY LAIBACH","Spookshow Baby - Black Leather Catsuit Mix","Keep It Clean","Ego Tripp","Vapor Transmission - Intro Album Version","Lunchbox","What?","Living Dead Girl","Dogma","Dogma","Fadeaway","Mesopotamia","Fadeaway - Instrumental","Spookshow Baby - Black Leather Catsuit Mix","Living Dead Girl","Light In The Shadows","Birds Of Hell Awaiting","Make Up Your Mind","Fadeaway - Live","Keine Lust","Solaris","Midnight Train","Tough Guy - Tim Ismag Remix","House Of 1000 Corpses/Unholy 3","Rainmaker","Tears of the Dragon - Live At The Marquee","The Nomad","Melt The Ice Away","Living After Midnight","Painkiller","Fear of the Dark","The Rage","Anthem To The Estranged","Never Walk Alone..A Call To Arms","Lightning Strikes Twice","The Haunting","When the Wild Wind Blows","Come And Get It","Louie Louie - Alternative Version","Do or Die","Enter Sandman","Get Back In Line - Live in Wacken","Get Back In Line","Greenhouse Effect","The Fallen Angel","Purgatory","Come and Get It","Electric Eye - Live from Battle Cry","Parasite","Tears of the Dragon (Acoustic Chillout) [Bonus Track]","Through The Never (Live in Mexico City)","Escape","Get Back In Line - Live","Electric Eye - Live from the San Antonio Civic Center","Johnny B. Goode","Rainmaker","Tears of the Dragon","Trapped Under Ice","Battery (Live in Mexico City)","The Four Horsemen (Live in Mexico City)","Tears Of A Clown","The Threat Is Real","Electric Eye - Live","Electric Eye","Electric Eye","The Unforgiven (Live in Mexico City)","Up to the Limit","Blood Money","Battery","Agony","So What","Bare Bones","Carry On","Nightmare/The Dreamtime","Call To Arms","Another Life","The Thin Line Between Love And Hate","Louie Louie","Burnin' Up","Tears of the Dragon - Live In Brazil","Souls Of Black (Alcatraz Revisit)","Enter Sandman (Live)","No More Lies - Live","Painkiller - Live from Battle Cry","Electric Eye","No More Lies","Enter Sandman (Live with the SFSO)","Rainmaker - Live","Tears of the Dragon","Red Star Falling","The Threat Is Real","Rainmaker","Together as One","One","Capricorn","Up To The Limit","Wish You Were Dead","Get Back In Line - Live Manchester","All Nightmare Long","Battery (Live)","Tears of the Dragon","Wish You Were Dead","Battery (Live with the SFSO)","Rock 'N' Roll","Red Star Falling - orchestral version","All Men Play On Ten","Afraid to Shoot Strangers","Electric Funeral","For Whom The Bell Tolls (Live in Mexico City)","No More Lies","Go to Hell","Go To Hell","Tears Of The Dragon","Jack The Ripper","No More Lies","Let Me Out","One Of A Kind","The Riddle","The Haunting","Written in stone","Full Moon","Draconian Love","Ain't Your Fairytale","Ghost Division","Neverland","The champion","The dragon lies bleeding","Back To Back","Hero of Zeroes","Dreamland","We're Gonna Make It","Not Like You","Zeroes","In the Army Now (Bonus Track)","Back to back","The bitch is back","Carry the Torch","Carry the Torch (Track Commentary)","The Golden Spiral","Vosstanie Roda","Suden joiku","The Golden Spiral","A Burning Arrow","Carry the Torch","Vosstanie Roda","Neverland"];var labels$2=["black metal","black metal","black metal","black metal","black metal","black metal","black metal","black metal","black metal","black metal","black metal","black metal","black metal","black metal","black metal","black metal","black metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","death metal","gothic metal","gothic metal","gothic metal","gothic metal","gothic metal","gothic metal","gothic metal","gothic metal","gothic metal","gothic metal","gothic metal","gothic metal","gothic metal","gothic metal","gothic metal","gothic metal","gothic metal","gothic metal","gothic metal","gothic metal","gothic metal","gothic metal","gothic metal","gothic metal","gothic metal","industrial","industrial","industrial","industrial","industrial","industrial","industrial","industrial","industrial","industrial","industrial","industrial","industrial","industrial","industrial","industrial","industrial","industrial","industrial","industrial","industrial","industrial","industrial","industrial","industrial","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","industrial metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","metal","power metal","power metal","power metal","power metal","power metal","power metal","power metal","power metal","power metal","power metal","power metal","power metal","power metal","power metal","power metal","power metal","power metal","power metal","power metal","power metal","power metal","folk metal","folk metal","folk metal","folk metal","folk metal","folk metal","folk metal","folk metal","folk metal","folk metal"];var columns$2=["danceability","popularity","energy","acousticness","instrumentalness","liveness","valence"];var values$2=[[0.0966,0.19,0.88,0.000038799999999999994,662,105,256],[0.24,0.14,996,0.0000134,0.00266,179,147],[285,0.04,0.0945,835,927,0.0898,0.0432],[152,0.13,983,0.000020600000000000003,0.0053100000000000005,953,0.0482],[481,0.18,281,937,0.91,226,259],[208,0.26,934,0.00000124,0.0017399999999999998,928,0.0347],[153,0.27,778,0.00893,903,403,112],[327,0.06,102,863,863,456,0.0397],[351,0.11,839,0.000625,0.0813,203,0.0372],[277,0.03,993,0.0030399999999999997,428,179,141],[103,0.03,997,0.00728,0.0185,385,0.0487],[0.46,0.19,975,0.00000343,639,309,242],[242,0.04,718,0.0000136,923,134,416],[276,0.04,994,0.0033399999999999997,417,406,149],[303,0,116,815,955,377,0.0601],[284,0.05,633,0.00000109,0.0195,0.0949,0.0349],[332,0.12,813,0.000022,812,203,0.04],[224,0.17,946,0.000007699999999999999,861,216,374],[0.22,0.23,971,0.00000732,198,0.0852,346],[175,0.16,957,0.000149,0.0234,722,285],[377,0.18,717,0.00021899999999999998,831,121,302],[187,0.23,912,0.00000442,0.0000345,558,176],[322,0.04,995,0.000164,0.0018800000000000002,323,104],[298,0.29,996,0.0000218,218,0.0947,0.0649],[148,0.26,998,0.0000031,184,184,0.0602],[378,0.06,0.92,0.0000261,845,0.0849,495],[444,0.03,0.99,0.000014800000000000002,374,0.0392,326],[521,0.24,991,0.000207,597,0.0707,0.17],[397,0.29,987,0.00023199999999999997,0.00282,145,213],[0.21,0.05,0.87,0.00162,667,342,0.0396],[397,0.28,987,0.00023199999999999997,0.00282,145,213],[164,0.14,957,609,212,855,0.0442],[319,0.18,969,0.0000519,506,0.0874,0.0379],[431,0.18,903,0.0000261,0.0362,273,389],[0.13,0.16,943,0.0000017,0.000174,299,0.18],[286,0.18,824,0.00109,572,0.16,544],[311,0.21,945,0.0000123,286,0.0915,386],[429,0.23,941,0.00032,728,0.0882,342],[173,0.12,0.98,0.00000668,404,175,104],[226,0.41,978,0.0000036000000000000003,533,0.0436,252],[379,0.25,974,0.00000651,233,0.0203,225],[303,0.21,882,0.000327,0.0037799999999999995,134,535],[244,0.34,987,0.00005660000000000001,779,0.0664,256],[167,0.07,454,0.0053100000000000005,0.0347,108,215],[447,0.09,941,0.00006159999999999999,155,0.0935,577],[437,0.1,886,0.000039899999999999994,0.0248,122,268],[335,0.22,944,0.00243,419,103,436],[154,0.16,938,0.0994,0.52,355,167],[181,0.04,974,0.00000634,308,255,128],[318,0.33,947,0.00000135,909,0.0694,311],[224,0.21,963,0.0000019,164,368,201],[321,0.15,955,0.0000416,898,973,196],[0.27,0.07,485,0.0031899999999999997,0.0574,199,261],[148,0.19,998,0.0000031,184,184,0.0602],[428,0.38,995,0.000020600000000000003,429,305,135],[412,0.22,943,0.0000923,0.0956,166,159],[261,0.23,961,0.000032200000000000003,0.0543,155,364],[256,0.19,709,0.000136,0.2,183,476],[258,0.19,993,0.00022400000000000002,631,125,122],[268,0.28,962,0.000169,325,0.0599,193],[0.34,0.23,936,3,0.0455,445,381],[368,0.14,883,0.000453,0.87,351,107],[179,0.02,972,0.00000715,0.38,0.2,144],[338,0.24,855,0.00000716,184,118,386],[311,0.24,945,0.0000123,286,0.0915,386],[239,0.09,508,0.00375,0.0334,258,227],[195,0.14,955,437,769,903,234],[209,0.1,0.87,0.0216,878,482,0.0929],[447,0.18,941,0.00006159999999999999,155,0.0935,577],[343,0.32,942,0.000026300000000000002,0.0136,0.0701,366],[211,0.09,988,0.0000384,0.0481,318,0.0393],[336,0.24,688,0.0014199999999999998,0.000472,158,245],[503,0.44,923,0.00119,0.00047400000000000003,117,519],[402,0.18,686,0.008440000000000001,453,0.92,144],[252,0.17,729,0.0017,0.0458,0.0515,0.17],[496,0.19,952,0.00000417,611,281,173],[524,0.31,717,0.005379999999999999,209,0.0922,381],[457,0.22,718,0.000021899999999999997,0.0214,385,162],[234,0.11,728,0.0791,0.0006219999999999999,0.0557,161],[363,0.29,915,0.0052899999999999996,0.0563,0.3,339],[402,0.13,817,0.0012699999999999999,0,0.11,0.57],[514,0.28,958,0.007809999999999999,0.00000892,0.0827,341],[495,0.05,873,0.0000115,0.00439,492,573],[451,0.17,923,0.000524,0.00728,0.0968,539],[526,0.06,728,0.000133,841,178,172],[434,0.18,865,0.000132,0.0873,279,214],[426,0.05,136,918,0.00073,0.0992,106],[425,0.39,677,165,0.00000435,158,197],[524,0.27,342,938,0.0010199999999999999,132,165],[504,0.21,542,254,0.00829,244,138],[451,0.3,898,0.000027600000000000003,0.00507,268,179],[334,0.32,531,0.00183,0.00294,0.31,102],[531,0.24,0.66,0.000417,0.000932,267,0.0406],[252,0.06,718,0.0019100000000000002,0.0561,0.0721,147],[459,0.19,643,0.0026,569,159,0.0563],[373,0.22,912,0.00011899999999999999,0.00359,395,61],[441,0.26,828,0.000132,763,0.0875,338],[771,0.4,457,539,0.00031099999999999997,104,576],[738,0.17,0.87,0.0544,905,119,389],[352,0.39,895,0.03,0.00000181,105,638],[177,0.37,0.0040100000000000005,953,868,244,159],[631,0.17,732,0.00292,0.00072,168,773],[289,0.23,0.73,644,732,373,284],[448,0.04,903,325,0,398,225],[588,0.04,676,0.0294,0.000118,846,515],[0.8,0.25,764,0.0009480000000000001,0.000739,0.0596,0.58],[304,0.16,927,0.0000123,278,294,155],[163,0.23,374,591,409,486,319],[668,0.07,866,0.0015300000000000001,915,403,861],[785,0.11,711,155,905,0.0669,964],[734,0.12,889,0.000178,803,328,355],[635,0.44,832,0.0238,384,223,693],[0.5,0.14,982,0.009859999999999999,0.9,196,0.61],[351,0.03,345,625,0.19,431,251],[0.63,0.38,865,0.0009660000000000001,607,817,742],[682,0.34,607,0.000024,384,178,509],[407,0.06,966,0.0000124,0.86,356,0.15],[303,0.12,948,0.0000118,0.32,341,134],[356,0.02,338,658,0.0846,391,241],[685,0.19,494,117,0.00366,0.0915,959],[664,0.26,961,0.000984,934,191,856],[652,0.34,983,0.000729,0.00108,347,428],[469,0.27,812,0.00008690000000000001,0.0000199,337,422],[0.0642,0.2,304,303,927,76,0.0321],[706,0.17,967,0.000737,0.00000422,313,716],[199,0.65,622,0.00745,794,204,142],[503,0.18,936,0.00000516,593,0.15,0.24],[414,0.28,933,0.000338,0.00619,0.26,433],[595,0.29,868,0.000319,292,739,373],[524,0.4,944,0.00513,0.0269,236,532],[661,0.32,0.78,0.00744,782,126,804],[513,0.25,965,0.0000301,281,525,345],[562,0.36,995,0.0135,0.0268,0.0728,197],[537,0.2,774,0.00015800000000000002,164,544,474],[613,0.24,662,0.0022,817,85,0.0547],[623,0.16,0.84,0.00031,0.00225,208,484],[0.52,0.23,931,0.000041200000000000005,736,0.0857,395],[531,0.09,928,0.000797,621,138,212],[496,0.08,696,0.00279,313,312,185],[484,0.16,767,0.00158,765,111,0.0472],[512,0.47,952,0.00385,0.07,211,0.51],[421,0.24,965,0.00000693,0.0251,219,637],[526,0.29,893,0.000408,0.00000614,0.0603,0.61],[465,0.43,829,0.000154,0.00445,324,255],[393,0.15,833,0.00032900000000000003,0.00318,214,523],[171,0.28,433,0.0539,868,104,0.0335],[449,0.39,814,0.00897,399,112,199],[605,0.38,842,0.000314,0.00158,257,0.46],[333,0.27,666,504,971,394,439],[466,0.22,987,0.0008449999999999999,0.00000262,719,255],[208,0.16,489,0.00941,951,0.0649,114],[0.46,0.35,772,0.00705,254,116,196],[437,0.3,816,0.0000256,0.00007979999999999999,109,326],[482,0.31,992,0.0000348,0.0605,123,434],[565,0.63,949,0.000046399999999999996,0.0000107,0.0822,0.63],[252,0.44,596,0.00462,0.000283,112,0.19],[0.49,0.14,866,0.00161,643,424,535],[496,0.31,696,0.00279,313,312,185],[589,0.31,886,3,0.007809999999999999,434,462],[514,0.32,982,0.0043100000000000005,0.0000501,968,227],[589,0.52,696,0.0000865,0.0000343,0.0779,933],[477,0.23,0.97,0.000121,0.0107,308,675],[486,0.33,841,0.00473,0.000825,0.0708,157],[562,0.25,838,0.000547,88,416,359],[629,0.07,971,0.00283,0.0164,0.0961,432],[389,0.23,927,0.0207,0.00307,943,217],[418,0.22,386,0.0323,192,347,0.0378],[434,0.41,962,0.00558,301,223,286],[551,0.39,976,0.00257,0.00019099999999999998,328,842],[518,0.36,0.95,0.00419,0.0414,221,523],[474,0.33,895,0.00041799999999999997,0.0508,442,271],[639,0.27,882,0.000346,541,0.0803,353],[441,0.22,821,0.0000249,0.0000735,0.11,321],[526,0.23,985,0.000618,389,294,441],[444,0.15,706,0.0000312,793,109,432],[564,0,837,0.00047599999999999997,212,354,413],[485,0.58,907,0.00302,0.00617,326,0.46],[592,0.24,983,0.00114,0,258,0.28],[0.4,0.35,853,0.000363,0.00198,241,403],[478,0.2,948,0.0185,0,165,556],[403,0.16,941,0.0037799999999999995,287,876,0.0909],[545,0.49,906,0.000194,0.0162,303,233],[461,0.22,913,0.000696,771,0.0911,417],[728,0.17,965,0.00822,908,164,911],[529,0.25,946,0.00108,0.0613,102,0.48],[346,0.39,815,0.008490000000000001,878,117,154],[349,0.35,955,0.00247,0,0.29,536],[177,0.05,764,0.00042,0.00011499999999999999,851,253],[336,0.34,924,0.0747,0.0022600000000000003,137,0.4],[465,0.43,973,0.000151,0.000685,241,674],[0.61,0.6,824,0.0136,0.00000175,0.0606,822],[435,0.59,987,0.000195,0.0847,268,0.0993],[301,0.56,813,0.000674,0.0006309999999999999,197,234],[344,0.37,751,0.00441,0.0285,133,567],[298,0.23,693,0.0010400000000000001,134,131,251],[362,0.35,976,0.000303,0.0000368,0.0496,545],[224,0.21,964,106,0.00010400000000000001,314,358],[0.34,0.27,621,0.00000733,0.0794,0.11,317],[304,0.33,742,0.00392,306,231,249],[214,0.18,992,0.0000627,524,0.0769,209],[693,0.2,807,0.0194,0.00000267,137,0.95],[208,0.25,808,0.00000538,0.00765,0.21,291],[579,0.77,824,0.00206,0.00903,59,0.64],[199,0.26,988,79,74,323,197],[0.35,0.22,991,0.0213,0.000718,126,456],[387,0.24,988,0.00299,0.000589,0.0541,271],[0.27,0.36,983,0.0017699999999999999,0.00000388,333,321],[0.13,0.33,957,0.000843,0.0966,0.52,523],[0.41,0.3,0.98,0.008440000000000001,0.0439,476,0.0956],[326,0.38,979,0.00000448,414,676,188],[0.51,0.27,966,0.00116,0.0009289999999999999,183,367],[507,0.1,479,0.0388,0,118,114],[379,0.4,991,0.0000639,0.0011300000000000001,0.8,0.0562],[265,0.52,937,0.00227,526,161,531],[287,0.26,996,0.0438,0.000011400000000000001,496,152],[0.0777,0.27,953,0.0009570000000000001,0.0488,718,132],[333,0.4,944,181,0.000664,349,398],[321,0.19,0.95,0.00223,0,253,523],[493,0.11,698,0.0141,0,119,277],[254,0.54,985,0.000052600000000000005,363,0.0558,0.0485],[274,0.4,964,0.0000201,0.0337,979,115],[373,0.4,0.92,0.000026300000000000002,0.0188,989,126],[311,0.41,874,0.006959999999999999,0.0000117,0.0861,492],[403,0.36,988,0.000048200000000000006,0.0141,266,106],[371,0.29,934,0.000997,0.00031299999999999996,951,115],[431,0.4,947,0.000779,0.00025299999999999997,356,363],[437,0.53,948,0.0007160000000000001,0.000261,146,371],[292,0.43,0.94,0.00263,0.0018100000000000002,984,215],[357,0.24,651,0.000138,0.006670000000000001,375,685],[234,0.24,931,0.0000134,919,134,417],[487,0.64,944,0.000135,601,0.0905,376],[251,0.23,956,0.00927,0.000027000000000000002,138,352],[533,0.5,983,0.00118,0.0000313,378,393],[311,0.22,765,0.0000785,0.78,148,459],[497,0.5,904,0.000389,0.00122,0.0939,425],[356,0.21,781,0.0867,0.009009999999999999,309,374],[449,0.3,647,0.0119,0.000041700000000000004,0.0907,124],[201,0.32,939,0.0011300000000000001,603,173,678],[239,0.34,0.96,0.00215,185,855,269],[668,0.29,767,0.008579999999999999,0.00021899999999999998,378,829],[451,0.23,932,0.0255,0.000105,0.0983,168],[229,0.05,786,4,0.000133,954,171],[439,0.05,0.88,0.000503,221,537,611],[323,0.52,914,0.00265,0.000381,953,183],[212,0.19,889,0.0020800000000000003,0.00224,978,119],[322,0.38,972,0.00000559,675,954,0.0375],[0.22,0.29,952,0.0007059999999999999,0.00020299999999999997,0.37,0.35],[211,0.34,845,12,0.00507,148,0.16],[278,0.49,0.97,0.000144,0.0481,966,142],[292,0.2,987,0.000513,0.00000553,984,0.24],[235,0.08,782,0.000731,0.0015199999999999999,134,273],[418,0.17,843,0.0912,0.00000801,0.0943,0.33],[221,0.5,988,0.000049,0.0104,0.27,0.0894],[321,0.27,0.95,0.00223,0,253,523],[273,0.2,979,0.00000258,736,354,277],[444,0.7,703,0.00112,0.0761,127,425],[291,0.26,873,0.0736,0.00205,176,456],[349,0.14,976,0.00021600000000000002,0.0000347,949,246],[235,0.11,998,0.0000312,0.0107,0.18,484],[295,0.23,991,0.0634,712,306,295],[271,0.59,985,0.0005679999999999999,0.00112,0.0809,351],[341,0.5,982,0.000157,0.00246,412,81],[496,0.32,0.62,0.00386,0.00000147,114,275],[232,0.15,998,0.00003289999999999999,0.0123,142,508],[239,0.47,976,0.000109,362,954,123],[399,0.3,988,0.00435,0.00000137,592,211],[403,0.17,847,0.0722,0.0000198,108,323],[0.39,0.31,947,0.00515,0.000025300000000000002,538,171],[271,0.39,0.74,0.00395,0.0289,0.0828,346],[448,0.17,0.94,0.0000699,173,102,339],[265,0.43,959,0.000047600000000000005,0.14,977,0.0898],[212,0.18,0.84,0.0141,0.0059700000000000005,147,174],[217,0.18,913,0.000354,0.0342,0.0636,0.59],[349,0.34,864,0.000433,891,173,499],[237,0.17,764,0.000824,0.00434,183,276],[446,0.28,931,0.006640000000000001,194,199,517],[212,0.25,0.84,0.0141,0.0059700000000000005,147,174],[403,0.23,978,0.000135,0.0000353,314,119],[249,0.2,923,0.00322,0.000557,116,116],[257,0.3,915,0.000549,0,153,0.51],[496,0.38,572,0.0126,0,0.1,252],[396,0.12,948,0.00266,0.0000984,358,344],[284,0.33,942,0.0126,0.00433,351,183],[578,0.39,815,0.0314,0.00011399999999999999,114,518],[371,0.3,879,0.00000388,0.00000862,322,491],[339,0.51,945,0.0000878,0.0000151,0.2,476],[579,0.43,914,0.0000984,0.000901,153,512],[475,0.18,934,0.000768,0.0000369,123,381],[0.4,0.31,987,0.0000312,617,146,486],[535,0.17,985,0.0000369,0.0628,67,159],[232,0.17,946,0.0000295,0.0318,322,432],[0.51,0.34,993,0.000022,0.0224,0.22,372],[401,0.16,849,0.00020299999999999997,0.0000132,155,444],[435,0.2,965,0.00010400000000000001,0.00000147,359,586],[245,0.24,876,0.0000132,102,648,343],[584,0.31,759,0.000459,0.00000388,102,71],[0.54,0.19,988,0.000043700000000000005,66,0.0578,149],[489,0.17,956,0.0000502,29,252,506],[493,0.22,993,0.0007700000000000001,0.0000359,252,207],[743,0.14,115,0.49,0,284,765],[116,0.08,742,0.00011399999999999999,289,0.95,0.63],[275,0.07,977,0.00575,0.00027400000000000005,955,236],[396,0.17,939,47,0.000429,205,557],[222,0.15,945,0.0000037000000000000006,901,0.18,229],[196,0.08,835,0.0000046,821,113,214],[493,0.27,993,0.0007700000000000001,0.0000359,252,207],[294,0.13,937,0.0000686,0.00471,342,307],[542,0.23,996,0.0008810000000000001,0,379,169]];var statistics$2={danceability:{count:308,mean:351.9369756494,std:177.941736142,min:0.0642,"25%":238.5,"50%":351,"75%":478.75,max:785},popularity:{count:308,mean:0.2498051948,std:0.1373408266,min:0,"25%":0.16,"50%":0.23,"75%":0.33,max:0.77},energy:{count:308,mean:774.0679821753,std:296.1412424319,min:0.00401,"25%":718,"50%":906.5,"75%":963.25,max:998},acousticness:{count:308,mean:40.9806956957,std:163.1451038417,min:0.00000109,"25%":0.00006035,"50%":0.0007525,"75%":0.00672,max:953},instrumentalness:{count:308,mean:204.907109477,std:313.3436522636,min:0,"25%":0.00067975,"50%":0.03445,"75%":365.75,max:971},liveness:{count:308,mean:252.9452220779,std:262.4485181884,min:0.0203,"25%":44.4875,"50%":179,"75%":347.5,max:989},valence:{count:308,mean:280.7883938312,std:219.1640342526,min:0.0321,"25%":123.75,"50%":251,"75%":422.75,max:964}};var spotify = {names:names$1,labels:labels$2,columns:columns$2,values:values$2,statistics:statistics$2};

var spotify$1 = /*#__PURE__*/Object.freeze({
__proto__: null,
names: names$1,
labels: labels$2,
columns: columns$2,
values: values$2,
statistics: statistics$2,
'default': spotify
});

var names=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,832,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976,977,978,979,980,981,982,983,984,985,986,987,988,989,990,991,992,993,994,995,996,997,998,999,1000,1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1016,1017,1018,1019,1020,1021,1022,1023,1024,1025,1026,1027,1028,1029,1030,1031,1032,1033,1034,1035,1036,1037,1038,1039,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1058,1059,1060,1061,1062,1063,1064,1065,1066,1067,1068,1069,1070,1071,1072,1073,1074,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103,1104,1105,1106,1107,1108,1109,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1120,1121,1122,1123,1124,1125,1126,1127,1128,1129,1130,1131,1132,1133,1134,1135,1136,1137,1138,1139,1140,1141,1142,1143,1144,1145,1146,1147,1148,1149,1150,1151,1152,1153,1154,1155,1156,1157,1158,1159,1160,1161,1162,1163,1164,1165,1166,1167,1168,1169,1170,1171,1172,1173,1174,1175,1176,1177,1178,1179,1180,1181,1182,1183,1184,1185,1186,1187,1188,1189,1190,1191,1192,1193,1194,1195,1196,1197,1198,1199];var labels$1=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10];var columns$1=["x","y","z"];var values$1=[[354.353,59.583,25.541],[355.459,122.502,45.178],[359.823,55.527,22.241],[360.121,53.385,22.519],[362.306,124.112,51.508],[362.623,122.319,44.728],[363.843,64.337,21.555],[364.286,69.572,21.051],[364.476,126.986,51.558],[366.852,27.708,22.695],[371.849,56.09,14.62],[372.03,57.295,15.459],[373.438,43.106,16.058],[373.688,119.783,35.191],[375.985,34.369,17.926],[378.71,81.16,14.5],[379.469,129.094,52.416],[379.845,105.958,22.279],[380.772,49.885,13.777],[383.903,123.274,37.927],[383.934,130.246,46.63],[389.241,93.401,15.352],[390.074,78.891,13.047],[391.72,129.545,51.298],[392.01,73.567,14.164],[393.125,131.446,54.835],[394.645,50.778,12.397],[394.795,129.578,42.795],[395.658,100.036,14.609],[395.832,100.381,14.591],[396.046,115.856,24.576],[397.339,103.288,17],[397.648,82.606,11.272],[398.221,95.162,13.147],[402.134,132.19,56.155],[406.357,118.833,25.78],[406.616,124.073,34.317],[409.853,76.051,9.889],[410.68,79.499,10.019],[415.588,113.356,78.244],[416.705,116.919,70.276],[417.45,124.172,36.812],[419.873,113.574,26.125],[420.29,124.023,69.898],[420.359,81.692,11.35],[420.42,86.531,12.662],[420.788,84.461,11.773],[422.569,97.365,16.122],[423.18,114.654,79.764],[425.167,128.447,78.845],[425.631,126.095,70.405],[426.471,124.768,64.651],[427.534,123.779,79.755],[428.33,128.991,83.211],[429.292,96.764,140.609],[429.364,107.745,23.136],[430.657,105.731,24.419],[430.95,123.264,68.878],[431.167,87.232,13.731],[431.208,100.579,21.053],[431.329,128.067,76.194],[431.399,114.906,69.995],[431.491,125.977,72.387],[431.574,96.006,18.595],[433.268,123.058,65.093],[433.652,129.991,76.062],[434.303,119.663,39.684],[434.318,130.289,75.931],[435.454,116.928,69.786],[435.528,110.925,127.056],[435.579,119.892,78.288],[435.649,109.348,79.654],[435.745,121.515,88.092],[435.924,122.617,48.265],[436.158,122.22,47.573],[436.392,118.812,37.67],[436.477,104.707,75.533],[437.245,96.162,137.681],[437.431,123.604,60.153],[438.459,117.008,80.622],[438.578,120.52,96.904],[438.684,121.887,92.275],[438.801,93.613,19.564],[439.029,108.977,28.73],[439.255,118.705,104.14],[440.145,119.045,83.113],[440.695,98.877,22.491],[441.191,89.323,139.957],[441.25,85.791,14.972],[441.833,116.011,70.434],[442.914,114.101,108.861],[443.33,118.497,65.576],[443.518,126.466,74.857],[444.366,125.088,73.591],[444.454,116.102,45.955],[444.914,124.999,73.83],[446.091,118.096,97.765],[446.32,108.117,37.591],[446.418,112.587,69.406],[446.561,103.085,70.042],[447.296,100.826,127.992],[447.379,117.234,54.135],[447.596,99.127,129.413],[448.406,104.062,33.813],[449.008,102.095,31.648],[449.634,98.988,29.41],[450.125,98.163,72.331],[452.681,122.605,75.442],[453.142,114.327,93.005],[454.435,113.988,74.415],[455.156,104.69,40.915],[455.806,114.404,77.015],[455.868,113.568,57.391],[456.267,92.907,126.052],[457.305,107.806,80.309],[457.732,106.54,82.02],[457.816,113.342,73.902],[457.894,107.921,105.22],[458.229,114.887,75.351],[459.045,94.898,120.775],[459.254,116.189,76.604],[460.066,109.491,79.619],[460.569,108.84,69.285],[461.95,92.466,36.902],[464.77,111.782,75.947],[466.344,104.893,79.541],[466.545,106.845,79.988],[467.705,107.101,69.15],[468.342,100.115,52.13],[470.518,107.071,73.479],[475.889,43.567,142.015],[477.015,44.943,147.713],[477.614,85.003,124.663],[479.374,65.086,139.898],[479.378,88.958,122.444],[480.505,80.876,131.561],[480.914,97.615,95.685],[483.147,80.128,114.64],[485.037,84.136,124.033],[485.186,82.113,129.894],[486.749,48.092,137.739],[488.488,67.066,140.031],[490.643,52.364,136.161],[491.216,53.963,135.67],[249.089,-170.062,114.667],[255.729,-160.912,100.235],[255.885,-161.085,111.705],[257.346,-156.339,98.755],[257.604,-158.037,110.227],[257.794,-163.745,88.652],[258.151,-169.225,83.891],[258.469,-155.795,101.619],[259.845,-153.118,97.26],[263.445,-164.012,85.522],[263.467,-156.427,103.682],[263.518,-160.248,109.436],[264.082,-134.478,106.777],[264.218,-145.438,93.042],[264.977,-153.007,88.869],[265.055,-170.489,121.479],[265.829,-171.055,122.253],[265.901,-161.529,89.305],[266.557,-171.04,117.7],[266.861,-138.697,111.095],[267.263,-157.206,113.654],[270.585,-139.415,109.982],[270.769,-127.391,87.47],[271.226,-115.051,98.89],[271.297,-166.429,81.415],[271.471,-113.972,116.199],[272.093,-124.37,113.56],[272.87,-129.549,109.27],[273.022,-136.385,111.969],[273.715,-120.397,113.585],[273.739,-146.56,86.577],[273.827,-116.553,86.517],[274.072,-133.517,99.042],[274.176,-124.639,98.738],[274.487,-98.419,110.18],[276.485,-122.7,87.634],[276.486,-117.762,112.462],[276.651,-108.33,113.916],[276.68,-114.098,113.63],[277.112,-121.911,102.091],[278.007,-125.97,88.561],[278.041,-127.059,91.53],[279.231,-124.658,95.641],[280.927,-88.277,100.728],[284.248,-74.06,101.677],[311.221,-169.442,34.356],[313.322,-168.532,50.247],[315.725,-166.812,37.045],[315.806,-170.804,51.863],[316.788,-166.793,50.876],[317.654,-168.261,34.334],[318.112,-78.366,50.336],[318.929,-165.503,38.499],[322.118,-72.82,46.518],[324.244,-82.027,54.711],[324.827,-74.624,37.945],[325.654,-115.387,59.705],[325.829,-168.795,60.946],[326.1,-166.05,59.425],[326.347,-165.697,65.172],[326.39,-117.053,37.051],[327.015,-167.301,65.045],[327.602,-164.59,47.489],[328.325,-143.868,46.693],[328.589,-149.539,46.861],[328.66,-162.441,53.826],[329.34,-137.739,53.086],[329.669,-113.433,52.031],[330.128,-62.651,42.611],[330.524,-151.377,36.963],[330.827,-167.732,26.081],[331.631,-159.972,62.37],[331.634,-95.128,38.552],[332.751,-151.351,51.591],[333.183,-128.212,58.376],[334.06,-161.131,48.908],[334.449,-137.19,54.495],[334.806,-119.93,60.516],[334.859,-147.129,44.621],[335.221,-144.981,60.188],[335.354,-128.255,47.626],[336.587,-132.143,59.13],[336.744,-120.344,39.162],[336.793,-148.487,61.6],[337.14,-120.839,41.661],[337.844,-146.495,55.391],[337.973,-136.486,40.96],[338.332,-125.091,36.09],[338.381,-125.946,36.138],[339.45,-138.543,46.903],[340.053,-131.019,56.025],[340.23,-143.664,58.296],[341.134,-149.024,36.023],[341.424,-139.787,62.063],[342.124,-151.764,58.707],[342.395,-136.704,37.75],[342.539,-133.432,58.853],[343.181,-136.662,36.357],[344.336,-155.134,59.409],[63.13,92.752,11.44],[65.138,106.429,46.867],[65.515,90.501,142.013],[66.09,87.486,135.328],[66.618,83.822,143.842],[67.77,80.533,-10.63],[68.222,96.994,129.09],[69.406,90.553,9.662],[69.898,86.937,-9.066],[70.433,102.137,16.257],[72.712,75.351,-2.868],[72.952,71.457,160.312],[75.036,65.453,-12.28],[77.703,81.029,-2.106],[79.496,82.604,-9.382],[80.023,71.554,149.798],[81.745,59.995,166.551],[83.202,66.942,165.467],[85.148,73.021,158.517],[87.201,66.82,154.847],[90.977,53.335,169.04],[94.229,55.861,-10.24],[95.899,39.525,-13.196],[97.335,43.265,-21.748],[99.032,51.903,-20.891],[99.134,54.21,-19.491],[100.779,41.618,-7.672],[107.633,45.468,-17.265],[112.878,40.821,154.891],[119.185,31.379,148.119],[120.036,27.291,3.303],[124.548,36.524,157.364],[126.815,33.805,159.394],[128.923,21.846,-7.627],[132.371,24.82,12.417],[141.587,19.065,136.736],[144.336,23.195,131.328],[144.737,23.261,25.186],[144.977,30.654,139.052],[148.602,24.173,29.318],[149.83,19.834,30.136],[155.016,23.351,14.745],[157.009,21.153,138.81],[157.434,17.003,33.601],[158.672,20.651,136.944],[159.052,26.107,137.947],[163.105,25.545,23.467],[164.995,25.779,25.348],[166.662,21.875,43.465],[168.507,37.439,108.122],[171.952,28.021,125.032],[175.499,25.631,48.228],[176.705,27.465,110.721],[176.942,59.777,60.126],[178.981,65.253,62.721],[178.997,59.527,58.056],[179.575,53.821,64.595],[179.752,55.317,92.787],[180.627,67.855,62.18],[181.807,53.431,69.734],[182.509,57.71,56.342],[184.391,56.548,77.86],[184.453,52.614,69.051],[186.715,42.156,51.376],[187.291,50.756,74.014],[187.475,50.413,86.562],[187.584,53.031,78.85],[187.965,55.886,53.428],[188.977,48.326,53.622],[189.106,64.227,83.75],[189.924,57.091,77.905],[192.89,51.113,59.931],[194.845,50.645,91.054],[198.111,63.021,74.335],[199.902,62.445,68.794],[288.911,69.232,124.172],[292.762,82.134,122.612],[297.169,71.618,119.137],[298.417,81.039,120.574],[299.351,80.689,121.715],[299.711,77.348,118.619],[302.395,123.146,102.646],[305.736,109.455,119.182],[306.822,94.636,114.25],[307.599,127.34,101.402],[308.383,61.032,116.196],[308.776,111.914,122.727],[309.067,103.704,92.486],[310.234,72.462,116.598],[310.4,61.067,118.035],[310.876,128.956,101.077],[310.944,111.742,82.104],[311.289,117.429,116.693],[311.754,98.054,88.649],[313.686,77.822,118.901],[315.377,85.656,119.307],[316.89,80.183,122.848],[317.242,112.294,84.801],[318.15,66.955,109.473],[318.209,95.961,100.262],[318.278,88.781,101.613],[318.457,87.825,115.354],[318.582,76.161,112.666],[318.737,96.565,77.749],[318.888,79.308,126.613],[319.008,110.576,106.955],[319.052,111.914,92.285],[319.325,91.556,105.881],[321.145,107.648,106.863],[321.4,109.686,109.177],[321.448,66.008,128.286],[321.741,95.021,120.798],[322.114,98.681,110.059],[322.444,68.877,130.399],[322.622,106.67,91.94],[322.74,100.48,86.367],[323.157,92.437,126.976],[323.302,102.196,91.635],[323.423,118.743,115.111],[323.828,132.236,96.277],[324.394,112.706,111.001],[324.664,103.529,109.948],[327.464,73.012,112.901],[327.614,91.273,131.845],[327.866,42.288,116.76],[328.191,80.44,136.049],[328.957,110.257,89.024],[330.871,106.805,126.311],[331.134,106.6,90.032],[332.3,22.379,118.214],[332.673,108.154,103.596],[333.648,88.805,113.205],[333.711,105.003,107.479],[335.551,27.471,122.687],[335.761,83.493,148.301],[335.805,85.577,119.544],[337.111,54.622,125.324],[337.166,20.599,118.952],[337.394,38.942,124.508],[340.414,88.162,140.296],[340.841,83.447,120.244],[341.208,88.292,120.711],[341.364,101.24,116.345],[341.809,26.587,122.415],[342.419,55.425,126.796],[342.758,106.648,111.817],[343.515,88.762,119.081],[344.126,55.332,125.746],[344.466,16.142,124.258],[346.196,17.656,122.942],[347.292,17.839,123.506],[348.642,78.977,128.14],[349.236,41.205,128.503],[349.51,23.88,126.087],[350.26,87.84,127.652],[353.787,11.366,121.976],[357.101,27.432,130.418],[358.861,104.252,125.994],[358.965,105.25,125.581],[360.176,52.696,133.493],[360.356,66.25,132.672],[362.091,56.333,133.394],[366.014,104.702,123.592],[369.164,102.931,126.99],[369.804,75.362,136.159],[370.577,74.304,136.192],[372.29,38.335,138.252],[375.332,45.144,140.138],[382.176,50.832,142.742],[386.978,94.738,136.251],[387.189,75.097,142.576],[387.439,70.55,142.162],[388.366,87.06,139.346],[395.143,98.512,139.965],[398.836,91.142,143.595],[403.161,66.268,145.667],[407.049,81.976,146.063],[414.926,80.163,147.204],[417.864,93.026,143.954],[418.905,100.136,139.882],[418.986,102.406,139.315],[320.47,126.231,77.663],[324.268,101.907,71.16],[324.795,104.172,67.997],[324.98,132.401,75.494],[326.012,107.322,66.438],[326.518,123.192,75.15],[327.497,104.395,62.074],[327.713,111.13,67.609],[330.889,106.141,60.358],[333.03,152.901,75.185],[333.109,143.202,77.811],[333.406,139.402,78.01],[333.604,124.428,74.325],[333.717,104.392,73.978],[333.879,112.371,81.447],[334.864,119.24,63.943],[335.001,114.39,70.872],[335.321,121.57,75.007],[335.726,110.268,65.161],[336.078,116.592,64.361],[337.366,146.15,74.127],[337.463,111.378,96.901],[338.556,113.119,53.732],[339.028,113.356,68.531],[339.915,125.161,73.902],[341.194,116.04,100.171],[341.863,114.23,46.311],[341.9,106.866,108.647],[343.138,128.894,75.507],[343.438,113.27,69.108],[344.121,107.461,76.757],[344.126,121.002,58.106],[344.713,119.978,87.621],[344.75,120.053,86.978],[345.308,119.256,88.697],[345.794,145.425,75.834],[346.543,116.796,50.136],[347.154,112.098,72.018],[347.78,140.021,79.641],[348.642,118.286,45.356],[349.792,110.833,72.857],[350.816,124.012,96.77],[351.475,128.443,94.429],[351.506,124.057,86.387],[351.73,123.288,83.536],[356.246,126.412,51.977],[356.8,127.96,71.862],[357.123,123.511,68.817],[357.693,135.999,75.544],[358.738,150.969,79.155],[358.899,127.55,57.918],[359.119,130.939,69.295],[359.361,122.041,81.744],[359.486,129.475,97.988],[359.716,137.144,78.358],[360.906,129.318,64.556],[361.143,122.63,70.333],[362.097,121.344,109.36],[362.474,124.728,104.516],[363.336,152.925,77.145],[363.836,114.225,117.229],[364.15,126.44,67.726],[365.413,126.355,63.441],[365.444,141.232,75.973],[365.734,122.392,70.018],[365.764,128.592,64.37],[367.348,129.776,91.333],[368.35,128.009,90.451],[368.546,147.191,78.553],[369.414,128.799,92.134],[371.445,133.062,93.052],[372.294,131.091,100.127],[372.671,123.895,114.672],[373.333,154.898,78.285],[375.248,116.667,80.722],[375.508,117.422,122.717],[376.713,150.217,75.521],[376.904,131.257,81.512],[377.19,130.924,66.675],[377.245,109.538,126.956],[377.575,111.17,127.397],[378.115,133.234,74.899],[378.699,122.017,80.76],[379.959,131.213,92.025],[380.811,131.2,65.433],[381.726,117.149,80.475],[381.729,125.759,67.141],[382.024,127.06,66.368],[382.121,117.141,80.407],[384.059,147.401,77.411],[384.616,123.634,83.532],[384.952,140.703,77.507],[385.091,117.182,123.821],[385.471,119.645,80.568],[386.275,124.277,120.15],[386.429,128.604,86.75],[386.998,136.281,74.911],[387.088,120.029,120.469],[387.48,132.011,72.573],[387.535,123.32,70.225],[387.959,135.086,84.211],[389.498,138.325,74.814],[389.55,139.786,75.038],[389.709,130.216,101.332],[389.74,134.122,65.904],[390.649,140.52,75.19],[391.545,131.575,60.629],[392.941,114.574,74.945],[395.139,122.479,80.667],[396.142,121.061,70.983],[396.174,132.262,74.671],[396.411,124.366,119.217],[398.21,132.388,56.398],[399.57,131.368,97.206],[399.819,130.803,89.363],[400.244,131.432,70.653],[400.445,116.404,75.329],[400.607,124.306,68.798],[401.551,124.767,68.166],[401.926,114.133,74.572],[403.293,125.152,84.139],[403.515,130.247,64.605],[404.078,133.963,76.947],[405.259,133.967,75.113],[406.772,131.453,84.439],[406.998,131.235,65.752],[407.87,114.856,78.743],[407.962,130.673,57.02],[408.417,126.401,80.658],[411.299,130.168,73.518],[411.546,128.505,99.091],[412.792,129.886,81.635],[414.592,133.872,75.709],[415.469,126.235,69.661],[415.686,123.654,119.113],[415.823,122.532,118.696],[417.736,124.477,80.241],[420.914,126.636,99.023],[425.589,123.397,112.193],[426.718,135.696,76.175],[426.955,137.491,75.568],[274.17,26.68,77.96],[278.375,20.24,77.293],[279.327,19.669,77.283],[279.556,29.814,78.015],[281.655,32.503,112.329],[282.242,26.506,113.853],[282.322,34.536,75.012],[282.56,39.221,35.702],[282.598,23.465,73.169],[283.204,40.575,124.837],[283.229,13.044,122.38],[284.58,-58.73,107.117],[284.808,-52.583,119.056],[284.906,26.308,125.157],[284.932,44.934,75.206],[285.145,42.94,35.056],[285.179,-40.066,120.795],[285.279,0.969,122.702],[285.529,-56.992,107.795],[285.79,19.07,124.963],[285.883,31.145,35.951],[287.45,44.648,113.721],[288.466,14.474,77.953],[288.645,-71.899,116.887],[288.757,27.066,72.143],[289.046,-63.638,111.695],[289.296,22.226,34.973],[289.336,51.111,119.966],[289.492,49.686,117.027],[289.675,23.291,79.79],[289.857,42.46,37.01],[290.254,39.658,112.307],[290.325,57.138,83.925],[290.328,55.257,116.402],[290.504,11.387,76.164],[290.709,11.489,75.917],[290.786,37.974,111.702],[291.117,36.546,84.537],[291.55,62.449,110.065],[292.093,61.193,68.498],[292.568,44.583,108.038],[292.734,-33.111,105.616],[292.788,23.095,77.018],[292.867,36.958,65.093],[292.895,-79.433,116.35],[293.09,28.988,112.726],[293.212,46.533,133.236],[294.152,45.369,88.189],[294.683,-13.288,126.736],[294.882,51.397,126.005],[294.942,-39.006,124.187],[294.974,-51.453,122.56],[295.113,11.091,24.033],[295.947,10.985,73.131],[296.272,-65.592,119.317],[296.989,-51.008,114.649],[297.913,16.006,81.589],[298.075,17.482,79.503],[298.552,11.116,122.032],[298.762,-51.156,115.621],[298.875,-0.582,33.308],[298.918,41.995,43.036],[299.025,30.518,124.683],[299.409,5.251,74.613],[300.118,-23.84,116.006],[300.756,-53.184,106.561],[300.807,-51.549,108.257],[301.976,-51.246,106.702],[302.736,11.872,39.349],[304.093,14.231,69.764],[304.307,38.488,126.435],[304.387,35.778,124.785],[304.39,9.072,72.922],[305.514,31.035,97.61],[306.657,54.244,27.404],[307.727,-47.83,34.711],[308.519,-45.646,42.244],[308.526,-23.941,39.23],[309.192,-34.375,48.366],[309.207,49.911,50.788],[309.572,-32.43,26.928],[309.811,2.104,71.854],[310.225,60.46,50.686],[312.525,-48.02,51.148],[314.837,-13.833,34.188],[315.572,-3.759,77.526],[317.028,-62.907,43.99],[317.032,38.088,112.103],[317.13,0.26,80.866],[317.195,-4.614,81.536],[317.199,13.395,49.422],[317.2,-3.441,83.746],[318.057,42.268,113.558],[318.074,-6.247,78.435],[318.402,-51.882,52.93],[318.796,65.045,35.958],[319.733,-33.256,30.748],[319.829,-20.171,25.054],[321.055,4.742,92.294],[321.357,7.191,56.488],[322.464,14.209,108.738],[322.61,22.877,109.887],[322.905,24.11,110.009],[323.476,16.586,110.195],[323.48,25.214,42.174],[323.489,1.439,70.961],[323.587,1.453,70.293],[323.844,29.35,111.396],[325.02,-44.878,46.661],[325.198,-47.527,34.189],[326.101,-8.55,74.54],[326.579,54.835,37.345],[326.966,-46.438,43.328],[329.058,65.343,36.741],[329.29,59.89,36.315],[330.781,23.92,35.441],[331.004,-50.313,42.038],[331.068,-4.733,81.782],[333.045,12.811,43.645],[333.168,9.122,47.589],[333.608,14.665,118.561],[334.385,36.044,31.359],[336.894,57.666,32.13],[337.333,-50.534,28.721],[337.876,4.113,102.127],[338.296,-51.672,31.131],[338.491,-10.809,73.811],[338.531,8.503,113.877],[341.251,39.02,31.159],[342.056,49.358,28.543],[342.279,-42.708,37.056],[342.425,40.618,31.155],[343.508,38.793,30.439],[343.788,41.166,29.974],[347.491,8.292,41.372],[351.001,26.45,26.796],[352.264,20.523,26.502],[354.796,20.226,30.023],[470.411,85.967,33.821],[470.477,88.744,37.978],[471.945,94.389,84.808],[472.772,52.253,12.24],[474.899,101.596,54.73],[475.186,96.991,77.535],[476.074,69.338,18.046],[477.501,95.507,74.217],[478.35,101.136,65.18],[478.566,83.332,56.887],[478.691,98.02,84.606],[478.746,103.207,75.699],[478.941,101.068,74.715],[479.355,97.652,68.262],[479.407,103.039,85.449],[479.859,80.873,29.476],[481.251,67.268,16.324],[481.365,96.481,61.736],[481.732,103.496,83.334],[481.926,35.796,10.661],[482.211,75.231,60.078],[482.806,102.039,62.597],[483.958,40.909,7.888],[484.079,83.684,68.201],[487.268,44.751,28.935],[487.51,49.199,15.312],[487.577,100.065,84.738],[487.857,92.853,78.913],[488.595,46.542,14.75],[488.735,40.412,58.747],[488.884,35.108,49.395],[489.017,44.931,18.164],[489.148,42.948,106.3],[489.243,41.788,41.383],[489.328,65.888,102.192],[489.578,63.186,109.848],[489.662,46.046,26.764],[489.96,84.991,63.21],[490.643,44.117,112.26],[490.855,65.076,56.546],[491.346,47.561,114.48],[491.546,59.793,100.875],[491.568,32.676,82.71],[492.024,80.062,91.056],[492.323,76.57,93.557],[492.962,38.683,88.182],[493.003,60.62,121.455],[493.111,-35.652,120.456],[493.439,96.535,83.611],[493.518,96.507,64.295],[493.597,90.886,75.529],[494.136,86.223,77.796],[494.368,87.65,80.027],[494.488,87.963,82.365],[494.589,95.75,65.917],[495.037,-25.416,112.45],[495.449,88.237,76.184],[495.503,85.853,80.721],[495.791,33.266,114.71],[496.693,86.503,74.67],[497.36,-25.845,110.932],[498.292,35.03,57.537],[498.625,24.866,118.798],[500.28,87.979,83.928],[500.314,44.551,94.44],[501.153,46.06,115.439],[501.87,39.416,98.327],[502.83,45.676,113.142],[502.962,-44.725,114.814],[503.806,-0.649,42.312],[503.921,40.858,96.821],[504.207,-14.79,114.819],[505.803,0.941,33.289],[506.054,80.008,73.694],[506.154,80.135,72.278],[506.235,76.455,71.021],[507.836,18.789,130.166],[508.145,4.099,29.845],[508.288,44.648,52.968],[508.767,36.599,120.966],[509.203,-21.138,43.338],[509.265,30.361,83.486],[509.703,35.541,57.278],[509.705,10.03,27.288],[510.698,22.615,125.223],[510.945,30.677,33.883],[511.241,34.101,32.498],[511.84,23.965,124.35],[511.848,79.516,77.865],[512.308,24.978,32.61],[512.443,71.024,87.371],[513.763,-21.101,30.818],[514.192,77.907,76.507],[514.727,26.749,124.062],[515.881,18.064,82.494],[516.378,68.857,85.122],[517.504,-30.046,30.653],[517.64,64.121,63.996],[518.355,-31.923,30.892],[518.438,65.628,84.537],[518.568,66.508,82.032],[521.721,20.327,86.318],[523.005,61.532,67.771],[523.291,29.03,63.091],[524.629,63.65,72.922],[526.719,35.144,89.207],[529.209,64.497,77.532],[529.518,35.951,60.796],[532.238,48.513,86.757],[533.91,48.858,66.061],[535.031,62.885,76.63],[537.154,54.848,76.665],[540.56,51.919,75.583],[542.587,47.186,78.064],[544.812,33.053,83.416],[546.096,25.635,78.183],[546.581,40.681,74.579],[546.781,26.063,85.262],[548.653,18.667,77.009],[551.636,1.376,76.805],[552.937,-4.798,73.591],[553.082,-21.971,76.136],[553.126,-39.434,74.27],[553.503,-41.611,73.669],[553.894,21.899,75.885],[554.281,-10.585,74.047],[554.597,-43.242,73.792],[556.496,2.272,76.221],[556.73,3.753,75.443],[193.012,94.861,64.524],[194.113,90.702,63.118],[199.41,124.937,67.25],[200.894,121.179,106.459],[201.965,75.149,76.106],[202.114,68.472,96.077],[202.49,125.142,80.111],[204.769,122.95,58.263],[204.831,137.173,78.645],[205.062,101.322,57.608],[205.984,86.643,95.767],[206.048,84.811,78.065],[206.94,121.627,55.677],[207.03,124.119,50.967],[207.144,86.848,70.131],[207.32,124.28,82.833],[208.43,97.247,63.993],[209.324,93.696,96.73],[209.644,90.606,95.176],[210.265,122.255,101.973],[210.604,89.512,69.317],[211.08,137.683,66.592],[211.285,91.03,68.063],[211.391,53.676,80.36],[211.793,109.915,101.915],[212.097,118.106,103.298],[212.14,127.878,48.032],[212.344,122.157,72.104],[212.361,77.335,74.113],[212.793,109.173,110.622],[213.546,143.757,78.319],[213.8,111.58,99.062],[213.92,126.048,116.142],[215.169,105.702,93.734],[215.305,106.842,93.765],[215.77,109.067,115.021],[216.065,79.265,71.523],[216.459,134.504,58.408],[217.219,81.361,89.932],[217.499,142.289,63.733],[217.683,119.231,104.637],[218.587,59.232,71.49],[219.564,75.578,68.132],[219.909,85.402,78.621],[221.868,116.955,96.561],[222.234,116.761,96.015],[222.52,57.19,84.886],[223.852,79.116,69.009],[223.86,87.507,93.517],[224.304,127.917,97.836],[224.543,86.437,66.491],[224.78,148.623,99.842],[225.56,87.402,66.214],[225.753,61.193,66.926],[226.344,109.789,90.41],[228.482,113.035,117.089],[229.447,110.48,70.051],[229.954,159.535,104.318],[230.14,80.343,60.498],[230.635,161.564,104.092],[230.868,73.386,98.824],[231.054,75.413,99.643],[234.467,66.115,72.199],[234.747,160.143,107.761],[235.683,139.567,113.675],[236.205,81.387,65.735],[236.658,101.857,91.41],[237.579,94.147,89.973],[237.9,114.14,87.172],[238.205,129.836,44.208],[238.464,82.154,66.209],[238.647,143.572,118.332],[238.684,80.044,69.308],[238.882,96.866,83.024],[239.03,78.5,70.518],[239.418,167.055,73.285],[239.507,97.776,88.512],[239.674,79.511,89.557],[239.763,112.422,71.654],[240.04,118.613,49.273],[240.335,125.232,113.596],[240.395,79.778,69.639],[240.824,82.186,68.16],[240.849,90.282,56.488],[241.244,89.944,62.006],[241.285,66.801,65.565],[241.58,118.959,57.027],[241.935,145.983,77.968],[243.55,154.523,49.144],[243.646,116.567,98.317],[243.655,83.587,67.046],[244.208,109.928,57.253],[244.522,118.044,50.251],[244.969,112.042,76.765],[245.045,118.892,61.792],[245.425,135.266,81.128],[245.468,159.137,88.287],[245.694,146.662,116.988],[245.9,136.86,75.486],[246.172,137.638,73.64],[246.38,87.641,61.55],[246.553,117.279,75.428],[246.733,105.276,101.485],[246.794,111.305,70.501],[248.32,155.752,94.839],[248.942,117.836,105.142],[249.442,115.89,105.71],[249.905,118.029,91.782],[250.025,116.872,66.847],[250.208,111,79.53],[251.018,133.871,52.715],[251.249,114.827,80.453],[251.391,116.764,94.762],[251.534,151.401,95.702],[252.638,145.701,56.431],[252.988,149.001,60.342],[253.919,115.23,81.438],[255.465,129.887,98.237],[255.513,116.267,70.054],[256.084,118.892,96.966],[258.009,112.336,73.816],[258.319,114.994,82.671],[259.772,118.862,68.06],[260.651,116.618,67.801],[261.294,123.937,83.661],[263.046,129.357,75.948],[263.805,128.252,71.828],[263.927,107.215,73.893],[264.595,122.024,87.266],[265.091,119.111,57.103],[265.58,114.092,64.949],[265.767,120.312,57.961],[265.998,108.469,75.929],[267.884,120.992,74.422],[268.432,116.493,87.391],[268.616,124.92,75.592],[268.765,114.837,93.54],[273.988,113.79,87.37],[275.599,113.819,81.85],[272.197,102.749,76.763],[272.23,105.466,71.582],[272.246,113.11,68.516],[272.895,102.635,79.278],[272.906,116.766,67.492],[273.554,114.514,67.391],[273.718,115.415,65.276],[273.727,109.963,70.408],[274.786,102.654,83.13],[275.965,108.706,84.288],[276.237,106.238,65.837],[276.88,100.988,69.451],[277.098,100.815,82.098],[277.412,104.891,89.928],[277.695,109.181,86.283],[277.973,98.694,80.952],[278.929,99.059,71.378],[279.212,106.35,69.421],[279.66,120.496,72.732],[280.575,106.467,86.51],[281.287,121.086,78.792],[281.974,70.173,35.018],[281.984,102.116,90.055],[282.287,110.039,85.806],[282.425,100.887,68.495],[282.582,102.482,85.978],[283.006,101.743,70.948],[283.747,103.65,69.839],[283.856,110.573,71.264],[284.42,108.155,70.835],[284.543,76.579,33.705],[284.76,69.317,34.246],[285.11,102.74,66.295],[285.816,101.089,83.553],[287.255,110.12,67.312],[289,99.275,90.645],[289.059,110.481,87.205],[289.734,121.412,76.917],[290.216,110.08,68.376],[291.248,74.58,33.583],[291.254,81.014,33.296],[291.968,105.982,70.157],[292.176,99.613,52.262],[293.053,95.365,49.236],[293.195,113.229,68.583],[293.221,107.857,37.257],[293.616,96.679,34.657],[293.779,94.54,38.781],[294.41,97.649,62.769],[296.037,92.932,73.656],[296.462,127.357,78.643],[297.756,71.886,64.626],[297.856,105.857,82.07],[297.895,127.003,78.276],[298.164,125.501,78.077],[298.374,106.281,82.286],[298.485,86.603,64.546],[298.855,96.267,60.097],[300.848,92.452,76.585],[301.549,85.677,62.29],[302.656,96.705,85.863],[303.319,111.558,71.468],[303.916,110.331,72.307],[304.399,105.865,88.035],[304.57,107.061,49.593],[304.815,95.837,65.084],[305.909,109.232,67.785],[305.911,136.036,61.809],[306.405,97.643,44.452],[306.498,100.324,45.857],[306.552,106.701,65.187],[306.901,74.025,32.383],[306.94,86.807,58.975],[307.297,105.687,47.567],[308.904,93.202,38.785],[308.931,97.576,67.891],[309.65,117.217,50.007],[310.83,79.442,34.909],[311.778,79.274,52.2],[311.802,71.089,51.285],[312.859,134.862,59.339],[312.901,105.27,61.181],[313.42,114.215,71.801],[314.161,85.132,36.843],[314.339,117.926,77.217],[316.051,101.74,66.903],[316.115,90.732,49.833],[316.848,107.448,63.339],[317.054,127.696,57.355],[317.477,80.458,43.318],[318.005,96.404,47.788],[318.337,109.708,68.468],[320.337,118.258,40.427],[320.605,98.052,63.967],[322.221,117.435,40.353],[323.894,107.911,62.34],[324.39,113.466,33.078],[324.527,97.458,48.824],[324.884,103.142,20.901],[325.382,88.111,48.162],[325.865,110.327,27.715],[326.695,82.376,18.11],[328.181,95.886,12.743],[331.671,89.271,12.407],[332.671,100.535,16.512],[332.856,97.301,17.42],[333.026,96.671,42.133],[333.625,92.205,39.6],[334.876,85.04,37.614],[335.445,106.111,45.365],[341.685,99.433,39.713],[342.666,64.547,31.932],[342.776,73.641,32.847],[343.08,81.217,31.761],[344.707,105.242,39.989],[345.332,83.012,31.156],[348.017,114.458,41.451],[348.426,110.908,41.773],[348.81,110.848,41.386],[353.116,95.992,31.568],[354.125,84.792,27.758],[354.589,75.904,27.95],[358.474,107.058,35.815],[362.282,104.267,30.653],[365.163,84.139,23.712],[369.33,97.565,22.798],[505.316,-69.209,44.561],[512.036,-62.483,48.169],[514.452,-77.641,39.38],[522.42,-85.002,34.025],[523.343,-95.107,40.387],[523.615,-84.776,48.815],[524.091,-85.035,30.941],[524.255,-73.455,30.375],[525.483,-74.294,52.265],[525.541,-69.492,38.881],[526.724,-56.333,47.925],[527.248,-72.01,33.652],[528.593,-79.256,51.427],[530.05,-72.19,39.979],[531.603,-70.745,46.922],[533.082,-166.608,50.617],[534.212,-167.092,45.438],[534.239,-89.137,49.218],[535.104,-74.919,34.755],[537.019,-97.151,47.019],[537.274,-167.695,46.483],[537.313,-102.061,38.535],[537.599,-161.095,49.801],[537.756,-165.403,50.036],[538.9,-88.51,34.568],[540.288,-150.707,37.925],[540.682,-112.628,46.946],[540.776,-135.245,44.538],[540.785,-94.637,35.542],[541.116,-149.227,45.638],[541.156,-112.277,46.578],[541.415,-145.452,42.504],[541.712,-151.094,36.821],[542.829,-160.198,54.802],[543.293,-168.553,26.035],[543.591,-145.246,47.431],[544.295,-104.705,34.446],[544.734,-118.089,31.541],[544.987,-161.282,56.766],[545.969,-151.05,53.288],[546.526,-153.364,46.678],[546.703,-140.843,48.318],[546.838,-140.014,47.633],[546.906,-135.676,32.93],[546.969,-171.025,22.388],[547.158,-134.462,32.391],[548.257,-115.05,33.696],[549.548,-119.488,34.314],[549.616,-148.464,47.258],[550.141,-162.868,26.208],[551.221,-134.517,45.9],[552.139,-135.944,35.097],[553.312,-149.261,46.21],[555.115,-146.245,32.58],[555.697,-149.567,31.355],[560.154,-145.277,44.119],[562.453,-138.587,36.358],[567.405,-142.122,45.493],[464.791,-168.965,100.23],[465.566,-170.114,125.473],[468.316,-168.674,126.713],[468.537,-167.445,120.883],[469.02,-166.462,109.2],[472.792,-169.759,121.407],[473.676,-161.403,104.667],[473.926,-166.101,123.654],[474.871,-157.165,113.281],[475.554,-168.627,121.922],[476.216,-162.305,115.81],[476.965,-168.463,104.675],[478.1,-71.451,115.646],[478.7,-158.814,102.96],[479.611,-161.648,109.881],[481.577,-169.791,125.838],[482.676,-164.717,121.18],[482.843,-137.446,104.142],[482.981,-158.438,121.55],[483.063,-140.047,110.311],[483.763,-141.543,105.196],[483.977,-64.184,121.699],[483.994,-162.732,97.387],[485.131,-87.679,113.088],[485.204,-77.11,111.956],[485.441,-152.398,116.872],[485.79,-158.137,111.407],[486.921,-144.769,116.398],[487.063,-152.186,105.84],[489.811,-143.224,103.805],[489.911,-54.958,107.77],[490.399,-139.554,104.198],[491.585,-133.539,120.05],[493.439,-128.079,115.132],[493.744,-136.785,106.946],[494.563,-128.896,119.103],[494.589,-144.234,106.57],[494.628,-150.033,106.052],[496.741,-86.714,118.531],[497.248,-75.757,123.579],[498.285,-110.512,115.944],[500.321,-81.426,106.352],[501.583,-147.863,107.75],[503.634,-57.81,104.698],[505.325,-147.461,115.315]];var statistics$1={x:{count:1200,mean:351.5825575,std:107.940879597,min:63.13,"25%":284.51225,"50%":335.271,"75%":436.41325,max:567.405},y:{count:1200,mean:44.4816041667,std:91.5668068743,min:-171.055,"25%":17.6125,"50%":80.4955,"75%":111.914,max:167.055},z:{count:1200,mean:75.9319608333,std:34.36417168,min:-21.748,"25%":50.31475,"50%":75.2675,"75%":102.7245,max:169.04}};var mammoth = {names:names,labels:labels$1,columns:columns$1,values:values$1,statistics:statistics$1};

var mammoth$1 = /*#__PURE__*/Object.freeze({
__proto__: null,
names: names,
labels: labels$1,
columns: columns$1,
values: values$1,
statistics: statistics$1,
'default': mammoth
});

// https://renecutura.eu v0.3.16 Copyright 2021 Rene Cutura
/**
 * Numerical stable summation with the Neumair summation algorithm.
 * @memberof module:numerical
 * @alias neumair_sum
 * @param {Array} summands - Array of values to sum up.
 * @returns {number} The sum.
 * @see {@link https://en.wikipedia.org/wiki/Kahan_summation_algorithm#Further_enhancements}
 */function neumair_sum(t){let e=t.length,r=0,s=0;for(let i=0;i<e;++i){let e=t[i],n=r+e;Math.abs(r)>=Math.abs(e)?s+=r-n+e:s+=e-n+r,r=n;}return r+s}
/**
 * @class
 * @alias Matrix
 * @requires module:numerical/neumair_sum
 */class Matrix{
/**
     * creates a new Matrix. Entries are stored in a Float64Array. 
     * @constructor
     * @memberof module:matrix
     * @alias Matrix
     * @param {number} rows - The amount of rows of the matrix.
     * @param {number} cols - The amount of columns of the matrix.
     * @param {(function|string|number)} value=0 - Can be a function with row and col as parameters, a number, or "zeros", "identity" or "I", or "center".
     *  - **function**: for each entry the function gets called with the parameters for the actual row and column.
     *  - **string**: allowed are
     *      - "zero", creates a zero matrix.
     *      - "identity" or "I", creates an identity matrix.
     *      - "center", creates an center matrix.
     *  - **number**: create a matrix filled with the given value.
     * @example
     * 
     * let A = new Matrix(10, 10, () => Math.random()); //creates a 10 times 10 random matrix.
     * let B = new Matrix(3, 3, "I"); // creates a 3 times 3 identity matrix.
     * @returns {Matrix} returns a {@link rows} times {@link cols} Matrix filled with {@link value}.
     */
constructor(t=null,e=null,r=null){if(this._rows=t,this._cols=e,this._data=null,t&&e){if(!r)return this._data=new Float64Array(t*e),this;if("function"==typeof r){this._data=new Float64Array(t*e);for(let s=0;s<t;++s)for(let t=0;t<e;++t)this._data[s*e+t]=r(s,t);return this}if("string"==typeof r){if("zeros"===r)return new Matrix(t,e,0);if("identity"===r||"I"===r){this._data=new Float64Array(t*e);for(let r=0;r<t;++r)this._data[r*e+r]=1;return this}if("center"===r&&t==e){this._data=new Float64Array(t*e),r=(e,r)=>(e===r?1:0)-1/t;for(let s=0;s<t;++s)for(let t=0;t<e;++t)this._data[s*e+t]=r(s,t);return this}}if("number"==typeof r){this._data=new Float64Array(t*e);for(let s=0;s<t;++s)for(let t=0;t<e;++t)this._data[s*e+t]=r;return this}}return this}
/**
     * Creates a Matrix out of {@link A}.
     * @param {(Matrix|Array|Float64Array|number)} A - The matrix, array, or number, which should converted to a Matrix.
     * @param {"row"|"col"|"diag"} [type = "row"] - If {@link A} is a Array or Float64Array, then type defines if it is a row- or a column vector. 
     * @returns {Matrix}
     * 
     * @example
     * let A = Matrix.from([[1, 0], [0, 1]]); //creates a two by two identity matrix.
     * let S = Matrix.from([1, 2, 3], "diag"); // creates a three by three matrix with 1, 2, 3 on its diagonal.
     */static from(t,e="row"){if(t instanceof Matrix)return t.clone();if(!(Array.isArray(t)||t instanceof Float64Array)){if("number"==typeof t)return new Matrix(1,1,t);throw "error"}{let r=t.length;if(0===r)throw "Array is empty";
// 1d
if(!(Array.isArray(t[0])||t[0]instanceof Float64Array)){if("row"===e)return new Matrix(1,r,((e,r)=>t[r]));
// 2d
if("col"===e)return new Matrix(r,1,(e=>t[e]));if("diag"===e)return new Matrix(r,r,((e,r)=>e==r?t[e]:0));throw "1d array has NaN entries"}if(Array.isArray(t[0])||t[0]instanceof Float64Array){let e=t[0].length;for(let s=0;s<r;++s)if(t[s].length!==e)throw "various array lengths";return new Matrix(r,e,((e,r)=>t[e][r]))}}}
/**
     * Returns the {@link row}th row from the Matrix.
     * @param {int} row 
     * @returns {Array}
     */row(t){
/* let result_row = new Array(this._cols);
        for (let col = 0; col < this._cols; ++col) {
            result_row[col] = this._data[row * this._cols + col];
        }
        return result_row; */
const e=this._data,r=this._cols;return e.subarray(t*r,(t+1)*r)}
/**
     * Returns an generator yielding each row of the Matrix.
     */*iterate_rows(){const t=this._cols,e=this._rows,r=this._data;for(let s=0;s<e;++s)yield r.subarray(s*t,(s+1)*t);}
/**
     * Makes a {@link Matrix} object an iterable object.
     */*[Symbol.iterator](){for(const t of this.iterate_rows())yield t;}
/**
     * Sets the entries of {@link row}th row from the Matrix to the entries from {@link values}.
     * @param {int} row 
     * @param {Array} values 
     * @returns {Matrix}
     */set_row(t,e){let r=this._cols;if(Array.isArray(e)&&e.length===r){let s=t*r;for(let t=0;t<r;++t)this._data[s+t]=e[t];}else if(e instanceof Matrix&&e.shape[1]===r&&1===e.shape[0]){let s=t*r;for(let t=0;t<r;++t)this._data[s+t]=e._data[t];}return this}
/**
     * Returns the {@link col}th column from the Matrix.
     * @param {int} col 
     * @returns {Array}
     */col(t){let e=new Float64Array(this._rows);for(let r=0;r<this._rows;++r)e[r]=this._data[r*this._cols+t];return e}
/**
     * Returns the {@link col}th entry from the {@link row}th row of the Matrix.
     * @param {int} row 
     * @param {int} col 
     * @returns {float64}
     */entry(t,e){return this._data[t*this._cols+e]}
/**
     * Sets the {@link col}th entry from the {@link row}th row of the Matrix to the given {@link value}.
     * @param {int} row 
     * @param {int} col 
     * @param {float64} value
     * @returns {Matrix}
     */set_entry(t,e,r){return this._data[t*this._cols+e]=r,this}
/**
     * Returns a new transposed Matrix.
     * @returns {Matrix}
     */transpose(){return new Matrix(this._cols,this._rows,((t,e)=>this.entry(e,t)))}
/**
     * Returns a new transposed Matrix. Short-form of {@function transpose}.
     * @returns {Matrix}
     */get T(){return this.transpose()}
/**
     * Returns the inverse of the Matrix.
     * @returns {Matrix}
     */inverse(){const t=this._rows,e=this._cols;let r=new Matrix(t,2*e,((t,r)=>r>=e?t===r-e?1:0:this.entry(t,r))),s=0,i=0;for(;s<t&&i<e;){var n=0;let o=-1/0;for(let e=s;e<t;++e){let t=Math.abs(r.entry(e,i));o<t&&(n=e,o=t);}if(0==r.entry(n,i))i++;else {
// swap rows
for(let t=0;t<2*e;++t){let e=r.entry(s,t),i=r.entry(n,t);r.set_entry(s,t,e),r.set_entry(n,t,i);}for(let n=s+1;n<t;++n){let t=r.entry(n,i)/r.entry(s,i);r.set_entry(n,i,0);for(let o=i+1;o<2*e;++o)r.set_entry(n,o,r.entry(n,o)-r.entry(s,o)*t);}s++,i++;}}for(let s=0;s<t;++s){let t=r.entry(s,s);for(let i=s;i<2*e;++i)r.set_entry(s,i,r.entry(s,i)/t);}for(let s=t-1;s>=0;--s){let t=r.entry(s,s);for(let i=0;i<s;i++){let n=r.entry(i,s)/t;for(let t=i;t<2*e;++t){let e=r.entry(i,t);e-=r.entry(s,t)*n,r.set_entry(i,t,e);}}}return new Matrix(t,e,((t,s)=>r.entry(t,s+e)))}
/**
     * Returns the dot product. If {@link B} is an Array or Float64Array then an Array gets returned. If {@link B} is a Matrix then a Matrix gets returned.
     * @param {(Matrix|Array|Float64Array)} B the right side
     * @returns {(Matrix|Array)}
     */dot(t){if(t instanceof Matrix){let e=this;if(e.shape[1]!==t.shape[0])throw `A.dot(B): A is a ${e.shape.join(" x ")}-Matrix, B is a ${t.shape.join(" x ")}-Matrix: \n                A has ${e.shape[1]} cols and B ${t.shape[0]} rows. \n                Must be equal!`;let r=e.shape[1];return new Matrix(e.shape[0],t.shape[1],((s,i)=>{const n=e.row(s),o=t.col(i);let a=0;for(let t=0;t<r;++t)a+=n[t]*o[t];return a}))}if(Array.isArray(t)||t instanceof Float64Array){let e=this._rows;if(t.length!==e)throw `A.dot(B): A has ${e} cols and B has ${t.length} rows. Must be equal!`;let r=new Array(e);for(let s=0;s<e;++s)r[s]=neumair_sum(this.row(s).map((e=>e*t[s])));return r}throw "B must be Matrix or Array"}
/**
     * Computes the outer product from {@link this} and {@link B}.
     * @param {Matrix} B 
     * @returns {Matrix}
     */outer(t){let e=this,r=e._data.length;if(r!=t._data.length)return;let s=new Matrix;return s.shape=[r,r,(r,i)=>r<=i?e._data[r]*t._data[i]:s.entry(i,r)],s}
/**
     * Appends matrix {@link B} to the matrix.
     * @param {Matrix} B - matrix to append.
     * @param {"horizontal"|"vertical"|"diag"} [type = "horizontal"] - type of concatenation.
     * @returns {Matrix}
     * @example
     * 
     * let A = Matrix.from([[1, 1], [1, 1]]); // 2 by 2 matrix filled with ones.
     * let B = Matrix.from([[2, 2], [2, 2]]); // 2 by 2 matrix filled with twos.
     * 
     * A.concat(B, "horizontal"); // 2 by 4 matrix. [[1, 1, 2, 2], [1, 1, 2, 2]]
     * A.concat(B, "vertical"); // 4 by 2 matrix. [[1, 1], [1, 1], [2, 2], [2, 2]]
     * A.concat(B, "diag"); // 4 by 4 matrix. [[1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 2, 2], [0, 0, 2, 2]]
     */concat(t,e="horizontal"){const r=this,[s,i]=r.shape,[n,o]=t.shape;if("horizontal"==e){if(s!=n)throw `A.concat(B, "horizontal"): A and B need same number of rows, A has ${s} rows, B has ${n} rows.`;const e=new Matrix(s,i+o,"zeros");return e.set_block(0,0,r),e.set_block(0,i,t),e}if("vertical"==e){if(i!=o)throw `A.concat(B, "vertical"): A and B need same number of columns, A has ${i} columns, B has ${o} columns.`;const e=new Matrix(s+n,i,"zeros");return e.set_block(0,0,r),e.set_block(s,0,t),e}if("diag"==e){const e=new Matrix(s+n,i+o,"zeros");return e.set_block(0,0,r),e.set_block(s,i,t),e}throw `type must be "horizontal" or "vertical", but type is ${e}!`}
/**
     * Writes the entries of B in A at an offset position given by {@link offset_row} and {@link offset_col}.
     * @param {int} offset_row 
     * @param {int} offset_col 
     * @param {Matrix} B 
     * @returns {Matrix}
     */set_block(t,e,r){let[s,i]=r.shape;for(let n=0;n<s;++n)if(!(n>this._rows))for(let s=0;s<i;++s)s>this._cols||this.set_entry(n+t,s+e,r.entry(n,s));return this}
/**
     * Extracts the entries from the {@link start_row}th row to the {@link end_row}th row, the {@link start_col}th column to the {@link end_col}th column of the matrix.
     * If {@link end_row} or {@link end_col} is empty, the respective value is set to {@link this.rows} or {@link this.cols}.
     * @param {Number} start_row 
     * @param {Number} start_col
     * @param {Number} [end_row = null]
     * @param {Number} [end_col = null] 
     * @returns {Matrix} Returns a end_row - start_row times end_col - start_col matrix, with respective entries from the matrix.
     * @example
     * 
     * let A = Matrix.from([[1, 2, 3], [4, 5, 6], [7, 8, 9]]); // a 3 by 3 matrix.
     * 
     * A.get_block(1, 1).to2dArray; // [[5, 6], [8, 9]]
     * A.get_block(0, 0, 1, 1).to2dArray; // [[1]]
     * A.get_block(1, 1, 2, 2).to2dArray; // [[5]]
     * A.get_block(0, 0, 2, 2).to2dArray; // [[1, 2], [4, 5]]
     */get_block(t,e,r=null,s=null){const[i,n]=this.shape;
/*if (!end_row)) {
            end_row = rows;
        }
            end_col = cols;
        }*/if(s=s??n,(r=r??i)<=t||s<=e)throw `\n                end_row must be greater than start_row, and \n                end_col must be greater than start_col, but\n                end_row = ${r}, start_row = ${t}, end_col = ${s}, and start_col = ${e}!`;const o=new Matrix(r-t,s-e,"zeros");for(let i=t,n=0;i<r;++i,++n)for(let t=e,r=0;t<s;++t,++r)o.set_entry(n,r,this.entry(i,t));return o;
//return new Matrix(end_row - start_row, end_col - start_col, (i, j) => this.entry(i + start_row, j + start_col));
}
/**
     * Returns a new array gathering entries defined by the indices given by argument.
     * @param {Array<Number>} row_indices - Array consists of indices of rows for gathering entries of this matrix 
     * @param {Array<Number>} col_indices  - Array consists of indices of cols for gathering entries of this matrix 
     * @returns {Matrix}
     */gather(t,e){const r=t.length,s=e.length,i=new Matrix(r,s);for(let s=0;s<r;++s){const n=t[s];for(let t=0;t<r;++t){const r=e[t];i.set_entry(s,t,this.entry(n,r));}}return i}
/**
     * Applies a function to each entry of the matrix.
     * @param {function} f function takes 2 parameters, the value of the actual entry and a value given by the function {@link v}. The result of {@link f} gets writen to the Matrix.
     * @param {function} v function takes 2 parameters for row and col, and returns a value witch should be applied to the colth entry of the rowth row of the matrix.
     */_apply_array(t,e){const r=this._data,[s,i]=this.shape;for(let n=0;n<s;++n){const s=n*i;for(let o=0;o<i;++o){const i=s+o;r[i]=t(r[i],e(n,o));}}return this}_apply_rowwise_array(t,e){return this._apply_array(e,((e,r)=>t[r]))}_apply_colwise_array(t,e){const r=this._data,[s,i]=this.shape;for(let n=0;n<s;++n){const s=n*i;for(let o=0;o<i;++o){const i=s+o;r[i]=e(r[i],t[n]);}}return this}_apply(t,e){let r=this._data;if(t instanceof Matrix){let[s,i]=t.shape,[n,o]=this.shape;if(1===s){if(o!==i)throw "cols !== value_cols";for(let s=0;s<n;++s)for(let i=0;i<o;++i)r[s*o+i]=e(r[s*o+i],t.entry(0,i));}else if(1===i){if(n!==s)throw "rows !== value_rows";for(let s=0;s<n;++s)for(let i=0;i<o;++i)r[s*o+i]=e(r[s*o+i],t.entry(s,0));}else {if(n!=s||o!=i)throw "error";for(let s=0;s<n;++s)for(let i=0;i<o;++i)r[s*o+i]=e(r[s*o+i],t.entry(s,i));}}else if(Array.isArray(t)){let s=this._rows,i=this._cols;if(t.length===s)for(let n=0;n<s;++n)for(let s=0;s<i;++s)r[n*i+s]=e(r[n*i+s],t[n]);else {if(t.length!==i)throw "error";for(let n=0;n<s;++n)for(let s=0;s<i;++s)r[n*i+s]=e(r[n*i+s],t[s]);}}else for(let s=0,i=this._rows*this._cols;s<i;++s)r[s]=e(r[s],t);return this}
/**
     * Clones the Matrix.
     * @returns {Matrix}
     */clone(){let t=new Matrix;return t._rows=this._rows,t._cols=this._cols,t._data=this._data.slice(0),t}mult(t){return this.clone()._apply(t,((t,e)=>t*e))}divide(t){return this.clone()._apply(t,((t,e)=>t/e))}add(t){return this.clone()._apply(t,((t,e)=>t+e))}sub(t){return this.clone()._apply(t,((t,e)=>t-e))}
/**
     * Returns the number of rows and columns of the Matrix.
     * @returns {Array} An Array in the form [rows, columns].
     */get shape(){return [this._rows,this._cols]}
/**
     * Returns the matrix in the given shape with the given function which returns values for the entries of the matrix.
     * @param {Array} parameter - takes an Array in the form [rows, cols, value], where rows and cols are the number of rows and columns of the matrix, and value is a function which takes two parameters (row and col) which has to return a value for the colth entry of the rowth row.
     * @returns {Matrix}
     */set shape([t,e,r=(()=>0)]){this._rows=t,this._cols=e,this._data=new Float64Array(t*e);for(let s=0;s<t;++s)for(let t=0;t<e;++t)this._data[s*e+t]=r(s,t);return this}
/**
     * Returns the Matrix as a two-dimensional Array.
     * @returns {Array}
     */get to2dArray(){
/* const rows = this._rows;
        const cols = this._cols;
        let result = new Array(rows)
        for (let row = 0; row < rows; ++row) {
            let result_col = new Array(cols)
            for (let col = 0; col < cols; ++col) {
                result_col[col] = this.entry(row, col);
            }
            result[row] = result_col;
        }
        return result; */
return [...this.iterate_rows()]}
/**
     * Returns the diagonal of the Matrix.
     * @returns {Array}
     */get diag(){const t=this._rows,e=this._cols,r=Math.min(t,e);let s=new Float64Array(r);for(let t=0;t<r;++t)s[t]=this.entry(t,t);return s}
/**
     * Returns the mean of all entries of the Matrix.
     * @returns {float64}
     */get mean(){return this.sum/(this._rows*this._cols)}
/**
     * Returns the sum oof all entries of the Matrix.
     * @returns {number}
     */get sum(){return neumair_sum(this._data)}
/**
     * Returns the mean of each row of the matrix.
     * @returns {Array}
     */get meanRows(){const t=this._data,e=this._rows,r=this._cols;let s=Float64Array.from({length:e});for(let i=0;i<e;++i){s[i]=0;for(let e=0;e<r;++e)s[i]+=t[i*r+e];s[i]/=r;}return s}
/** Returns the mean of each column of the matrix.
     * @returns {Array}
     */get meanCols(){const t=this._data,e=this._rows,r=this._cols;let s=Float64Array.from({length:r});for(let i=0;i<r;++i){s[i]=0;for(let n=0;n<e;++n)s[i]+=t[n*r+i];s[i]/=e;}return s}static solve_CG(t,e,r,s=.001){const i=t.shape[0],n=e.shape[1];let o=new Matrix(i,0);for(let a=0;a<n;++a){const n=Matrix.from(e.col(a)).T;let h=new Matrix(i,1,(()=>r.random)),l=n.sub(t.dot(h)),_=l.clone();do{const e=t.dot(_),r=l.T.dot(l).entry(0,0)/_.T.dot(e).entry(0,0);h=h.add(_.mult(r));const s=l.sub(e.mult(r)),i=s.T.dot(s).entry(0,0)/l.T.dot(l).entry(0,0);_=s.add(_.mult(i)),l=s;}while(Math.abs(l.mean)>s);o=o.concat(h,"horizontal");}return o}
/**
     * Solves the equation {@link A}x = {@link b}. Returns the result x.
     * @param {Matrix} A - Matrix or LU Decomposition
     * @param {Matrix} b - Matrix
     * @returns {Matrix}
     */static solve(t,e){let{L:r,U:s}="L"in t&&"U"in t?t:Matrix.LU(t),i=r.shape[0],n=e.clone();
// forward
for(let t=0;t<i;++t){for(let e=0;e<t-1;++e)n.set_entry(0,t,n.entry(0,t)-r.entry(t,e)*n.entry(1,e));n.set_entry(0,t,n.entry(0,t)/r.entry(t,t));}
// backward
for(let t=i-1;t>=0;--t){for(let e=i-1;e>t;--e)n.set_entry(0,t,n.entry(0,t)-s.entry(t,e)*n.entry(0,e));n.set_entry(0,t,n.entry(0,t)/s.entry(t,t));}return n}
/**
     * {@link L}{@link U} decomposition of the Matrix {@link A}. Creates two matrices, so that the dot product LU equals A.
     * @param {Matrix} A 
     * @returns {{L: Matrix, U: Matrix}} result - Returns the left triangle matrix {@link L} and the upper triangle matrix {@link U}.
     */static LU(t){const e=t.shape[0],r=new Matrix(e,e,"zeros"),s=new Matrix(e,e,"identity");for(let i=0;i<e;++i){for(let n=i;n<e;++n){let e=0;for(let t=0;t<i;++t)e+=r.entry(n,t)*s.entry(t,i);r.set_entry(n,i,t.entry(n,i)-e);}for(let n=i;n<e;++n){if(0===r.entry(i,i))return;let e=0;for(let t=0;t<i;++t)e+=r.entry(i,t)*s.entry(t,n);s.set_entry(i,n,(t.entry(i,n)-e)/r.entry(i,i));}}return {L:r,U:s}}
/**
     * Computes the {@link k} components of the SVD decomposition of the matrix {@link M}
     * @param {Matrix} M 
     * @param {int} [k=2] 
     * @returns {{U: Matrix, Sigma: Matrix, V: Matrix}}
     */static SVD(t,e=2){const r=t.T;let s=r.dot(t),i=t.dot(r),{eigenvectors:n,eigenvalues:o}=simultaneous_poweriteration(s,e),{eigenvectors:a}=simultaneous_poweriteration(i,e);return {U:a,Sigma:o.map((t=>Math.sqrt(t))),V:n};
//Algorithm 1a: Householder reduction to bidiagonal form:
/* const [m, n] = A.shape;
        let U = new Matrix(m, n, (i, j) => i == j ? 1 : 0);
        console.log(U.to2dArray)
        let V = new Matrix(n, m, (i, j) => i == j ? 1 : 0);
        console.log(V.to2dArray)
        let B = Matrix.bidiagonal(A.clone(), U, V);
        console.log(U,V,B)
        return { U: U, "Sigma": B, V: V }; */}}function linspace(t,e,r=null){if(r||(r=Math.max(Math.round(e-t)+1,1)),r<2)return 1===r?[t]:[];let s=new Array(r);for(let i=r-=1;i>=0;--i)s[i]=(i*e+(r-i)*t)/r;return s}
class Randomizer{
// https://github.com/bmurray7/mersenne-twister-examples/blob/master/javascript-mersenne-twister.js
/**
     * Mersenne Twister
     * @param {*} _seed 
     */
constructor(t){return this._N=624,this._M=397,this._MATRIX_A=2567483615,this._UPPER_MASK=2147483648,this._LOWER_MASK=2147483647,this._mt=new Array(this._N),this._mti=this.N+1,this.seed=t||(new Date).getTime(),this}set seed(t){this._seed=t;let e=this._mt;for(e[0]=t>>>0,this._mti=1;this._mti<this._N;this._mti+=1){let t=this._mti,r=e[t-1]^e[t-1]>>>30;e[t]=(1812433253*((4294901760&r)>>>16)<<16)+1812433253*(65535&r)+t,e[t]>>>=0;}}get seed(){return this._seed}get random(){return this.random_int*(1/4294967296)}get random_int(){let t,e=new Array(0,this._MATRIX_A);if(this._mti>=this._N){let r;this._mti==this._N+1&&(this.seed=5489);let s=this._N-this._M,i=this._M-this._N;for(r=0;r<s;++r)t=this._mt[r]&this._UPPER_MASK|this._mt[r+1]&this._LOWER_MASK,this._mt[r]=this._mt[r+this._M]^t>>>1^e[1&t];for(;r<this._N-1;++r)t=this._mt[r]&this._UPPER_MASK|this._mt[r+1]&this._LOWER_MASK,this._mt[r]=this._mt[r+i]^t>>>1^e[1&t];t=this._mt[this._N-1]&this._UPPER_MASK|this._mt[0]&this._LOWER_MASK,this._mt[this._N-1]=this._mt[this._M-1]^t>>>1^e[1&t],this._mti=0;}return t=this._mt[this._mti+=1],t^=t>>>11,t^=t<<7&2636928640,t^=t<<15&4022730752,t^=t>>>18,t>>>0}choice(t,e){if(t instanceof Matrix){let[r,s]=t.shape;if(e>r)throw "n bigger than A!";let i=new Array(e),n=linspace(0,r-1);for(let t=0,r=n.length;t<e;++t,--r){let e=this.random_int%r;i[t]=n.splice(e,1)[0];}return i.map((e=>t.row(e)))}if(Array.isArray(t)||t instanceof Float64Array){let r=t.length;if(e>r)throw "n bigger than A!";let s=new Array(e),i=linspace(0,r-1);for(let t=0,r=i.length;t<e;++t,--r){let e=this.random_int%r;s[t]=i.splice(e,1)[0];}return s.map((e=>t[e]))}}static choice(t,e,r=19870307){let[s,i]=t.shape;if(e>s)throw "n bigger than A!";let n=new Randomizer(r),o=new Array(e),a=linspace(0,s-1);
/*let index_list = new Array(rows);
        for (let i = 0; i < rows; ++i) {
            index_list[i] = i;
        }*/
//let result = new Matrix(n, cols);
for(let t=0,r=a.length;t<e;++t,--r){let e=n.random_int%r;o[t]=a.splice(e,1)[0];}
//return result;
//return new Matrix(n, cols, (row, col) => A.entry(sample[row], col))
return o.map((e=>t.row(e)))}}

/*! pako 2.0.4 https://github.com/nodeca/pako @license (MIT AND Zlib) */
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

/* eslint-disable space-unary-ops */

/* Public constants ==========================================================*/
/* ===========================================================================*/


//const Z_FILTERED          = 1;
//const Z_HUFFMAN_ONLY      = 2;
//const Z_RLE               = 3;
const Z_FIXED$1               = 4;
//const Z_DEFAULT_STRATEGY  = 0;

/* Possible values of the data_type field (though see inflate()) */
const Z_BINARY              = 0;
const Z_TEXT                = 1;
//const Z_ASCII             = 1; // = Z_TEXT
const Z_UNKNOWN$1             = 2;

/*============================================================================*/


function zero$1(buf) { let len = buf.length; while (--len >= 0) { buf[len] = 0; } }

// From zutil.h

const STORED_BLOCK = 0;
const STATIC_TREES = 1;
const DYN_TREES    = 2;
/* The three kinds of block type */

const MIN_MATCH$1    = 3;
const MAX_MATCH$1    = 258;
/* The minimum and maximum match lengths */

// From deflate.h
/* ===========================================================================
 * Internal compression state.
 */

const LENGTH_CODES$1  = 29;
/* number of length codes, not counting the special END_BLOCK code */

const LITERALS$1      = 256;
/* number of literal bytes 0..255 */

const L_CODES$1       = LITERALS$1 + 1 + LENGTH_CODES$1;
/* number of Literal or Length codes, including the END_BLOCK code */

const D_CODES$1       = 30;
/* number of distance codes */

const BL_CODES$1      = 19;
/* number of codes used to transfer the bit lengths */

const HEAP_SIZE$1     = 2 * L_CODES$1 + 1;
/* maximum heap size */

const MAX_BITS$1      = 15;
/* All codes must not exceed MAX_BITS bits */

const Buf_size      = 16;
/* size of bit buffer in bi_buf */


/* ===========================================================================
 * Constants
 */

const MAX_BL_BITS = 7;
/* Bit length codes must not exceed MAX_BL_BITS bits */

const END_BLOCK   = 256;
/* end of block literal code */

const REP_3_6     = 16;
/* repeat previous bit length 3-6 times (2 bits of repeat count) */

const REPZ_3_10   = 17;
/* repeat a zero length 3-10 times  (3 bits of repeat count) */

const REPZ_11_138 = 18;
/* repeat a zero length 11-138 times  (7 bits of repeat count) */

/* eslint-disable comma-spacing,array-bracket-spacing */
const extra_lbits =   /* extra bits for each length code */
  new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]);

const extra_dbits =   /* extra bits for each distance code */
  new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]);

const extra_blbits =  /* extra bits for each bit length code */
  new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]);

const bl_order =
  new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);
/* eslint-enable comma-spacing,array-bracket-spacing */

/* The lengths of the bit length codes are sent in order of decreasing
 * probability, to avoid transmitting the lengths for unused bit length codes.
 */

/* ===========================================================================
 * Local data. These are initialized only once.
 */

// We pre-fill arrays with 0 to avoid uninitialized gaps

const DIST_CODE_LEN = 512; /* see definition of array dist_code below */

// !!!! Use flat array instead of structure, Freq = i*2, Len = i*2+1
const static_ltree  = new Array((L_CODES$1 + 2) * 2);
zero$1(static_ltree);
/* The static literal tree. Since the bit lengths are imposed, there is no
 * need for the L_CODES extra codes used during heap construction. However
 * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
 * below).
 */

const static_dtree  = new Array(D_CODES$1 * 2);
zero$1(static_dtree);
/* The static distance tree. (Actually a trivial tree since all codes use
 * 5 bits.)
 */

const _dist_code    = new Array(DIST_CODE_LEN);
zero$1(_dist_code);
/* Distance codes. The first 256 values correspond to the distances
 * 3 .. 258, the last 256 values correspond to the top 8 bits of
 * the 15 bit distances.
 */

const _length_code  = new Array(MAX_MATCH$1 - MIN_MATCH$1 + 1);
zero$1(_length_code);
/* length code for each normalized match length (0 == MIN_MATCH) */

const base_length   = new Array(LENGTH_CODES$1);
zero$1(base_length);
/* First normalized length for each code (0 = MIN_MATCH) */

const base_dist     = new Array(D_CODES$1);
zero$1(base_dist);
/* First normalized distance for each code (0 = distance of 1) */


function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {

  this.static_tree  = static_tree;  /* static tree or NULL */
  this.extra_bits   = extra_bits;   /* extra bits for each code or NULL */
  this.extra_base   = extra_base;   /* base index for extra_bits */
  this.elems        = elems;        /* max number of elements in the tree */
  this.max_length   = max_length;   /* max bit length for the codes */

  // show if `static_tree` has data or dummy - needed for monomorphic objects
  this.has_stree    = static_tree && static_tree.length;
}


let static_l_desc;
let static_d_desc;
let static_bl_desc;


function TreeDesc(dyn_tree, stat_desc) {
  this.dyn_tree = dyn_tree;     /* the dynamic tree */
  this.max_code = 0;            /* largest code with non zero frequency */
  this.stat_desc = stat_desc;   /* the corresponding static tree */
}



const d_code = (dist) => {

  return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
};


/* ===========================================================================
 * Output a short LSB first on the stream.
 * IN assertion: there is enough room in pendingBuf.
 */
const put_short = (s, w) => {
//    put_byte(s, (uch)((w) & 0xff));
//    put_byte(s, (uch)((ush)(w) >> 8));
  s.pending_buf[s.pending++] = (w) & 0xff;
  s.pending_buf[s.pending++] = (w >>> 8) & 0xff;
};


/* ===========================================================================
 * Send a value on a given number of bits.
 * IN assertion: length <= 16 and value fits in length bits.
 */
const send_bits = (s, value, length) => {

  if (s.bi_valid > (Buf_size - length)) {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    put_short(s, s.bi_buf);
    s.bi_buf = value >> (Buf_size - s.bi_valid);
    s.bi_valid += length - Buf_size;
  } else {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    s.bi_valid += length;
  }
};


const send_code = (s, c, tree) => {

  send_bits(s, tree[c * 2]/*.Code*/, tree[c * 2 + 1]/*.Len*/);
};


/* ===========================================================================
 * Reverse the first len bits of a code, using straightforward code (a faster
 * method would use a table)
 * IN assertion: 1 <= len <= 15
 */
const bi_reverse = (code, len) => {

  let res = 0;
  do {
    res |= code & 1;
    code >>>= 1;
    res <<= 1;
  } while (--len > 0);
  return res >>> 1;
};


/* ===========================================================================
 * Flush the bit buffer, keeping at most 7 bits in it.
 */
const bi_flush = (s) => {

  if (s.bi_valid === 16) {
    put_short(s, s.bi_buf);
    s.bi_buf = 0;
    s.bi_valid = 0;

  } else if (s.bi_valid >= 8) {
    s.pending_buf[s.pending++] = s.bi_buf & 0xff;
    s.bi_buf >>= 8;
    s.bi_valid -= 8;
  }
};


/* ===========================================================================
 * Compute the optimal bit lengths for a tree and update the total bit length
 * for the current block.
 * IN assertion: the fields freq and dad are set, heap[heap_max] and
 *    above are the tree nodes sorted by increasing frequency.
 * OUT assertions: the field len is set to the optimal bit length, the
 *     array bl_count contains the frequencies for each bit length.
 *     The length opt_len is updated; static_len is also updated if stree is
 *     not null.
 */
const gen_bitlen = (s, desc) =>
//    deflate_state *s;
//    tree_desc *desc;    /* the tree descriptor */
{
  const tree            = desc.dyn_tree;
  const max_code        = desc.max_code;
  const stree           = desc.stat_desc.static_tree;
  const has_stree       = desc.stat_desc.has_stree;
  const extra           = desc.stat_desc.extra_bits;
  const base            = desc.stat_desc.extra_base;
  const max_length      = desc.stat_desc.max_length;
  let h;              /* heap index */
  let n, m;           /* iterate over the tree elements */
  let bits;           /* bit length */
  let xbits;          /* extra bits */
  let f;              /* frequency */
  let overflow = 0;   /* number of elements with bit length too large */

  for (bits = 0; bits <= MAX_BITS$1; bits++) {
    s.bl_count[bits] = 0;
  }

  /* In a first pass, compute the optimal bit lengths (which may
   * overflow in the case of the bit length tree).
   */
  tree[s.heap[s.heap_max] * 2 + 1]/*.Len*/ = 0; /* root of the heap */

  for (h = s.heap_max + 1; h < HEAP_SIZE$1; h++) {
    n = s.heap[h];
    bits = tree[tree[n * 2 + 1]/*.Dad*/ * 2 + 1]/*.Len*/ + 1;
    if (bits > max_length) {
      bits = max_length;
      overflow++;
    }
    tree[n * 2 + 1]/*.Len*/ = bits;
    /* We overwrite tree[n].Dad which is no longer needed */

    if (n > max_code) { continue; } /* not a leaf node */

    s.bl_count[bits]++;
    xbits = 0;
    if (n >= base) {
      xbits = extra[n - base];
    }
    f = tree[n * 2]/*.Freq*/;
    s.opt_len += f * (bits + xbits);
    if (has_stree) {
      s.static_len += f * (stree[n * 2 + 1]/*.Len*/ + xbits);
    }
  }
  if (overflow === 0) { return; }

  // Trace((stderr,"\nbit length overflow\n"));
  /* This happens for example on obj2 and pic of the Calgary corpus */

  /* Find the first bit length which could increase: */
  do {
    bits = max_length - 1;
    while (s.bl_count[bits] === 0) { bits--; }
    s.bl_count[bits]--;      /* move one leaf down the tree */
    s.bl_count[bits + 1] += 2; /* move one overflow item as its brother */
    s.bl_count[max_length]--;
    /* The brother of the overflow item also moves one step up,
     * but this does not affect bl_count[max_length]
     */
    overflow -= 2;
  } while (overflow > 0);

  /* Now recompute all bit lengths, scanning in increasing frequency.
   * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
   * lengths instead of fixing only the wrong ones. This idea is taken
   * from 'ar' written by Haruhiko Okumura.)
   */
  for (bits = max_length; bits !== 0; bits--) {
    n = s.bl_count[bits];
    while (n !== 0) {
      m = s.heap[--h];
      if (m > max_code) { continue; }
      if (tree[m * 2 + 1]/*.Len*/ !== bits) {
        // Trace((stderr,"code %d bits %d->%d\n", m, tree[m].Len, bits));
        s.opt_len += (bits - tree[m * 2 + 1]/*.Len*/) * tree[m * 2]/*.Freq*/;
        tree[m * 2 + 1]/*.Len*/ = bits;
      }
      n--;
    }
  }
};


/* ===========================================================================
 * Generate the codes for a given tree and bit counts (which need not be
 * optimal).
 * IN assertion: the array bl_count contains the bit length statistics for
 * the given tree and the field len is set for all tree elements.
 * OUT assertion: the field code is set for all tree elements of non
 *     zero code length.
 */
const gen_codes = (tree, max_code, bl_count) =>
//    ct_data *tree;             /* the tree to decorate */
//    int max_code;              /* largest code with non zero frequency */
//    ushf *bl_count;            /* number of codes at each bit length */
{
  const next_code = new Array(MAX_BITS$1 + 1); /* next code value for each bit length */
  let code = 0;              /* running code value */
  let bits;                  /* bit index */
  let n;                     /* code index */

  /* The distribution counts are first used to generate the code values
   * without bit reversal.
   */
  for (bits = 1; bits <= MAX_BITS$1; bits++) {
    next_code[bits] = code = (code + bl_count[bits - 1]) << 1;
  }
  /* Check that the bit counts in bl_count are consistent. The last code
   * must be all ones.
   */
  //Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
  //        "inconsistent bit counts");
  //Tracev((stderr,"\ngen_codes: max_code %d ", max_code));

  for (n = 0;  n <= max_code; n++) {
    let len = tree[n * 2 + 1]/*.Len*/;
    if (len === 0) { continue; }
    /* Now reverse the bits */
    tree[n * 2]/*.Code*/ = bi_reverse(next_code[len]++, len);

    //Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
    //     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
  }
};


/* ===========================================================================
 * Initialize the various 'constant' tables.
 */
const tr_static_init = () => {

  let n;        /* iterates over tree elements */
  let bits;     /* bit counter */
  let length;   /* length value */
  let code;     /* code value */
  let dist;     /* distance index */
  const bl_count = new Array(MAX_BITS$1 + 1);
  /* number of codes at each bit length for an optimal tree */

  // do check in _tr_init()
  //if (static_init_done) return;

  /* For some embedded targets, global variables are not initialized: */
/*#ifdef NO_INIT_GLOBAL_POINTERS
  static_l_desc.static_tree = static_ltree;
  static_l_desc.extra_bits = extra_lbits;
  static_d_desc.static_tree = static_dtree;
  static_d_desc.extra_bits = extra_dbits;
  static_bl_desc.extra_bits = extra_blbits;
#endif*/

  /* Initialize the mapping length (0..255) -> length code (0..28) */
  length = 0;
  for (code = 0; code < LENGTH_CODES$1 - 1; code++) {
    base_length[code] = length;
    for (n = 0; n < (1 << extra_lbits[code]); n++) {
      _length_code[length++] = code;
    }
  }
  //Assert (length == 256, "tr_static_init: length != 256");
  /* Note that the length 255 (match length 258) can be represented
   * in two different ways: code 284 + 5 bits or code 285, so we
   * overwrite length_code[255] to use the best encoding:
   */
  _length_code[length - 1] = code;

  /* Initialize the mapping dist (0..32K) -> dist code (0..29) */
  dist = 0;
  for (code = 0; code < 16; code++) {
    base_dist[code] = dist;
    for (n = 0; n < (1 << extra_dbits[code]); n++) {
      _dist_code[dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: dist != 256");
  dist >>= 7; /* from now on, all distances are divided by 128 */
  for (; code < D_CODES$1; code++) {
    base_dist[code] = dist << 7;
    for (n = 0; n < (1 << (extra_dbits[code] - 7)); n++) {
      _dist_code[256 + dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: 256+dist != 512");

  /* Construct the codes of the static literal tree */
  for (bits = 0; bits <= MAX_BITS$1; bits++) {
    bl_count[bits] = 0;
  }

  n = 0;
  while (n <= 143) {
    static_ltree[n * 2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  while (n <= 255) {
    static_ltree[n * 2 + 1]/*.Len*/ = 9;
    n++;
    bl_count[9]++;
  }
  while (n <= 279) {
    static_ltree[n * 2 + 1]/*.Len*/ = 7;
    n++;
    bl_count[7]++;
  }
  while (n <= 287) {
    static_ltree[n * 2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  /* Codes 286 and 287 do not exist, but we must include them in the
   * tree construction to get a canonical Huffman tree (longest code
   * all ones)
   */
  gen_codes(static_ltree, L_CODES$1 + 1, bl_count);

  /* The static distance tree is trivial: */
  for (n = 0; n < D_CODES$1; n++) {
    static_dtree[n * 2 + 1]/*.Len*/ = 5;
    static_dtree[n * 2]/*.Code*/ = bi_reverse(n, 5);
  }

  // Now data ready and we can init static trees
  static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS$1 + 1, L_CODES$1, MAX_BITS$1);
  static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0,          D_CODES$1, MAX_BITS$1);
  static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0,         BL_CODES$1, MAX_BL_BITS);

  //static_init_done = true;
};


/* ===========================================================================
 * Initialize a new block.
 */
const init_block = (s) => {

  let n; /* iterates over tree elements */

  /* Initialize the trees. */
  for (n = 0; n < L_CODES$1;  n++) { s.dyn_ltree[n * 2]/*.Freq*/ = 0; }
  for (n = 0; n < D_CODES$1;  n++) { s.dyn_dtree[n * 2]/*.Freq*/ = 0; }
  for (n = 0; n < BL_CODES$1; n++) { s.bl_tree[n * 2]/*.Freq*/ = 0; }

  s.dyn_ltree[END_BLOCK * 2]/*.Freq*/ = 1;
  s.opt_len = s.static_len = 0;
  s.last_lit = s.matches = 0;
};


/* ===========================================================================
 * Flush the bit buffer and align the output on a byte boundary
 */
const bi_windup = (s) =>
{
  if (s.bi_valid > 8) {
    put_short(s, s.bi_buf);
  } else if (s.bi_valid > 0) {
    //put_byte(s, (Byte)s->bi_buf);
    s.pending_buf[s.pending++] = s.bi_buf;
  }
  s.bi_buf = 0;
  s.bi_valid = 0;
};

/* ===========================================================================
 * Copy a stored block, storing first the length and its
 * one's complement if requested.
 */
const copy_block = (s, buf, len, header) =>
//DeflateState *s;
//charf    *buf;    /* the input data */
//unsigned len;     /* its length */
//int      header;  /* true if block header must be written */
{
  bi_windup(s);        /* align on byte boundary */

  if (header) {
    put_short(s, len);
    put_short(s, ~len);
  }
//  while (len--) {
//    put_byte(s, *buf++);
//  }
  s.pending_buf.set(s.window.subarray(buf, buf + len), s.pending);
  s.pending += len;
};

/* ===========================================================================
 * Compares to subtrees, using the tree depth as tie breaker when
 * the subtrees have equal frequency. This minimizes the worst case length.
 */
const smaller = (tree, n, m, depth) => {

  const _n2 = n * 2;
  const _m2 = m * 2;
  return (tree[_n2]/*.Freq*/ < tree[_m2]/*.Freq*/ ||
         (tree[_n2]/*.Freq*/ === tree[_m2]/*.Freq*/ && depth[n] <= depth[m]));
};

/* ===========================================================================
 * Restore the heap property by moving down the tree starting at node k,
 * exchanging a node with the smallest of its two sons if necessary, stopping
 * when the heap property is re-established (each father smaller than its
 * two sons).
 */
const pqdownheap = (s, tree, k) =>
//    deflate_state *s;
//    ct_data *tree;  /* the tree to restore */
//    int k;               /* node to move down */
{
  const v = s.heap[k];
  let j = k << 1;  /* left son of k */
  while (j <= s.heap_len) {
    /* Set j to the smallest of the two sons: */
    if (j < s.heap_len &&
      smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
      j++;
    }
    /* Exit if v is smaller than both sons */
    if (smaller(tree, v, s.heap[j], s.depth)) { break; }

    /* Exchange v with the smallest son */
    s.heap[k] = s.heap[j];
    k = j;

    /* And continue down the tree, setting j to the left son of k */
    j <<= 1;
  }
  s.heap[k] = v;
};


// inlined manually
// const SMALLEST = 1;

/* ===========================================================================
 * Send the block data compressed using the given Huffman trees
 */
const compress_block = (s, ltree, dtree) =>
//    deflate_state *s;
//    const ct_data *ltree; /* literal tree */
//    const ct_data *dtree; /* distance tree */
{
  let dist;           /* distance of matched string */
  let lc;             /* match length or unmatched char (if dist == 0) */
  let lx = 0;         /* running index in l_buf */
  let code;           /* the code to send */
  let extra;          /* number of extra bits to send */

  if (s.last_lit !== 0) {
    do {
      dist = (s.pending_buf[s.d_buf + lx * 2] << 8) | (s.pending_buf[s.d_buf + lx * 2 + 1]);
      lc = s.pending_buf[s.l_buf + lx];
      lx++;

      if (dist === 0) {
        send_code(s, lc, ltree); /* send a literal byte */
        //Tracecv(isgraph(lc), (stderr," '%c' ", lc));
      } else {
        /* Here, lc is the match length - MIN_MATCH */
        code = _length_code[lc];
        send_code(s, code + LITERALS$1 + 1, ltree); /* send the length code */
        extra = extra_lbits[code];
        if (extra !== 0) {
          lc -= base_length[code];
          send_bits(s, lc, extra);       /* send the extra length bits */
        }
        dist--; /* dist is now the match distance - 1 */
        code = d_code(dist);
        //Assert (code < D_CODES, "bad d_code");

        send_code(s, code, dtree);       /* send the distance code */
        extra = extra_dbits[code];
        if (extra !== 0) {
          dist -= base_dist[code];
          send_bits(s, dist, extra);   /* send the extra distance bits */
        }
      } /* literal or match pair ? */

      /* Check that the overlay between pending_buf and d_buf+l_buf is ok: */
      //Assert((uInt)(s->pending) < s->lit_bufsize + 2*lx,
      //       "pendingBuf overflow");

    } while (lx < s.last_lit);
  }

  send_code(s, END_BLOCK, ltree);
};


/* ===========================================================================
 * Construct one Huffman tree and assigns the code bit strings and lengths.
 * Update the total bit length for the current block.
 * IN assertion: the field freq is set for all tree elements.
 * OUT assertions: the fields len and code are set to the optimal bit length
 *     and corresponding code. The length opt_len is updated; static_len is
 *     also updated if stree is not null. The field max_code is set.
 */
const build_tree = (s, desc) =>
//    deflate_state *s;
//    tree_desc *desc; /* the tree descriptor */
{
  const tree     = desc.dyn_tree;
  const stree    = desc.stat_desc.static_tree;
  const has_stree = desc.stat_desc.has_stree;
  const elems    = desc.stat_desc.elems;
  let n, m;          /* iterate over heap elements */
  let max_code = -1; /* largest code with non zero frequency */
  let node;          /* new node being created */

  /* Construct the initial heap, with least frequent element in
   * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
   * heap[0] is not used.
   */
  s.heap_len = 0;
  s.heap_max = HEAP_SIZE$1;

  for (n = 0; n < elems; n++) {
    if (tree[n * 2]/*.Freq*/ !== 0) {
      s.heap[++s.heap_len] = max_code = n;
      s.depth[n] = 0;

    } else {
      tree[n * 2 + 1]/*.Len*/ = 0;
    }
  }

  /* The pkzip format requires that at least one distance code exists,
   * and that at least one bit should be sent even if there is only one
   * possible code. So to avoid special checks later on we force at least
   * two codes of non zero frequency.
   */
  while (s.heap_len < 2) {
    node = s.heap[++s.heap_len] = (max_code < 2 ? ++max_code : 0);
    tree[node * 2]/*.Freq*/ = 1;
    s.depth[node] = 0;
    s.opt_len--;

    if (has_stree) {
      s.static_len -= stree[node * 2 + 1]/*.Len*/;
    }
    /* node is 0 or 1 so it does not have extra bits */
  }
  desc.max_code = max_code;

  /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
   * establish sub-heaps of increasing lengths:
   */
  for (n = (s.heap_len >> 1/*int /2*/); n >= 1; n--) { pqdownheap(s, tree, n); }

  /* Construct the Huffman tree by repeatedly combining the least two
   * frequent nodes.
   */
  node = elems;              /* next internal node of the tree */
  do {
    //pqremove(s, tree, n);  /* n = node of least frequency */
    /*** pqremove ***/
    n = s.heap[1/*SMALLEST*/];
    s.heap[1/*SMALLEST*/] = s.heap[s.heap_len--];
    pqdownheap(s, tree, 1/*SMALLEST*/);
    /***/

    m = s.heap[1/*SMALLEST*/]; /* m = node of next least frequency */

    s.heap[--s.heap_max] = n; /* keep the nodes sorted by frequency */
    s.heap[--s.heap_max] = m;

    /* Create a new node father of n and m */
    tree[node * 2]/*.Freq*/ = tree[n * 2]/*.Freq*/ + tree[m * 2]/*.Freq*/;
    s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
    tree[n * 2 + 1]/*.Dad*/ = tree[m * 2 + 1]/*.Dad*/ = node;

    /* and insert the new node in the heap */
    s.heap[1/*SMALLEST*/] = node++;
    pqdownheap(s, tree, 1/*SMALLEST*/);

  } while (s.heap_len >= 2);

  s.heap[--s.heap_max] = s.heap[1/*SMALLEST*/];

  /* At this point, the fields freq and dad are set. We can now
   * generate the bit lengths.
   */
  gen_bitlen(s, desc);

  /* The field len is now set, we can generate the bit codes */
  gen_codes(tree, max_code, s.bl_count);
};


/* ===========================================================================
 * Scan a literal or distance tree to determine the frequencies of the codes
 * in the bit length tree.
 */
const scan_tree = (s, tree, max_code) =>
//    deflate_state *s;
//    ct_data *tree;   /* the tree to be scanned */
//    int max_code;    /* and its largest code of non zero frequency */
{
  let n;                     /* iterates over all tree elements */
  let prevlen = -1;          /* last emitted length */
  let curlen;                /* length of current code */

  let nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

  let count = 0;             /* repeat count of the current code */
  let max_count = 7;         /* max repeat count */
  let min_count = 4;         /* min repeat count */

  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }
  tree[(max_code + 1) * 2 + 1]/*.Len*/ = 0xffff; /* guard */

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      s.bl_tree[curlen * 2]/*.Freq*/ += count;

    } else if (curlen !== 0) {

      if (curlen !== prevlen) { s.bl_tree[curlen * 2]/*.Freq*/++; }
      s.bl_tree[REP_3_6 * 2]/*.Freq*/++;

    } else if (count <= 10) {
      s.bl_tree[REPZ_3_10 * 2]/*.Freq*/++;

    } else {
      s.bl_tree[REPZ_11_138 * 2]/*.Freq*/++;
    }

    count = 0;
    prevlen = curlen;

    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
};


/* ===========================================================================
 * Send a literal or distance tree in compressed form, using the codes in
 * bl_tree.
 */
const send_tree = (s, tree, max_code) =>
//    deflate_state *s;
//    ct_data *tree; /* the tree to be scanned */
//    int max_code;       /* and its largest code of non zero frequency */
{
  let n;                     /* iterates over all tree elements */
  let prevlen = -1;          /* last emitted length */
  let curlen;                /* length of current code */

  let nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

  let count = 0;             /* repeat count of the current code */
  let max_count = 7;         /* max repeat count */
  let min_count = 4;         /* min repeat count */

  /* tree[max_code+1].Len = -1; */  /* guard already set */
  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      do { send_code(s, curlen, s.bl_tree); } while (--count !== 0);

    } else if (curlen !== 0) {
      if (curlen !== prevlen) {
        send_code(s, curlen, s.bl_tree);
        count--;
      }
      //Assert(count >= 3 && count <= 6, " 3_6?");
      send_code(s, REP_3_6, s.bl_tree);
      send_bits(s, count - 3, 2);

    } else if (count <= 10) {
      send_code(s, REPZ_3_10, s.bl_tree);
      send_bits(s, count - 3, 3);

    } else {
      send_code(s, REPZ_11_138, s.bl_tree);
      send_bits(s, count - 11, 7);
    }

    count = 0;
    prevlen = curlen;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
};


/* ===========================================================================
 * Construct the Huffman tree for the bit lengths and return the index in
 * bl_order of the last bit length code to send.
 */
const build_bl_tree = (s) => {

  let max_blindex;  /* index of last bit length code of non zero freq */

  /* Determine the bit length frequencies for literal and distance trees */
  scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
  scan_tree(s, s.dyn_dtree, s.d_desc.max_code);

  /* Build the bit length tree: */
  build_tree(s, s.bl_desc);
  /* opt_len now includes the length of the tree representations, except
   * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
   */

  /* Determine the number of bit length codes to send. The pkzip format
   * requires that at least 4 bit length codes be sent. (appnote.txt says
   * 3 but the actual value used is 4.)
   */
  for (max_blindex = BL_CODES$1 - 1; max_blindex >= 3; max_blindex--) {
    if (s.bl_tree[bl_order[max_blindex] * 2 + 1]/*.Len*/ !== 0) {
      break;
    }
  }
  /* Update opt_len to include the bit length tree and counts */
  s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
  //Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
  //        s->opt_len, s->static_len));

  return max_blindex;
};


/* ===========================================================================
 * Send the header for a block using dynamic Huffman trees: the counts, the
 * lengths of the bit length codes, the literal tree and the distance tree.
 * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
 */
const send_all_trees = (s, lcodes, dcodes, blcodes) =>
//    deflate_state *s;
//    int lcodes, dcodes, blcodes; /* number of codes for each tree */
{
  let rank;                    /* index in bl_order */

  //Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
  //Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
  //        "too many codes");
  //Tracev((stderr, "\nbl counts: "));
  send_bits(s, lcodes - 257, 5); /* not +255 as stated in appnote.txt */
  send_bits(s, dcodes - 1,   5);
  send_bits(s, blcodes - 4,  4); /* not -3 as stated in appnote.txt */
  for (rank = 0; rank < blcodes; rank++) {
    //Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
    send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1]/*.Len*/, 3);
  }
  //Tracev((stderr, "\nbl tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_ltree, lcodes - 1); /* literal tree */
  //Tracev((stderr, "\nlit tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_dtree, dcodes - 1); /* distance tree */
  //Tracev((stderr, "\ndist tree: sent %ld", s->bits_sent));
};


/* ===========================================================================
 * Check if the data type is TEXT or BINARY, using the following algorithm:
 * - TEXT if the two conditions below are satisfied:
 *    a) There are no non-portable control characters belonging to the
 *       "black list" (0..6, 14..25, 28..31).
 *    b) There is at least one printable character belonging to the
 *       "white list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
 * - BINARY otherwise.
 * - The following partially-portable control characters form a
 *   "gray list" that is ignored in this detection algorithm:
 *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
 * IN assertion: the fields Freq of dyn_ltree are set.
 */
const detect_data_type = (s) => {
  /* black_mask is the bit mask of black-listed bytes
   * set bits 0..6, 14..25, and 28..31
   * 0xf3ffc07f = binary 11110011111111111100000001111111
   */
  let black_mask = 0xf3ffc07f;
  let n;

  /* Check for non-textual ("black-listed") bytes. */
  for (n = 0; n <= 31; n++, black_mask >>>= 1) {
    if ((black_mask & 1) && (s.dyn_ltree[n * 2]/*.Freq*/ !== 0)) {
      return Z_BINARY;
    }
  }

  /* Check for textual ("white-listed") bytes. */
  if (s.dyn_ltree[9 * 2]/*.Freq*/ !== 0 || s.dyn_ltree[10 * 2]/*.Freq*/ !== 0 ||
      s.dyn_ltree[13 * 2]/*.Freq*/ !== 0) {
    return Z_TEXT;
  }
  for (n = 32; n < LITERALS$1; n++) {
    if (s.dyn_ltree[n * 2]/*.Freq*/ !== 0) {
      return Z_TEXT;
    }
  }

  /* There are no "black-listed" or "white-listed" bytes:
   * this stream either is empty or has tolerated ("gray-listed") bytes only.
   */
  return Z_BINARY;
};


let static_init_done = false;

/* ===========================================================================
 * Initialize the tree data structures for a new zlib stream.
 */
const _tr_init$1 = (s) =>
{

  if (!static_init_done) {
    tr_static_init();
    static_init_done = true;
  }

  s.l_desc  = new TreeDesc(s.dyn_ltree, static_l_desc);
  s.d_desc  = new TreeDesc(s.dyn_dtree, static_d_desc);
  s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);

  s.bi_buf = 0;
  s.bi_valid = 0;

  /* Initialize the first block of the first file: */
  init_block(s);
};


/* ===========================================================================
 * Send a stored block
 */
const _tr_stored_block$1 = (s, buf, stored_len, last) =>
//DeflateState *s;
//charf *buf;       /* input block */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
  send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);    /* send block type */
  copy_block(s, buf, stored_len, true); /* with header */
};


/* ===========================================================================
 * Send one empty static block to give enough lookahead for inflate.
 * This takes 10 bits, of which 7 may remain in the bit buffer.
 */
const _tr_align$1 = (s) => {
  send_bits(s, STATIC_TREES << 1, 3);
  send_code(s, END_BLOCK, static_ltree);
  bi_flush(s);
};


/* ===========================================================================
 * Determine the best encoding for the current block: dynamic trees, static
 * trees or store, and output the encoded block to the zip file.
 */
const _tr_flush_block$1 = (s, buf, stored_len, last) =>
//DeflateState *s;
//charf *buf;       /* input block, or NULL if too old */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
  let opt_lenb, static_lenb;  /* opt_len and static_len in bytes */
  let max_blindex = 0;        /* index of last bit length code of non zero freq */

  /* Build the Huffman trees unless a stored block is forced */
  if (s.level > 0) {

    /* Check if the file is binary or text */
    if (s.strm.data_type === Z_UNKNOWN$1) {
      s.strm.data_type = detect_data_type(s);
    }

    /* Construct the literal and distance trees */
    build_tree(s, s.l_desc);
    // Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));

    build_tree(s, s.d_desc);
    // Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));
    /* At this point, opt_len and static_len are the total bit lengths of
     * the compressed block data, excluding the tree representations.
     */

    /* Build the bit length tree for the above two trees, and get the index
     * in bl_order of the last bit length code to send.
     */
    max_blindex = build_bl_tree(s);

    /* Determine the best encoding. Compute the block lengths in bytes. */
    opt_lenb = (s.opt_len + 3 + 7) >>> 3;
    static_lenb = (s.static_len + 3 + 7) >>> 3;

    // Tracev((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u ",
    //        opt_lenb, s->opt_len, static_lenb, s->static_len, stored_len,
    //        s->last_lit));

    if (static_lenb <= opt_lenb) { opt_lenb = static_lenb; }

  } else {
    // Assert(buf != (char*)0, "lost buf");
    opt_lenb = static_lenb = stored_len + 5; /* force a stored block */
  }

  if ((stored_len + 4 <= opt_lenb) && (buf !== -1)) {
    /* 4: two words for the lengths */

    /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
     * Otherwise we can't have processed more than WSIZE input bytes since
     * the last block flush, because compression would have been
     * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
     * transform a block into a stored block.
     */
    _tr_stored_block$1(s, buf, stored_len, last);

  } else if (s.strategy === Z_FIXED$1 || static_lenb === opt_lenb) {

    send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
    compress_block(s, static_ltree, static_dtree);

  } else {
    send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
    send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
    compress_block(s, s.dyn_ltree, s.dyn_dtree);
  }
  // Assert (s->compressed_len == s->bits_sent, "bad compressed size");
  /* The above check is made mod 2^32, for files larger than 512 MB
   * and uLong implemented on 32 bits.
   */
  init_block(s);

  if (last) {
    bi_windup(s);
  }
  // Tracev((stderr,"\ncomprlen %lu(%lu) ", s->compressed_len>>3,
  //       s->compressed_len-7*last));
};

/* ===========================================================================
 * Save the match info and tally the frequency counts. Return true if
 * the current block must be flushed.
 */
const _tr_tally$1 = (s, dist, lc) =>
//    deflate_state *s;
//    unsigned dist;  /* distance of matched string */
//    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */
{
  //let out_length, in_length, dcode;

  s.pending_buf[s.d_buf + s.last_lit * 2]     = (dist >>> 8) & 0xff;
  s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 0xff;

  s.pending_buf[s.l_buf + s.last_lit] = lc & 0xff;
  s.last_lit++;

  if (dist === 0) {
    /* lc is the unmatched char */
    s.dyn_ltree[lc * 2]/*.Freq*/++;
  } else {
    s.matches++;
    /* Here, lc is the match length - MIN_MATCH */
    dist--;             /* dist = match distance - 1 */
    //Assert((ush)dist < (ush)MAX_DIST(s) &&
    //       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
    //       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");

    s.dyn_ltree[(_length_code[lc] + LITERALS$1 + 1) * 2]/*.Freq*/++;
    s.dyn_dtree[d_code(dist) * 2]/*.Freq*/++;
  }

// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility

//#ifdef TRUNCATE_BLOCK
//  /* Try to guess if it is profitable to stop the current block here */
//  if ((s.last_lit & 0x1fff) === 0 && s.level > 2) {
//    /* Compute an upper bound for the compressed length */
//    out_length = s.last_lit*8;
//    in_length = s.strstart - s.block_start;
//
//    for (dcode = 0; dcode < D_CODES; dcode++) {
//      out_length += s.dyn_dtree[dcode*2]/*.Freq*/ * (5 + extra_dbits[dcode]);
//    }
//    out_length >>>= 3;
//    //Tracev((stderr,"\nlast_lit %u, in %ld, out ~%ld(%ld%%) ",
//    //       s->last_lit, in_length, out_length,
//    //       100L - out_length*100L/in_length));
//    if (s.matches < (s.last_lit>>1)/*int /2*/ && out_length < (in_length>>1)/*int /2*/) {
//      return true;
//    }
//  }
//#endif

  return (s.last_lit === s.lit_bufsize - 1);
  /* We avoid equality with lit_bufsize because of wraparound at 64K
   * on 16 bit machines and because stored blocks are restricted to
   * 64K-1 bytes.
   */
};

var _tr_init_1  = _tr_init$1;
var _tr_stored_block_1 = _tr_stored_block$1;
var _tr_flush_block_1  = _tr_flush_block$1;
var _tr_tally_1 = _tr_tally$1;
var _tr_align_1 = _tr_align$1;

var trees = {
	_tr_init: _tr_init_1,
	_tr_stored_block: _tr_stored_block_1,
	_tr_flush_block: _tr_flush_block_1,
	_tr_tally: _tr_tally_1,
	_tr_align: _tr_align_1
};

// Note: adler32 takes 12% for level 0 and 2% for level 6.
// It isn't worth it to make additional optimizations as in original.
// Small size is preferable.

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

const adler32 = (adler, buf, len, pos) => {
  let s1 = (adler & 0xffff) |0,
      s2 = ((adler >>> 16) & 0xffff) |0,
      n = 0;

  while (len !== 0) {
    // Set limit ~ twice less than 5552, to keep
    // s2 in 31-bits, because we force signed ints.
    // in other case %= will fail.
    n = len > 2000 ? 2000 : len;
    len -= n;

    do {
      s1 = (s1 + buf[pos++]) |0;
      s2 = (s2 + s1) |0;
    } while (--n);

    s1 %= 65521;
    s2 %= 65521;
  }

  return (s1 | (s2 << 16)) |0;
};


var adler32_1 = adler32;

// Note: we can't get significant speed boost here.
// So write code to minimize size - no pregenerated tables
// and array tools dependencies.

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

// Use ordinary array, since untyped makes no boost here
const makeTable = () => {
  let c, table = [];

  for (var n = 0; n < 256; n++) {
    c = n;
    for (var k = 0; k < 8; k++) {
      c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
    }
    table[n] = c;
  }

  return table;
};

// Create table on load. Just 255 signed longs. Not a problem.
const crcTable = new Uint32Array(makeTable());


const crc32 = (crc, buf, len, pos) => {
  const t = crcTable;
  const end = pos + len;

  crc ^= -1;

  for (let i = pos; i < end; i++) {
    crc = (crc >>> 8) ^ t[(crc ^ buf[i]) & 0xFF];
  }

  return (crc ^ (-1)); // >>> 0;
};


var crc32_1 = crc32;

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var messages = {
  2:      'need dictionary',     /* Z_NEED_DICT       2  */
  1:      'stream end',          /* Z_STREAM_END      1  */
  0:      '',                    /* Z_OK              0  */
  '-1':   'file error',          /* Z_ERRNO         (-1) */
  '-2':   'stream error',        /* Z_STREAM_ERROR  (-2) */
  '-3':   'data error',          /* Z_DATA_ERROR    (-3) */
  '-4':   'insufficient memory', /* Z_MEM_ERROR     (-4) */
  '-5':   'buffer error',        /* Z_BUF_ERROR     (-5) */
  '-6':   'incompatible version' /* Z_VERSION_ERROR (-6) */
};

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var constants$2 = {

  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH:         0,
  Z_PARTIAL_FLUSH:    1,
  Z_SYNC_FLUSH:       2,
  Z_FULL_FLUSH:       3,
  Z_FINISH:           4,
  Z_BLOCK:            5,
  Z_TREES:            6,

  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK:               0,
  Z_STREAM_END:       1,
  Z_NEED_DICT:        2,
  Z_ERRNO:           -1,
  Z_STREAM_ERROR:    -2,
  Z_DATA_ERROR:      -3,
  Z_MEM_ERROR:       -4,
  Z_BUF_ERROR:       -5,
  //Z_VERSION_ERROR: -6,

  /* compression levels */
  Z_NO_COMPRESSION:         0,
  Z_BEST_SPEED:             1,
  Z_BEST_COMPRESSION:       9,
  Z_DEFAULT_COMPRESSION:   -1,


  Z_FILTERED:               1,
  Z_HUFFMAN_ONLY:           2,
  Z_RLE:                    3,
  Z_FIXED:                  4,
  Z_DEFAULT_STRATEGY:       0,

  /* Possible values of the data_type field (though see inflate()) */
  Z_BINARY:                 0,
  Z_TEXT:                   1,
  //Z_ASCII:                1, // = Z_TEXT (deprecated)
  Z_UNKNOWN:                2,

  /* The deflate compression method */
  Z_DEFLATED:               8
  //Z_NULL:                 null // Use -1 or null inline, depending on var type
};

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

const { _tr_init, _tr_stored_block, _tr_flush_block, _tr_tally, _tr_align } = trees;




/* Public constants ==========================================================*/
/* ===========================================================================*/

const {
  Z_NO_FLUSH: Z_NO_FLUSH$2, Z_PARTIAL_FLUSH, Z_FULL_FLUSH: Z_FULL_FLUSH$1, Z_FINISH: Z_FINISH$3, Z_BLOCK: Z_BLOCK$1,
  Z_OK: Z_OK$3, Z_STREAM_END: Z_STREAM_END$3, Z_STREAM_ERROR: Z_STREAM_ERROR$2, Z_DATA_ERROR: Z_DATA_ERROR$2, Z_BUF_ERROR: Z_BUF_ERROR$1,
  Z_DEFAULT_COMPRESSION: Z_DEFAULT_COMPRESSION$1,
  Z_FILTERED, Z_HUFFMAN_ONLY, Z_RLE, Z_FIXED, Z_DEFAULT_STRATEGY: Z_DEFAULT_STRATEGY$1,
  Z_UNKNOWN,
  Z_DEFLATED: Z_DEFLATED$2
} = constants$2;

/*============================================================================*/


const MAX_MEM_LEVEL = 9;
/* Maximum value for memLevel in deflateInit2 */
const MAX_WBITS$1 = 15;
/* 32K LZ77 window */
const DEF_MEM_LEVEL = 8;


const LENGTH_CODES  = 29;
/* number of length codes, not counting the special END_BLOCK code */
const LITERALS      = 256;
/* number of literal bytes 0..255 */
const L_CODES       = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */
const D_CODES       = 30;
/* number of distance codes */
const BL_CODES      = 19;
/* number of codes used to transfer the bit lengths */
const HEAP_SIZE     = 2 * L_CODES + 1;
/* maximum heap size */
const MAX_BITS  = 15;
/* All codes must not exceed MAX_BITS bits */

const MIN_MATCH = 3;
const MAX_MATCH = 258;
const MIN_LOOKAHEAD = (MAX_MATCH + MIN_MATCH + 1);

const PRESET_DICT = 0x20;

const INIT_STATE = 42;
const EXTRA_STATE = 69;
const NAME_STATE = 73;
const COMMENT_STATE = 91;
const HCRC_STATE = 103;
const BUSY_STATE = 113;
const FINISH_STATE = 666;

const BS_NEED_MORE      = 1; /* block not completed, need more input or more output */
const BS_BLOCK_DONE     = 2; /* block flush performed */
const BS_FINISH_STARTED = 3; /* finish started, need only more output at next deflate */
const BS_FINISH_DONE    = 4; /* finish done, accept no more input or output */

const OS_CODE = 0x03; // Unix :) . Don't detect, use this default.

const err = (strm, errorCode) => {
  strm.msg = messages[errorCode];
  return errorCode;
};

const rank = (f) => {
  return ((f) << 1) - ((f) > 4 ? 9 : 0);
};

const zero = (buf) => {
  let len = buf.length; while (--len >= 0) { buf[len] = 0; }
};


/* eslint-disable new-cap */
let HASH_ZLIB = (s, prev, data) => ((prev << s.hash_shift) ^ data) & s.hash_mask;
// This hash causes less collisions, https://github.com/nodeca/pako/issues/135
// But breaks binary compatibility
//let HASH_FAST = (s, prev, data) => ((prev << 8) + (prev >> 8) + (data << 4)) & s.hash_mask;
let HASH = HASH_ZLIB;

/* =========================================================================
 * Flush as much pending output as possible. All deflate() output goes
 * through this function so some applications may wish to modify it
 * to avoid allocating a large strm->output buffer and copying into it.
 * (See also read_buf()).
 */
const flush_pending = (strm) => {
  const s = strm.state;

  //_tr_flush_bits(s);
  let len = s.pending;
  if (len > strm.avail_out) {
    len = strm.avail_out;
  }
  if (len === 0) { return; }

  strm.output.set(s.pending_buf.subarray(s.pending_out, s.pending_out + len), strm.next_out);
  strm.next_out += len;
  s.pending_out += len;
  strm.total_out += len;
  strm.avail_out -= len;
  s.pending -= len;
  if (s.pending === 0) {
    s.pending_out = 0;
  }
};


const flush_block_only = (s, last) => {
  _tr_flush_block(s, (s.block_start >= 0 ? s.block_start : -1), s.strstart - s.block_start, last);
  s.block_start = s.strstart;
  flush_pending(s.strm);
};


const put_byte = (s, b) => {
  s.pending_buf[s.pending++] = b;
};


/* =========================================================================
 * Put a short in the pending buffer. The 16-bit value is put in MSB order.
 * IN assertion: the stream state is correct and there is enough room in
 * pending_buf.
 */
const putShortMSB = (s, b) => {

  //  put_byte(s, (Byte)(b >> 8));
//  put_byte(s, (Byte)(b & 0xff));
  s.pending_buf[s.pending++] = (b >>> 8) & 0xff;
  s.pending_buf[s.pending++] = b & 0xff;
};


/* ===========================================================================
 * Read a new buffer from the current input stream, update the adler32
 * and total number of bytes read.  All deflate() input goes through
 * this function so some applications may wish to modify it to avoid
 * allocating a large strm->input buffer and copying from it.
 * (See also flush_pending()).
 */
const read_buf = (strm, buf, start, size) => {

  let len = strm.avail_in;

  if (len > size) { len = size; }
  if (len === 0) { return 0; }

  strm.avail_in -= len;

  // zmemcpy(buf, strm->next_in, len);
  buf.set(strm.input.subarray(strm.next_in, strm.next_in + len), start);
  if (strm.state.wrap === 1) {
    strm.adler = adler32_1(strm.adler, buf, len, start);
  }

  else if (strm.state.wrap === 2) {
    strm.adler = crc32_1(strm.adler, buf, len, start);
  }

  strm.next_in += len;
  strm.total_in += len;

  return len;
};


/* ===========================================================================
 * Set match_start to the longest match starting at the given string and
 * return its length. Matches shorter or equal to prev_length are discarded,
 * in which case the result is equal to prev_length and match_start is
 * garbage.
 * IN assertions: cur_match is the head of the hash chain for the current
 *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
 * OUT assertion: the match length is not greater than s->lookahead.
 */
const longest_match = (s, cur_match) => {

  let chain_length = s.max_chain_length;      /* max hash chain length */
  let scan = s.strstart; /* current string */
  let match;                       /* matched string */
  let len;                           /* length of current match */
  let best_len = s.prev_length;              /* best match length so far */
  let nice_match = s.nice_match;             /* stop if match long enough */
  const limit = (s.strstart > (s.w_size - MIN_LOOKAHEAD)) ?
      s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0/*NIL*/;

  const _win = s.window; // shortcut

  const wmask = s.w_mask;
  const prev  = s.prev;

  /* Stop when cur_match becomes <= limit. To simplify the code,
   * we prevent matches with the string of window index 0.
   */

  const strend = s.strstart + MAX_MATCH;
  let scan_end1  = _win[scan + best_len - 1];
  let scan_end   = _win[scan + best_len];

  /* The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of 16.
   * It is easy to get rid of this optimization if necessary.
   */
  // Assert(s->hash_bits >= 8 && MAX_MATCH == 258, "Code too clever");

  /* Do not waste too much time if we already have a good match: */
  if (s.prev_length >= s.good_match) {
    chain_length >>= 2;
  }
  /* Do not look for matches beyond the end of the input. This is necessary
   * to make deflate deterministic.
   */
  if (nice_match > s.lookahead) { nice_match = s.lookahead; }

  // Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");

  do {
    // Assert(cur_match < s->strstart, "no future");
    match = cur_match;

    /* Skip to next match if the match length cannot increase
     * or if the match length is less than 2.  Note that the checks below
     * for insufficient lookahead only occur occasionally for performance
     * reasons.  Therefore uninitialized memory will be accessed, and
     * conditional jumps will be made that depend on those values.
     * However the length of the match is limited to the lookahead, so
     * the output of deflate is not affected by the uninitialized values.
     */

    if (_win[match + best_len]     !== scan_end  ||
        _win[match + best_len - 1] !== scan_end1 ||
        _win[match]                !== _win[scan] ||
        _win[++match]              !== _win[scan + 1]) {
      continue;
    }

    /* The check at best_len-1 can be removed because it will be made
     * again later. (This heuristic is not always a win.)
     * It is not necessary to compare scan[2] and match[2] since they
     * are always equal when the other bytes match, given that
     * the hash keys are equal and that HASH_BITS >= 8.
     */
    scan += 2;
    match++;
    // Assert(*scan == *match, "match[2]?");

    /* We check for insufficient lookahead only every 8th comparison;
     * the 256th check will be made at strstart+258.
     */
    do {
      /*jshint noempty:false*/
    } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             scan < strend);

    // Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");

    len = MAX_MATCH - (strend - scan);
    scan = strend - MAX_MATCH;

    if (len > best_len) {
      s.match_start = cur_match;
      best_len = len;
      if (len >= nice_match) {
        break;
      }
      scan_end1  = _win[scan + best_len - 1];
      scan_end   = _win[scan + best_len];
    }
  } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);

  if (best_len <= s.lookahead) {
    return best_len;
  }
  return s.lookahead;
};


/* ===========================================================================
 * Fill the window when the lookahead becomes insufficient.
 * Updates strstart and lookahead.
 *
 * IN assertion: lookahead < MIN_LOOKAHEAD
 * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
 *    At least one byte has been read, or avail_in == 0; reads are
 *    performed for at least two bytes (required for the zip translate_eol
 *    option -- not supported here).
 */
const fill_window = (s) => {

  const _w_size = s.w_size;
  let p, n, m, more, str;

  //Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");

  do {
    more = s.window_size - s.lookahead - s.strstart;

    // JS ints have 32 bit, block below not needed
    /* Deal with !@#$% 64K limit: */
    //if (sizeof(int) <= 2) {
    //    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
    //        more = wsize;
    //
    //  } else if (more == (unsigned)(-1)) {
    //        /* Very unlikely, but possible on 16 bit machine if
    //         * strstart == 0 && lookahead == 1 (input done a byte at time)
    //         */
    //        more--;
    //    }
    //}


    /* If the window is almost full and there is insufficient lookahead,
     * move the upper half to the lower one to make room in the upper half.
     */
    if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {

      s.window.set(s.window.subarray(_w_size, _w_size + _w_size), 0);
      s.match_start -= _w_size;
      s.strstart -= _w_size;
      /* we now have strstart >= MAX_DIST */
      s.block_start -= _w_size;

      /* Slide the hash table (could be avoided with 32 bit values
       at the expense of memory usage). We slide even when level == 0
       to keep the hash table consistent if we switch back to level > 0
       later. (Using level 0 permanently is not an optimal usage of
       zlib, so we don't care about this pathological case.)
       */

      n = s.hash_size;
      p = n;

      do {
        m = s.head[--p];
        s.head[p] = (m >= _w_size ? m - _w_size : 0);
      } while (--n);

      n = _w_size;
      p = n;

      do {
        m = s.prev[--p];
        s.prev[p] = (m >= _w_size ? m - _w_size : 0);
        /* If n is not on any hash chain, prev[n] is garbage but
         * its value will never be used.
         */
      } while (--n);

      more += _w_size;
    }
    if (s.strm.avail_in === 0) {
      break;
    }

    /* If there was no sliding:
     *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
     *    more == window_size - lookahead - strstart
     * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
     * => more >= window_size - 2*WSIZE + 2
     * In the BIG_MEM or MMAP case (not yet supported),
     *   window_size == input_size + MIN_LOOKAHEAD  &&
     *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
     * Otherwise, window_size == 2*WSIZE so more >= 2.
     * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
     */
    //Assert(more >= 2, "more < 2");
    n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
    s.lookahead += n;

    /* Initialize the hash value now that we have some input: */
    if (s.lookahead + s.insert >= MIN_MATCH) {
      str = s.strstart - s.insert;
      s.ins_h = s.window[str];

      /* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */
      s.ins_h = HASH(s, s.ins_h, s.window[str + 1]);
//#if MIN_MATCH != 3
//        Call update_hash() MIN_MATCH-3 more times
//#endif
      while (s.insert) {
        /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
        s.ins_h = HASH(s, s.ins_h, s.window[str + MIN_MATCH - 1]);

        s.prev[str & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = str;
        str++;
        s.insert--;
        if (s.lookahead + s.insert < MIN_MATCH) {
          break;
        }
      }
    }
    /* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
     * but this is not important since only literal bytes will be emitted.
     */

  } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);

  /* If the WIN_INIT bytes after the end of the current data have never been
   * written, then zero those bytes in order to avoid memory check reports of
   * the use of uninitialized (or uninitialised as Julian writes) bytes by
   * the longest match routines.  Update the high water mark for the next
   * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
   * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
   */
//  if (s.high_water < s.window_size) {
//    const curr = s.strstart + s.lookahead;
//    let init = 0;
//
//    if (s.high_water < curr) {
//      /* Previous high water mark below current data -- zero WIN_INIT
//       * bytes or up to end of window, whichever is less.
//       */
//      init = s.window_size - curr;
//      if (init > WIN_INIT)
//        init = WIN_INIT;
//      zmemzero(s->window + curr, (unsigned)init);
//      s->high_water = curr + init;
//    }
//    else if (s->high_water < (ulg)curr + WIN_INIT) {
//      /* High water mark at or above current data, but below current data
//       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
//       * to end of window, whichever is less.
//       */
//      init = (ulg)curr + WIN_INIT - s->high_water;
//      if (init > s->window_size - s->high_water)
//        init = s->window_size - s->high_water;
//      zmemzero(s->window + s->high_water, (unsigned)init);
//      s->high_water += init;
//    }
//  }
//
//  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
//    "not enough room for search");
};

/* ===========================================================================
 * Copy without compression as much as possible from the input stream, return
 * the current block state.
 * This function does not insert new strings in the dictionary since
 * uncompressible data is probably not useful. This function is used
 * only for the level=0 compression option.
 * NOTE: this function should be optimized to avoid extra copying from
 * window to pending_buf.
 */
const deflate_stored = (s, flush) => {

  /* Stored blocks are limited to 0xffff bytes, pending_buf is limited
   * to pending_buf_size, and each stored block has a 5 byte header:
   */
  let max_block_size = 0xffff;

  if (max_block_size > s.pending_buf_size - 5) {
    max_block_size = s.pending_buf_size - 5;
  }

  /* Copy as much as possible from input to output: */
  for (;;) {
    /* Fill the window as much as possible: */
    if (s.lookahead <= 1) {

      //Assert(s->strstart < s->w_size+MAX_DIST(s) ||
      //  s->block_start >= (long)s->w_size, "slide too late");
//      if (!(s.strstart < s.w_size + (s.w_size - MIN_LOOKAHEAD) ||
//        s.block_start >= s.w_size)) {
//        throw  new Error("slide too late");
//      }

      fill_window(s);
      if (s.lookahead === 0 && flush === Z_NO_FLUSH$2) {
        return BS_NEED_MORE;
      }

      if (s.lookahead === 0) {
        break;
      }
      /* flush the current block */
    }
    //Assert(s->block_start >= 0L, "block gone");
//    if (s.block_start < 0) throw new Error("block gone");

    s.strstart += s.lookahead;
    s.lookahead = 0;

    /* Emit a stored block if pending_buf will be full: */
    const max_start = s.block_start + max_block_size;

    if (s.strstart === 0 || s.strstart >= max_start) {
      /* strstart == 0 is possible when wraparound on 16-bit machine */
      s.lookahead = s.strstart - max_start;
      s.strstart = max_start;
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/


    }
    /* Flush if we may have to slide, otherwise block_start may become
     * negative and the data will be gone:
     */
    if (s.strstart - s.block_start >= (s.w_size - MIN_LOOKAHEAD)) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }

  s.insert = 0;

  if (flush === Z_FINISH$3) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }

  if (s.strstart > s.block_start) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_NEED_MORE;
};

/* ===========================================================================
 * Compress as much as possible from the input stream, return the current
 * block state.
 * This function does not perform lazy evaluation of matches and inserts
 * new strings in the dictionary only for unmatched strings or for short
 * matches. It is used only for the fast compression options.
 */
const deflate_fast = (s, flush) => {

  let hash_head;        /* head of the hash chain */
  let bflush;           /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH$2) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break; /* flush the current block */
      }
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     * At this point we have always match_length < MIN_MATCH
     */
    if (hash_head !== 0/*NIL*/ && ((s.strstart - hash_head) <= (s.w_size - MIN_LOOKAHEAD))) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */
    }
    if (s.match_length >= MIN_MATCH) {
      // check_match(s, s.strstart, s.match_start, s.match_length); // for debug only

      /*** _tr_tally_dist(s, s.strstart - s.match_start,
                     s.match_length - MIN_MATCH, bflush); ***/
      bflush = _tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;

      /* Insert new strings in the hash table only if the match length
       * is not too large. This saves time but degrades compression.
       */
      if (s.match_length <= s.max_lazy_match/*max_insert_length*/ && s.lookahead >= MIN_MATCH) {
        s.match_length--; /* string at strstart already in table */
        do {
          s.strstart++;
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
          /* strstart never exceeds WSIZE-MAX_MATCH, so there are
           * always MIN_MATCH bytes ahead.
           */
        } while (--s.match_length !== 0);
        s.strstart++;
      } else
      {
        s.strstart += s.match_length;
        s.match_length = 0;
        s.ins_h = s.window[s.strstart];
        /* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */
        s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + 1]);

//#if MIN_MATCH != 3
//                Call UPDATE_HASH() MIN_MATCH-3 more times
//#endif
        /* If lookahead < MIN_MATCH, ins_h is garbage, but it does not
         * matter since it will be recomputed at next deflate call.
         */
      }
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s.window[s.strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = _tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = ((s.strstart < (MIN_MATCH - 1)) ? s.strstart : MIN_MATCH - 1);
  if (flush === Z_FINISH$3) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
};

/* ===========================================================================
 * Same as above, but achieves better compression. We use a lazy
 * evaluation for matches: a match is finally adopted only if there is
 * no better match at the next window position.
 */
const deflate_slow = (s, flush) => {

  let hash_head;          /* head of hash chain */
  let bflush;              /* set if current block must be flushed */

  let max_insert;

  /* Process the input block. */
  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH$2) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     */
    s.prev_length = s.match_length;
    s.prev_match = s.match_start;
    s.match_length = MIN_MATCH - 1;

    if (hash_head !== 0/*NIL*/ && s.prev_length < s.max_lazy_match &&
        s.strstart - hash_head <= (s.w_size - MIN_LOOKAHEAD)/*MAX_DIST(s)*/) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */

      if (s.match_length <= 5 &&
         (s.strategy === Z_FILTERED || (s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096/*TOO_FAR*/))) {

        /* If prev_match is also MIN_MATCH, match_start is garbage
         * but we will ignore the current match anyway.
         */
        s.match_length = MIN_MATCH - 1;
      }
    }
    /* If there was a match at the previous step and the current
     * match is not better, output the previous match:
     */
    if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
      max_insert = s.strstart + s.lookahead - MIN_MATCH;
      /* Do not insert strings in hash table beyond this. */

      //check_match(s, s.strstart-1, s.prev_match, s.prev_length);

      /***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
                     s.prev_length - MIN_MATCH, bflush);***/
      bflush = _tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
      /* Insert in hash table all strings up to the end of the match.
       * strstart-1 and strstart are already inserted. If there is not
       * enough lookahead, the last two strings are not inserted in
       * the hash table.
       */
      s.lookahead -= s.prev_length - 1;
      s.prev_length -= 2;
      do {
        if (++s.strstart <= max_insert) {
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
        }
      } while (--s.prev_length !== 0);
      s.match_available = 0;
      s.match_length = MIN_MATCH - 1;
      s.strstart++;

      if (bflush) {
        /*** FLUSH_BLOCK(s, 0); ***/
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/
      }

    } else if (s.match_available) {
      /* If there was no match at the previous position, output a
       * single literal. If there was a match but the current match
       * is longer, truncate the previous match to a single literal.
       */
      //Tracevv((stderr,"%c", s->window[s->strstart-1]));
      /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
      bflush = _tr_tally(s, 0, s.window[s.strstart - 1]);

      if (bflush) {
        /*** FLUSH_BLOCK_ONLY(s, 0) ***/
        flush_block_only(s, false);
        /***/
      }
      s.strstart++;
      s.lookahead--;
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    } else {
      /* There is no previous match to compare with, wait for
       * the next step to decide.
       */
      s.match_available = 1;
      s.strstart++;
      s.lookahead--;
    }
  }
  //Assert (flush != Z_NO_FLUSH, "no flush?");
  if (s.match_available) {
    //Tracevv((stderr,"%c", s->window[s->strstart-1]));
    /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
    bflush = _tr_tally(s, 0, s.window[s.strstart - 1]);

    s.match_available = 0;
  }
  s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
  if (flush === Z_FINISH$3) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_BLOCK_DONE;
};


/* ===========================================================================
 * For Z_RLE, simply look for runs of bytes, generate matches only of distance
 * one.  Do not maintain a hash table.  (It will be regenerated if this run of
 * deflate switches away from Z_RLE.)
 */
const deflate_rle = (s, flush) => {

  let bflush;            /* set if current block must be flushed */
  let prev;              /* byte at distance one to match */
  let scan, strend;      /* scan goes up to strend for length of run */

  const _win = s.window;

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the longest run, plus one for the unrolled loop.
     */
    if (s.lookahead <= MAX_MATCH) {
      fill_window(s);
      if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH$2) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* See how many times the previous byte repeats */
    s.match_length = 0;
    if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
      scan = s.strstart - 1;
      prev = _win[scan];
      if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
        strend = s.strstart + MAX_MATCH;
        do {
          /*jshint noempty:false*/
        } while (prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 scan < strend);
        s.match_length = MAX_MATCH - (strend - scan);
        if (s.match_length > s.lookahead) {
          s.match_length = s.lookahead;
        }
      }
      //Assert(scan <= s->window+(uInt)(s->window_size-1), "wild scan");
    }

    /* Emit match if have run of MIN_MATCH or longer, else emit literal */
    if (s.match_length >= MIN_MATCH) {
      //check_match(s, s.strstart, s.strstart - 1, s.match_length);

      /*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/
      bflush = _tr_tally(s, 1, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;
      s.strstart += s.match_length;
      s.match_length = 0;
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s->window[s->strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = _tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH$3) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
};

/* ===========================================================================
 * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
 * (It will be regenerated if this run of deflate switches away from Huffman.)
 */
const deflate_huff = (s, flush) => {

  let bflush;             /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we have a literal to write. */
    if (s.lookahead === 0) {
      fill_window(s);
      if (s.lookahead === 0) {
        if (flush === Z_NO_FLUSH$2) {
          return BS_NEED_MORE;
        }
        break;      /* flush the current block */
      }
    }

    /* Output a literal byte */
    s.match_length = 0;
    //Tracevv((stderr,"%c", s->window[s->strstart]));
    /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
    bflush = _tr_tally(s, 0, s.window[s.strstart]);
    s.lookahead--;
    s.strstart++;
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH$3) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
};

/* Values for max_lazy_match, good_match and max_chain_length, depending on
 * the desired pack level (0..9). The values given below have been tuned to
 * exclude worst case performance for pathological files. Better values may be
 * found for specific files.
 */
function Config(good_length, max_lazy, nice_length, max_chain, func) {

  this.good_length = good_length;
  this.max_lazy = max_lazy;
  this.nice_length = nice_length;
  this.max_chain = max_chain;
  this.func = func;
}

const configuration_table = [
  /*      good lazy nice chain */
  new Config(0, 0, 0, 0, deflate_stored),          /* 0 store only */
  new Config(4, 4, 8, 4, deflate_fast),            /* 1 max speed, no lazy matches */
  new Config(4, 5, 16, 8, deflate_fast),           /* 2 */
  new Config(4, 6, 32, 32, deflate_fast),          /* 3 */

  new Config(4, 4, 16, 16, deflate_slow),          /* 4 lazy matches */
  new Config(8, 16, 32, 32, deflate_slow),         /* 5 */
  new Config(8, 16, 128, 128, deflate_slow),       /* 6 */
  new Config(8, 32, 128, 256, deflate_slow),       /* 7 */
  new Config(32, 128, 258, 1024, deflate_slow),    /* 8 */
  new Config(32, 258, 258, 4096, deflate_slow)     /* 9 max compression */
];


/* ===========================================================================
 * Initialize the "longest match" routines for a new zlib stream
 */
const lm_init = (s) => {

  s.window_size = 2 * s.w_size;

  /*** CLEAR_HASH(s); ***/
  zero(s.head); // Fill with NIL (= 0);

  /* Set the default configuration parameters:
   */
  s.max_lazy_match = configuration_table[s.level].max_lazy;
  s.good_match = configuration_table[s.level].good_length;
  s.nice_match = configuration_table[s.level].nice_length;
  s.max_chain_length = configuration_table[s.level].max_chain;

  s.strstart = 0;
  s.block_start = 0;
  s.lookahead = 0;
  s.insert = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  s.ins_h = 0;
};


function DeflateState() {
  this.strm = null;            /* pointer back to this zlib stream */
  this.status = 0;            /* as the name implies */
  this.pending_buf = null;      /* output still pending */
  this.pending_buf_size = 0;  /* size of pending_buf */
  this.pending_out = 0;       /* next pending byte to output to the stream */
  this.pending = 0;           /* nb of bytes in the pending buffer */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
  this.gzhead = null;         /* gzip header information to write */
  this.gzindex = 0;           /* where in extra, name, or comment */
  this.method = Z_DEFLATED$2; /* can only be DEFLATED */
  this.last_flush = -1;   /* value of flush param for previous deflate call */

  this.w_size = 0;  /* LZ77 window size (32K by default) */
  this.w_bits = 0;  /* log2(w_size)  (8..16) */
  this.w_mask = 0;  /* w_size - 1 */

  this.window = null;
  /* Sliding window. Input bytes are read into the second half of the window,
   * and move to the first half later to keep a dictionary of at least wSize
   * bytes. With this organization, matches are limited to a distance of
   * wSize-MAX_MATCH bytes, but this ensures that IO is always
   * performed with a length multiple of the block size.
   */

  this.window_size = 0;
  /* Actual size of window: 2*wSize, except when the user input buffer
   * is directly used as sliding window.
   */

  this.prev = null;
  /* Link to older string with same hash index. To limit the size of this
   * array to 64K, this link is maintained only for the last 32K strings.
   * An index in this array is thus a window index modulo 32K.
   */

  this.head = null;   /* Heads of the hash chains or NIL. */

  this.ins_h = 0;       /* hash index of string to be inserted */
  this.hash_size = 0;   /* number of elements in hash table */
  this.hash_bits = 0;   /* log2(hash_size) */
  this.hash_mask = 0;   /* hash_size-1 */

  this.hash_shift = 0;
  /* Number of bits by which ins_h must be shifted at each input
   * step. It must be such that after MIN_MATCH steps, the oldest
   * byte no longer takes part in the hash key, that is:
   *   hash_shift * MIN_MATCH >= hash_bits
   */

  this.block_start = 0;
  /* Window position at the beginning of the current output block. Gets
   * negative when the window is moved backwards.
   */

  this.match_length = 0;      /* length of best match */
  this.prev_match = 0;        /* previous match */
  this.match_available = 0;   /* set if previous match exists */
  this.strstart = 0;          /* start of string to insert */
  this.match_start = 0;       /* start of matching string */
  this.lookahead = 0;         /* number of valid bytes ahead in window */

  this.prev_length = 0;
  /* Length of the best match at previous step. Matches not greater than this
   * are discarded. This is used in the lazy match evaluation.
   */

  this.max_chain_length = 0;
  /* To speed up deflation, hash chains are never searched beyond this
   * length.  A higher limit improves compression ratio but degrades the
   * speed.
   */

  this.max_lazy_match = 0;
  /* Attempt to find a better match only when the current match is strictly
   * smaller than this value. This mechanism is used only for compression
   * levels >= 4.
   */
  // That's alias to max_lazy_match, don't use directly
  //this.max_insert_length = 0;
  /* Insert new strings in the hash table only if the match length is not
   * greater than this length. This saves time but degrades compression.
   * max_insert_length is used only for compression levels <= 3.
   */

  this.level = 0;     /* compression level (1..9) */
  this.strategy = 0;  /* favor or force Huffman coding*/

  this.good_match = 0;
  /* Use a faster search when the previous match is longer than this */

  this.nice_match = 0; /* Stop searching when current match exceeds this */

              /* used by trees.c: */

  /* Didn't use ct_data typedef below to suppress compiler warning */

  // struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
  // struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
  // struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */

  // Use flat array of DOUBLE size, with interleaved fata,
  // because JS does not support effective
  this.dyn_ltree  = new Uint16Array(HEAP_SIZE * 2);
  this.dyn_dtree  = new Uint16Array((2 * D_CODES + 1) * 2);
  this.bl_tree    = new Uint16Array((2 * BL_CODES + 1) * 2);
  zero(this.dyn_ltree);
  zero(this.dyn_dtree);
  zero(this.bl_tree);

  this.l_desc   = null;         /* desc. for literal tree */
  this.d_desc   = null;         /* desc. for distance tree */
  this.bl_desc  = null;         /* desc. for bit length tree */

  //ush bl_count[MAX_BITS+1];
  this.bl_count = new Uint16Array(MAX_BITS + 1);
  /* number of codes at each bit length for an optimal tree */

  //int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */
  this.heap = new Uint16Array(2 * L_CODES + 1);  /* heap used to build the Huffman trees */
  zero(this.heap);

  this.heap_len = 0;               /* number of elements in the heap */
  this.heap_max = 0;               /* element of largest frequency */
  /* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
   * The same heap array is used to build all trees.
   */

  this.depth = new Uint16Array(2 * L_CODES + 1); //uch depth[2*L_CODES+1];
  zero(this.depth);
  /* Depth of each subtree used as tie breaker for trees of equal frequency
   */

  this.l_buf = 0;          /* buffer index for literals or lengths */

  this.lit_bufsize = 0;
  /* Size of match buffer for literals/lengths.  There are 4 reasons for
   * limiting lit_bufsize to 64K:
   *   - frequencies can be kept in 16 bit counters
   *   - if compression is not successful for the first block, all input
   *     data is still in the window so we can still emit a stored block even
   *     when input comes from standard input.  (This can also be done for
   *     all blocks if lit_bufsize is not greater than 32K.)
   *   - if compression is not successful for a file smaller than 64K, we can
   *     even emit a stored file instead of a stored block (saving 5 bytes).
   *     This is applicable only for zip (not gzip or zlib).
   *   - creating new Huffman trees less frequently may not provide fast
   *     adaptation to changes in the input data statistics. (Take for
   *     example a binary file with poorly compressible code followed by
   *     a highly compressible string table.) Smaller buffer sizes give
   *     fast adaptation but have of course the overhead of transmitting
   *     trees more frequently.
   *   - I can't count above 4
   */

  this.last_lit = 0;      /* running index in l_buf */

  this.d_buf = 0;
  /* Buffer index for distances. To simplify the code, d_buf and l_buf have
   * the same number of elements. To use different lengths, an extra flag
   * array would be necessary.
   */

  this.opt_len = 0;       /* bit length of current block with optimal trees */
  this.static_len = 0;    /* bit length of current block with static trees */
  this.matches = 0;       /* number of string matches in current block */
  this.insert = 0;        /* bytes at end of window left to insert */


  this.bi_buf = 0;
  /* Output buffer. bits are inserted starting at the bottom (least
   * significant bits).
   */
  this.bi_valid = 0;
  /* Number of valid bits in bi_buf.  All bits above the last valid bit
   * are always zero.
   */

  // Used for window memory init. We safely ignore it for JS. That makes
  // sense only for pointers and memory check tools.
  //this.high_water = 0;
  /* High water mark offset in window for initialized bytes -- bytes above
   * this are set to zero in order to avoid memory check warnings when
   * longest match routines access bytes past the input.  This is then
   * updated to the new high water mark.
   */
}


const deflateResetKeep = (strm) => {

  if (!strm || !strm.state) {
    return err(strm, Z_STREAM_ERROR$2);
  }

  strm.total_in = strm.total_out = 0;
  strm.data_type = Z_UNKNOWN;

  const s = strm.state;
  s.pending = 0;
  s.pending_out = 0;

  if (s.wrap < 0) {
    s.wrap = -s.wrap;
    /* was made negative by deflate(..., Z_FINISH); */
  }
  s.status = (s.wrap ? INIT_STATE : BUSY_STATE);
  strm.adler = (s.wrap === 2) ?
    0  // crc32(0, Z_NULL, 0)
  :
    1; // adler32(0, Z_NULL, 0)
  s.last_flush = Z_NO_FLUSH$2;
  _tr_init(s);
  return Z_OK$3;
};


const deflateReset = (strm) => {

  const ret = deflateResetKeep(strm);
  if (ret === Z_OK$3) {
    lm_init(strm.state);
  }
  return ret;
};


const deflateSetHeader = (strm, head) => {

  if (!strm || !strm.state) { return Z_STREAM_ERROR$2; }
  if (strm.state.wrap !== 2) { return Z_STREAM_ERROR$2; }
  strm.state.gzhead = head;
  return Z_OK$3;
};


const deflateInit2 = (strm, level, method, windowBits, memLevel, strategy) => {

  if (!strm) { // === Z_NULL
    return Z_STREAM_ERROR$2;
  }
  let wrap = 1;

  if (level === Z_DEFAULT_COMPRESSION$1) {
    level = 6;
  }

  if (windowBits < 0) { /* suppress zlib wrapper */
    wrap = 0;
    windowBits = -windowBits;
  }

  else if (windowBits > 15) {
    wrap = 2;           /* write gzip wrapper instead */
    windowBits -= 16;
  }


  if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED$2 ||
    windowBits < 8 || windowBits > 15 || level < 0 || level > 9 ||
    strategy < 0 || strategy > Z_FIXED) {
    return err(strm, Z_STREAM_ERROR$2);
  }


  if (windowBits === 8) {
    windowBits = 9;
  }
  /* until 256-byte window bug fixed */

  const s = new DeflateState();

  strm.state = s;
  s.strm = strm;

  s.wrap = wrap;
  s.gzhead = null;
  s.w_bits = windowBits;
  s.w_size = 1 << s.w_bits;
  s.w_mask = s.w_size - 1;

  s.hash_bits = memLevel + 7;
  s.hash_size = 1 << s.hash_bits;
  s.hash_mask = s.hash_size - 1;
  s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);

  s.window = new Uint8Array(s.w_size * 2);
  s.head = new Uint16Array(s.hash_size);
  s.prev = new Uint16Array(s.w_size);

  // Don't need mem init magic for JS.
  //s.high_water = 0;  /* nothing written to s->window yet */

  s.lit_bufsize = 1 << (memLevel + 6); /* 16K elements by default */

  s.pending_buf_size = s.lit_bufsize * 4;

  //overlay = (ushf *) ZALLOC(strm, s->lit_bufsize, sizeof(ush)+2);
  //s->pending_buf = (uchf *) overlay;
  s.pending_buf = new Uint8Array(s.pending_buf_size);

  // It is offset from `s.pending_buf` (size is `s.lit_bufsize * 2`)
  //s->d_buf = overlay + s->lit_bufsize/sizeof(ush);
  s.d_buf = 1 * s.lit_bufsize;

  //s->l_buf = s->pending_buf + (1+sizeof(ush))*s->lit_bufsize;
  s.l_buf = (1 + 2) * s.lit_bufsize;

  s.level = level;
  s.strategy = strategy;
  s.method = method;

  return deflateReset(strm);
};

const deflateInit = (strm, level) => {

  return deflateInit2(strm, level, Z_DEFLATED$2, MAX_WBITS$1, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY$1);
};


const deflate$2 = (strm, flush) => {

  let beg, val; // for gzip header write only

  if (!strm || !strm.state ||
    flush > Z_BLOCK$1 || flush < 0) {
    return strm ? err(strm, Z_STREAM_ERROR$2) : Z_STREAM_ERROR$2;
  }

  const s = strm.state;

  if (!strm.output ||
      (!strm.input && strm.avail_in !== 0) ||
      (s.status === FINISH_STATE && flush !== Z_FINISH$3)) {
    return err(strm, (strm.avail_out === 0) ? Z_BUF_ERROR$1 : Z_STREAM_ERROR$2);
  }

  s.strm = strm; /* just in case */
  const old_flush = s.last_flush;
  s.last_flush = flush;

  /* Write the header */
  if (s.status === INIT_STATE) {

    if (s.wrap === 2) { // GZIP header
      strm.adler = 0;  //crc32(0L, Z_NULL, 0);
      put_byte(s, 31);
      put_byte(s, 139);
      put_byte(s, 8);
      if (!s.gzhead) { // s->gzhead == Z_NULL
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, s.level === 9 ? 2 :
                    (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                     4 : 0));
        put_byte(s, OS_CODE);
        s.status = BUSY_STATE;
      }
      else {
        put_byte(s, (s.gzhead.text ? 1 : 0) +
                    (s.gzhead.hcrc ? 2 : 0) +
                    (!s.gzhead.extra ? 0 : 4) +
                    (!s.gzhead.name ? 0 : 8) +
                    (!s.gzhead.comment ? 0 : 16)
        );
        put_byte(s, s.gzhead.time & 0xff);
        put_byte(s, (s.gzhead.time >> 8) & 0xff);
        put_byte(s, (s.gzhead.time >> 16) & 0xff);
        put_byte(s, (s.gzhead.time >> 24) & 0xff);
        put_byte(s, s.level === 9 ? 2 :
                    (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                     4 : 0));
        put_byte(s, s.gzhead.os & 0xff);
        if (s.gzhead.extra && s.gzhead.extra.length) {
          put_byte(s, s.gzhead.extra.length & 0xff);
          put_byte(s, (s.gzhead.extra.length >> 8) & 0xff);
        }
        if (s.gzhead.hcrc) {
          strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending, 0);
        }
        s.gzindex = 0;
        s.status = EXTRA_STATE;
      }
    }
    else // DEFLATE header
    {
      let header = (Z_DEFLATED$2 + ((s.w_bits - 8) << 4)) << 8;
      let level_flags = -1;

      if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
        level_flags = 0;
      } else if (s.level < 6) {
        level_flags = 1;
      } else if (s.level === 6) {
        level_flags = 2;
      } else {
        level_flags = 3;
      }
      header |= (level_flags << 6);
      if (s.strstart !== 0) { header |= PRESET_DICT; }
      header += 31 - (header % 31);

      s.status = BUSY_STATE;
      putShortMSB(s, header);

      /* Save the adler32 of the preset dictionary: */
      if (s.strstart !== 0) {
        putShortMSB(s, strm.adler >>> 16);
        putShortMSB(s, strm.adler & 0xffff);
      }
      strm.adler = 1; // adler32(0L, Z_NULL, 0);
    }
  }

//#ifdef GZIP
  if (s.status === EXTRA_STATE) {
    if (s.gzhead.extra/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */

      while (s.gzindex < (s.gzhead.extra.length & 0xffff)) {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            break;
          }
        }
        put_byte(s, s.gzhead.extra[s.gzindex] & 0xff);
        s.gzindex++;
      }
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (s.gzindex === s.gzhead.extra.length) {
        s.gzindex = 0;
        s.status = NAME_STATE;
      }
    }
    else {
      s.status = NAME_STATE;
    }
  }
  if (s.status === NAME_STATE) {
    if (s.gzhead.name/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */
      //int val;

      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.name.length) {
          val = s.gzhead.name.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);

      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.gzindex = 0;
        s.status = COMMENT_STATE;
      }
    }
    else {
      s.status = COMMENT_STATE;
    }
  }
  if (s.status === COMMENT_STATE) {
    if (s.gzhead.comment/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */
      //int val;

      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.comment.length) {
          val = s.gzhead.comment.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);

      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.status = HCRC_STATE;
      }
    }
    else {
      s.status = HCRC_STATE;
    }
  }
  if (s.status === HCRC_STATE) {
    if (s.gzhead.hcrc) {
      if (s.pending + 2 > s.pending_buf_size) {
        flush_pending(strm);
      }
      if (s.pending + 2 <= s.pending_buf_size) {
        put_byte(s, strm.adler & 0xff);
        put_byte(s, (strm.adler >> 8) & 0xff);
        strm.adler = 0; //crc32(0L, Z_NULL, 0);
        s.status = BUSY_STATE;
      }
    }
    else {
      s.status = BUSY_STATE;
    }
  }
//#endif

  /* Flush as much pending output as possible */
  if (s.pending !== 0) {
    flush_pending(strm);
    if (strm.avail_out === 0) {
      /* Since avail_out is 0, deflate will be called again with
       * more output space, but possibly with both pending and
       * avail_in equal to zero. There won't be anything to do,
       * but this is not an error situation so make sure we
       * return OK instead of BUF_ERROR at next call of deflate:
       */
      s.last_flush = -1;
      return Z_OK$3;
    }

    /* Make sure there is something to do and avoid duplicate consecutive
     * flushes. For repeated and useless calls with Z_FINISH, we keep
     * returning Z_STREAM_END instead of Z_BUF_ERROR.
     */
  } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) &&
    flush !== Z_FINISH$3) {
    return err(strm, Z_BUF_ERROR$1);
  }

  /* User must not provide more input after the first FINISH: */
  if (s.status === FINISH_STATE && strm.avail_in !== 0) {
    return err(strm, Z_BUF_ERROR$1);
  }

  /* Start a new block or continue the current one.
   */
  if (strm.avail_in !== 0 || s.lookahead !== 0 ||
    (flush !== Z_NO_FLUSH$2 && s.status !== FINISH_STATE)) {
    let bstate = (s.strategy === Z_HUFFMAN_ONLY) ? deflate_huff(s, flush) :
      (s.strategy === Z_RLE ? deflate_rle(s, flush) :
        configuration_table[s.level].func(s, flush));

    if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
      s.status = FINISH_STATE;
    }
    if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
      if (strm.avail_out === 0) {
        s.last_flush = -1;
        /* avoid BUF_ERROR next call, see above */
      }
      return Z_OK$3;
      /* If flush != Z_NO_FLUSH && avail_out == 0, the next call
       * of deflate should use the same flush parameter to make sure
       * that the flush is complete. So we don't have to output an
       * empty block here, this will be done at next call. This also
       * ensures that for a very small output buffer, we emit at most
       * one empty block.
       */
    }
    if (bstate === BS_BLOCK_DONE) {
      if (flush === Z_PARTIAL_FLUSH) {
        _tr_align(s);
      }
      else if (flush !== Z_BLOCK$1) { /* FULL_FLUSH or SYNC_FLUSH */

        _tr_stored_block(s, 0, 0, false);
        /* For a full flush, this empty block will be recognized
         * as a special marker by inflate_sync().
         */
        if (flush === Z_FULL_FLUSH$1) {
          /*** CLEAR_HASH(s); ***/             /* forget history */
          zero(s.head); // Fill with NIL (= 0);

          if (s.lookahead === 0) {
            s.strstart = 0;
            s.block_start = 0;
            s.insert = 0;
          }
        }
      }
      flush_pending(strm);
      if (strm.avail_out === 0) {
        s.last_flush = -1; /* avoid BUF_ERROR at next call, see above */
        return Z_OK$3;
      }
    }
  }
  //Assert(strm->avail_out > 0, "bug2");
  //if (strm.avail_out <= 0) { throw new Error("bug2");}

  if (flush !== Z_FINISH$3) { return Z_OK$3; }
  if (s.wrap <= 0) { return Z_STREAM_END$3; }

  /* Write the trailer */
  if (s.wrap === 2) {
    put_byte(s, strm.adler & 0xff);
    put_byte(s, (strm.adler >> 8) & 0xff);
    put_byte(s, (strm.adler >> 16) & 0xff);
    put_byte(s, (strm.adler >> 24) & 0xff);
    put_byte(s, strm.total_in & 0xff);
    put_byte(s, (strm.total_in >> 8) & 0xff);
    put_byte(s, (strm.total_in >> 16) & 0xff);
    put_byte(s, (strm.total_in >> 24) & 0xff);
  }
  else
  {
    putShortMSB(s, strm.adler >>> 16);
    putShortMSB(s, strm.adler & 0xffff);
  }

  flush_pending(strm);
  /* If avail_out is zero, the application will call deflate again
   * to flush the rest.
   */
  if (s.wrap > 0) { s.wrap = -s.wrap; }
  /* write the trailer only once! */
  return s.pending !== 0 ? Z_OK$3 : Z_STREAM_END$3;
};


const deflateEnd = (strm) => {

  if (!strm/*== Z_NULL*/ || !strm.state/*== Z_NULL*/) {
    return Z_STREAM_ERROR$2;
  }

  const status = strm.state.status;
  if (status !== INIT_STATE &&
    status !== EXTRA_STATE &&
    status !== NAME_STATE &&
    status !== COMMENT_STATE &&
    status !== HCRC_STATE &&
    status !== BUSY_STATE &&
    status !== FINISH_STATE
  ) {
    return err(strm, Z_STREAM_ERROR$2);
  }

  strm.state = null;

  return status === BUSY_STATE ? err(strm, Z_DATA_ERROR$2) : Z_OK$3;
};


/* =========================================================================
 * Initializes the compression dictionary from the given byte
 * sequence without producing any compressed output.
 */
const deflateSetDictionary = (strm, dictionary) => {

  let dictLength = dictionary.length;

  if (!strm/*== Z_NULL*/ || !strm.state/*== Z_NULL*/) {
    return Z_STREAM_ERROR$2;
  }

  const s = strm.state;
  const wrap = s.wrap;

  if (wrap === 2 || (wrap === 1 && s.status !== INIT_STATE) || s.lookahead) {
    return Z_STREAM_ERROR$2;
  }

  /* when using zlib wrappers, compute Adler-32 for provided dictionary */
  if (wrap === 1) {
    /* adler32(strm->adler, dictionary, dictLength); */
    strm.adler = adler32_1(strm.adler, dictionary, dictLength, 0);
  }

  s.wrap = 0;   /* avoid computing Adler-32 in read_buf */

  /* if dictionary would fill window, just replace the history */
  if (dictLength >= s.w_size) {
    if (wrap === 0) {            /* already empty otherwise */
      /*** CLEAR_HASH(s); ***/
      zero(s.head); // Fill with NIL (= 0);
      s.strstart = 0;
      s.block_start = 0;
      s.insert = 0;
    }
    /* use the tail */
    // dictionary = dictionary.slice(dictLength - s.w_size);
    let tmpDict = new Uint8Array(s.w_size);
    tmpDict.set(dictionary.subarray(dictLength - s.w_size, dictLength), 0);
    dictionary = tmpDict;
    dictLength = s.w_size;
  }
  /* insert dictionary into window and hash */
  const avail = strm.avail_in;
  const next = strm.next_in;
  const input = strm.input;
  strm.avail_in = dictLength;
  strm.next_in = 0;
  strm.input = dictionary;
  fill_window(s);
  while (s.lookahead >= MIN_MATCH) {
    let str = s.strstart;
    let n = s.lookahead - (MIN_MATCH - 1);
    do {
      /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
      s.ins_h = HASH(s, s.ins_h, s.window[str + MIN_MATCH - 1]);

      s.prev[str & s.w_mask] = s.head[s.ins_h];

      s.head[s.ins_h] = str;
      str++;
    } while (--n);
    s.strstart = str;
    s.lookahead = MIN_MATCH - 1;
    fill_window(s);
  }
  s.strstart += s.lookahead;
  s.block_start = s.strstart;
  s.insert = s.lookahead;
  s.lookahead = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  strm.next_in = next;
  strm.input = input;
  strm.avail_in = avail;
  s.wrap = wrap;
  return Z_OK$3;
};


var deflateInit_1 = deflateInit;
var deflateInit2_1 = deflateInit2;
var deflateReset_1 = deflateReset;
var deflateResetKeep_1 = deflateResetKeep;
var deflateSetHeader_1 = deflateSetHeader;
var deflate_2$1 = deflate$2;
var deflateEnd_1 = deflateEnd;
var deflateSetDictionary_1 = deflateSetDictionary;
var deflateInfo = 'pako deflate (from Nodeca project)';

/* Not implemented
module.exports.deflateBound = deflateBound;
module.exports.deflateCopy = deflateCopy;
module.exports.deflateParams = deflateParams;
module.exports.deflatePending = deflatePending;
module.exports.deflatePrime = deflatePrime;
module.exports.deflateTune = deflateTune;
*/

var deflate_1$2 = {
	deflateInit: deflateInit_1,
	deflateInit2: deflateInit2_1,
	deflateReset: deflateReset_1,
	deflateResetKeep: deflateResetKeep_1,
	deflateSetHeader: deflateSetHeader_1,
	deflate: deflate_2$1,
	deflateEnd: deflateEnd_1,
	deflateSetDictionary: deflateSetDictionary_1,
	deflateInfo: deflateInfo
};

const _has = (obj, key) => {
  return Object.prototype.hasOwnProperty.call(obj, key);
};

var assign = function (obj /*from1, from2, from3, ...*/) {
  const sources = Array.prototype.slice.call(arguments, 1);
  while (sources.length) {
    const source = sources.shift();
    if (!source) { continue; }

    if (typeof source !== 'object') {
      throw new TypeError(source + 'must be non-object');
    }

    for (const p in source) {
      if (_has(source, p)) {
        obj[p] = source[p];
      }
    }
  }

  return obj;
};


// Join array of chunks to single array.
var flattenChunks = (chunks) => {
  // calculate data length
  let len = 0;

  for (let i = 0, l = chunks.length; i < l; i++) {
    len += chunks[i].length;
  }

  // join chunks
  const result = new Uint8Array(len);

  for (let i = 0, pos = 0, l = chunks.length; i < l; i++) {
    let chunk = chunks[i];
    result.set(chunk, pos);
    pos += chunk.length;
  }

  return result;
};

var common = {
	assign: assign,
	flattenChunks: flattenChunks
};

// String encode/decode helpers


// Quick check if we can use fast array to bin string conversion
//
// - apply(Array) can fail on Android 2.2
// - apply(Uint8Array) can fail on iOS 5.1 Safari
//
let STR_APPLY_UIA_OK = true;

try { String.fromCharCode.apply(null, new Uint8Array(1)); } catch (__) { STR_APPLY_UIA_OK = false; }


// Table with utf8 lengths (calculated by first byte of sequence)
// Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
// because max possible codepoint is 0x10ffff
const _utf8len = new Uint8Array(256);
for (let q = 0; q < 256; q++) {
  _utf8len[q] = (q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1);
}
_utf8len[254] = _utf8len[254] = 1; // Invalid sequence start


// convert string to array (typed, when possible)
var string2buf = (str) => {
  if (typeof TextEncoder === 'function' && TextEncoder.prototype.encode) {
    return new TextEncoder().encode(str);
  }

  let buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;

  // count binary size
  for (m_pos = 0; m_pos < str_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
  }

  // allocate buffer
  buf = new Uint8Array(buf_len);

  // convert
  for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    if (c < 0x80) {
      /* one byte */
      buf[i++] = c;
    } else if (c < 0x800) {
      /* two bytes */
      buf[i++] = 0xC0 | (c >>> 6);
      buf[i++] = 0x80 | (c & 0x3f);
    } else if (c < 0x10000) {
      /* three bytes */
      buf[i++] = 0xE0 | (c >>> 12);
      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
      buf[i++] = 0x80 | (c & 0x3f);
    } else {
      /* four bytes */
      buf[i++] = 0xf0 | (c >>> 18);
      buf[i++] = 0x80 | (c >>> 12 & 0x3f);
      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
      buf[i++] = 0x80 | (c & 0x3f);
    }
  }

  return buf;
};

// Helper
const buf2binstring = (buf, len) => {
  // On Chrome, the arguments in a function call that are allowed is `65534`.
  // If the length of the buffer is smaller than that, we can use this optimization,
  // otherwise we will take a slower path.
  if (len < 65534) {
    if (buf.subarray && STR_APPLY_UIA_OK) {
      return String.fromCharCode.apply(null, buf.length === len ? buf : buf.subarray(0, len));
    }
  }

  let result = '';
  for (let i = 0; i < len; i++) {
    result += String.fromCharCode(buf[i]);
  }
  return result;
};


// convert array to string
var buf2string = (buf, max) => {
  const len = max || buf.length;

  if (typeof TextDecoder === 'function' && TextDecoder.prototype.decode) {
    return new TextDecoder().decode(buf.subarray(0, max));
  }

  let i, out;

  // Reserve max possible length (2 words per char)
  // NB: by unknown reasons, Array is significantly faster for
  //     String.fromCharCode.apply than Uint16Array.
  const utf16buf = new Array(len * 2);

  for (out = 0, i = 0; i < len;) {
    let c = buf[i++];
    // quick process ascii
    if (c < 0x80) { utf16buf[out++] = c; continue; }

    let c_len = _utf8len[c];
    // skip 5 & 6 byte codes
    if (c_len > 4) { utf16buf[out++] = 0xfffd; i += c_len - 1; continue; }

    // apply mask on first byte
    c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
    // join the rest
    while (c_len > 1 && i < len) {
      c = (c << 6) | (buf[i++] & 0x3f);
      c_len--;
    }

    // terminated by end of string?
    if (c_len > 1) { utf16buf[out++] = 0xfffd; continue; }

    if (c < 0x10000) {
      utf16buf[out++] = c;
    } else {
      c -= 0x10000;
      utf16buf[out++] = 0xd800 | ((c >> 10) & 0x3ff);
      utf16buf[out++] = 0xdc00 | (c & 0x3ff);
    }
  }

  return buf2binstring(utf16buf, out);
};


// Calculate max possible position in utf8 buffer,
// that will not break sequence. If that's not possible
// - (very small limits) return max size as is.
//
// buf[] - utf8 bytes array
// max   - length limit (mandatory);
var utf8border = (buf, max) => {

  max = max || buf.length;
  if (max > buf.length) { max = buf.length; }

  // go back from last position, until start of sequence found
  let pos = max - 1;
  while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) { pos--; }

  // Very small and broken sequence,
  // return max, because we should return something anyway.
  if (pos < 0) { return max; }

  // If we came to start of buffer - that means buffer is too small,
  // return max too.
  if (pos === 0) { return max; }

  return (pos + _utf8len[buf[pos]] > max) ? pos : max;
};

var strings = {
	string2buf: string2buf,
	buf2string: buf2string,
	utf8border: utf8border
};

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function ZStream() {
  /* next input byte */
  this.input = null; // JS specific, because we have no pointers
  this.next_in = 0;
  /* number of bytes available at input */
  this.avail_in = 0;
  /* total number of input bytes read so far */
  this.total_in = 0;
  /* next output byte should be put there */
  this.output = null; // JS specific, because we have no pointers
  this.next_out = 0;
  /* remaining free space at output */
  this.avail_out = 0;
  /* total number of bytes output so far */
  this.total_out = 0;
  /* last error message, NULL if no error */
  this.msg = ''/*Z_NULL*/;
  /* not visible by applications */
  this.state = null;
  /* best guess about the data type: binary or text */
  this.data_type = 2/*Z_UNKNOWN*/;
  /* adler32 value of the uncompressed data */
  this.adler = 0;
}

var zstream = ZStream;

const toString$1 = Object.prototype.toString;

/* Public constants ==========================================================*/
/* ===========================================================================*/

const {
  Z_NO_FLUSH: Z_NO_FLUSH$1, Z_SYNC_FLUSH, Z_FULL_FLUSH, Z_FINISH: Z_FINISH$2,
  Z_OK: Z_OK$2, Z_STREAM_END: Z_STREAM_END$2,
  Z_DEFAULT_COMPRESSION,
  Z_DEFAULT_STRATEGY,
  Z_DEFLATED: Z_DEFLATED$1
} = constants$2;

/* ===========================================================================*/


/**
 * class Deflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[deflate]],
 * [[deflateRaw]] and [[gzip]].
 **/

/* internal
 * Deflate.chunks -> Array
 *
 * Chunks of output data, if [[Deflate#onData]] not overridden.
 **/

/**
 * Deflate.result -> Uint8Array
 *
 * Compressed result, generated by default [[Deflate#onData]]
 * and [[Deflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Deflate#push]] with `Z_FINISH` / `true` param).
 **/

/**
 * Deflate.err -> Number
 *
 * Error code after deflate finished. 0 (Z_OK) on success.
 * You will not need it in real life, because deflate errors
 * are possible only on wrong options or bad `onData` / `onEnd`
 * custom handlers.
 **/

/**
 * Deflate.msg -> String
 *
 * Error message, if [[Deflate.err]] != 0
 **/


/**
 * new Deflate(options)
 * - options (Object): zlib deflate options.
 *
 * Creates new deflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `level`
 * - `windowBits`
 * - `memLevel`
 * - `strategy`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw deflate
 * - `gzip` (Boolean) - create gzip wrapper
 * - `header` (Object) - custom header for gzip
 *   - `text` (Boolean) - true if compressed data believed to be text
 *   - `time` (Number) - modification time, unix timestamp
 *   - `os` (Number) - operation system code
 *   - `extra` (Array) - array of bytes with extra data (max 65536)
 *   - `name` (String) - file name (binary string)
 *   - `comment` (String) - comment (binary string)
 *   - `hcrc` (Boolean) - true if header crc should be added
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako')
 *   , chunk1 = new Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = new Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * const deflate = new pako.Deflate({ level: 3});
 *
 * deflate.push(chunk1, false);
 * deflate.push(chunk2, true);  // true -> last chunk
 *
 * if (deflate.err) { throw new Error(deflate.err); }
 *
 * console.log(deflate.result);
 * ```
 **/
function Deflate$1(options) {
  this.options = common.assign({
    level: Z_DEFAULT_COMPRESSION,
    method: Z_DEFLATED$1,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: Z_DEFAULT_STRATEGY
  }, options || {});

  let opt = this.options;

  if (opt.raw && (opt.windowBits > 0)) {
    opt.windowBits = -opt.windowBits;
  }

  else if (opt.gzip && (opt.windowBits > 0) && (opt.windowBits < 16)) {
    opt.windowBits += 16;
  }

  this.err    = 0;      // error code, if happens (0 = Z_OK)
  this.msg    = '';     // error message
  this.ended  = false;  // used to avoid multiple onEnd() calls
  this.chunks = [];     // chunks of compressed data

  this.strm = new zstream();
  this.strm.avail_out = 0;

  let status = deflate_1$2.deflateInit2(
    this.strm,
    opt.level,
    opt.method,
    opt.windowBits,
    opt.memLevel,
    opt.strategy
  );

  if (status !== Z_OK$2) {
    throw new Error(messages[status]);
  }

  if (opt.header) {
    deflate_1$2.deflateSetHeader(this.strm, opt.header);
  }

  if (opt.dictionary) {
    let dict;
    // Convert data if needed
    if (typeof opt.dictionary === 'string') {
      // If we need to compress text, change encoding to utf8.
      dict = strings.string2buf(opt.dictionary);
    } else if (toString$1.call(opt.dictionary) === '[object ArrayBuffer]') {
      dict = new Uint8Array(opt.dictionary);
    } else {
      dict = opt.dictionary;
    }

    status = deflate_1$2.deflateSetDictionary(this.strm, dict);

    if (status !== Z_OK$2) {
      throw new Error(messages[status]);
    }

    this._dict_set = true;
  }
}

/**
 * Deflate#push(data[, flush_mode]) -> Boolean
 * - data (Uint8Array|ArrayBuffer|String): input data. Strings will be
 *   converted to utf8 byte sequence.
 * - flush_mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
 *
 * Sends input data to deflate pipe, generating [[Deflate#onData]] calls with
 * new compressed chunks. Returns `true` on success. The last data block must
 * have `flush_mode` Z_FINISH (or `true`). That will flush internal pending
 * buffers and call [[Deflate#onEnd]].
 *
 * On fail call [[Deflate#onEnd]] with error code and return false.
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/
Deflate$1.prototype.push = function (data, flush_mode) {
  const strm = this.strm;
  const chunkSize = this.options.chunkSize;
  let status, _flush_mode;

  if (this.ended) { return false; }

  if (flush_mode === ~~flush_mode) _flush_mode = flush_mode;
  else _flush_mode = flush_mode === true ? Z_FINISH$2 : Z_NO_FLUSH$1;

  // Convert data if needed
  if (typeof data === 'string') {
    // If we need to compress text, change encoding to utf8.
    strm.input = strings.string2buf(data);
  } else if (toString$1.call(data) === '[object ArrayBuffer]') {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }

  strm.next_in = 0;
  strm.avail_in = strm.input.length;

  for (;;) {
    if (strm.avail_out === 0) {
      strm.output = new Uint8Array(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }

    // Make sure avail_out > 6 to avoid repeating markers
    if ((_flush_mode === Z_SYNC_FLUSH || _flush_mode === Z_FULL_FLUSH) && strm.avail_out <= 6) {
      this.onData(strm.output.subarray(0, strm.next_out));
      strm.avail_out = 0;
      continue;
    }

    status = deflate_1$2.deflate(strm, _flush_mode);

    // Ended => flush and finish
    if (status === Z_STREAM_END$2) {
      if (strm.next_out > 0) {
        this.onData(strm.output.subarray(0, strm.next_out));
      }
      status = deflate_1$2.deflateEnd(this.strm);
      this.onEnd(status);
      this.ended = true;
      return status === Z_OK$2;
    }

    // Flush if out buffer full
    if (strm.avail_out === 0) {
      this.onData(strm.output);
      continue;
    }

    // Flush if requested and has data
    if (_flush_mode > 0 && strm.next_out > 0) {
      this.onData(strm.output.subarray(0, strm.next_out));
      strm.avail_out = 0;
      continue;
    }

    if (strm.avail_in === 0) break;
  }

  return true;
};


/**
 * Deflate#onData(chunk) -> Void
 * - chunk (Uint8Array): output data.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/
Deflate$1.prototype.onData = function (chunk) {
  this.chunks.push(chunk);
};


/**
 * Deflate#onEnd(status) -> Void
 * - status (Number): deflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called once after you tell deflate that the input stream is
 * complete (Z_FINISH). By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/
Deflate$1.prototype.onEnd = function (status) {
  // On success - join
  if (status === Z_OK$2) {
    this.result = common.flattenChunks(this.chunks);
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};


/**
 * deflate(data[, options]) -> Uint8Array
 * - data (Uint8Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * Compress `data` with deflate algorithm and `options`.
 *
 * Supported options are:
 *
 * - level
 * - windowBits
 * - memLevel
 * - strategy
 * - dictionary
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako')
 * const data = new Uint8Array([1,2,3,4,5,6,7,8,9]);
 *
 * console.log(pako.deflate(data));
 * ```
 **/
function deflate$1(input, options) {
  const deflator = new Deflate$1(options);

  deflator.push(input, true);

  // That will never happens, if you don't cheat with options :)
  if (deflator.err) { throw deflator.msg || messages[deflator.err]; }

  return deflator.result;
}


/**
 * deflateRaw(data[, options]) -> Uint8Array
 * - data (Uint8Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/
function deflateRaw$1(input, options) {
  options = options || {};
  options.raw = true;
  return deflate$1(input, options);
}


/**
 * gzip(data[, options]) -> Uint8Array
 * - data (Uint8Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but create gzip wrapper instead of
 * deflate one.
 **/
function gzip$1(input, options) {
  options = options || {};
  options.gzip = true;
  return deflate$1(input, options);
}


var Deflate_1$1 = Deflate$1;
var deflate_2 = deflate$1;
var deflateRaw_1$1 = deflateRaw$1;
var gzip_1$1 = gzip$1;
var constants$1 = constants$2;

var deflate_1$1 = {
	Deflate: Deflate_1$1,
	deflate: deflate_2,
	deflateRaw: deflateRaw_1$1,
	gzip: gzip_1$1,
	constants: constants$1
};

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

// See state defs from inflate.js
const BAD$1 = 30;       /* got a data error -- remain here until reset */
const TYPE$1 = 12;      /* i: waiting for type bits, including last-flag bit */

/*
   Decode literal, length, and distance codes and write out the resulting
   literal and match bytes until either not enough input or output is
   available, an end-of-block is encountered, or a data error is encountered.
   When large enough input and output buffers are supplied to inflate(), for
   example, a 16K input buffer and a 64K output buffer, more than 95% of the
   inflate execution time is spent in this routine.

   Entry assumptions:

        state.mode === LEN
        strm.avail_in >= 6
        strm.avail_out >= 258
        start >= strm.avail_out
        state.bits < 8

   On return, state.mode is one of:

        LEN -- ran out of enough output space or enough available input
        TYPE -- reached end of block code, inflate() to interpret next block
        BAD -- error in block data

   Notes:

    - The maximum input bits used by a length/distance pair is 15 bits for the
      length code, 5 bits for the length extra, 15 bits for the distance code,
      and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
      Therefore if strm.avail_in >= 6, then there is enough input to avoid
      checking for available input while decoding.

    - The maximum bytes that a single length/distance pair can output is 258
      bytes, which is the maximum length that can be coded.  inflate_fast()
      requires strm.avail_out >= 258 for each loop to avoid checking for
      output space.
 */
var inffast = function inflate_fast(strm, start) {
  let _in;                    /* local strm.input */
  let last;                   /* have enough input while in < last */
  let _out;                   /* local strm.output */
  let beg;                    /* inflate()'s initial strm.output */
  let end;                    /* while out < end, enough space available */
//#ifdef INFLATE_STRICT
  let dmax;                   /* maximum distance from zlib header */
//#endif
  let wsize;                  /* window size or zero if not using window */
  let whave;                  /* valid bytes in the window */
  let wnext;                  /* window write index */
  // Use `s_window` instead `window`, avoid conflict with instrumentation tools
  let s_window;               /* allocated sliding window, if wsize != 0 */
  let hold;                   /* local strm.hold */
  let bits;                   /* local strm.bits */
  let lcode;                  /* local strm.lencode */
  let dcode;                  /* local strm.distcode */
  let lmask;                  /* mask for first level of length codes */
  let dmask;                  /* mask for first level of distance codes */
  let here;                   /* retrieved table entry */
  let op;                     /* code bits, operation, extra bits, or */
                              /*  window position, window bytes to copy */
  let len;                    /* match length, unused bytes */
  let dist;                   /* match distance */
  let from;                   /* where to copy match from */
  let from_source;


  let input, output; // JS specific, because we have no pointers

  /* copy state to local variables */
  const state = strm.state;
  //here = state.here;
  _in = strm.next_in;
  input = strm.input;
  last = _in + (strm.avail_in - 5);
  _out = strm.next_out;
  output = strm.output;
  beg = _out - (start - strm.avail_out);
  end = _out + (strm.avail_out - 257);
//#ifdef INFLATE_STRICT
  dmax = state.dmax;
//#endif
  wsize = state.wsize;
  whave = state.whave;
  wnext = state.wnext;
  s_window = state.window;
  hold = state.hold;
  bits = state.bits;
  lcode = state.lencode;
  dcode = state.distcode;
  lmask = (1 << state.lenbits) - 1;
  dmask = (1 << state.distbits) - 1;


  /* decode literals and length/distances until end-of-block or not enough
     input data or output space */

  top:
  do {
    if (bits < 15) {
      hold += input[_in++] << bits;
      bits += 8;
      hold += input[_in++] << bits;
      bits += 8;
    }

    here = lcode[hold & lmask];

    dolen:
    for (;;) { // Goto emulation
      op = here >>> 24/*here.bits*/;
      hold >>>= op;
      bits -= op;
      op = (here >>> 16) & 0xff/*here.op*/;
      if (op === 0) {                          /* literal */
        //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
        //        "inflate:         literal '%c'\n" :
        //        "inflate:         literal 0x%02x\n", here.val));
        output[_out++] = here & 0xffff/*here.val*/;
      }
      else if (op & 16) {                     /* length base */
        len = here & 0xffff/*here.val*/;
        op &= 15;                           /* number of extra bits */
        if (op) {
          if (bits < op) {
            hold += input[_in++] << bits;
            bits += 8;
          }
          len += hold & ((1 << op) - 1);
          hold >>>= op;
          bits -= op;
        }
        //Tracevv((stderr, "inflate:         length %u\n", len));
        if (bits < 15) {
          hold += input[_in++] << bits;
          bits += 8;
          hold += input[_in++] << bits;
          bits += 8;
        }
        here = dcode[hold & dmask];

        dodist:
        for (;;) { // goto emulation
          op = here >>> 24/*here.bits*/;
          hold >>>= op;
          bits -= op;
          op = (here >>> 16) & 0xff/*here.op*/;

          if (op & 16) {                      /* distance base */
            dist = here & 0xffff/*here.val*/;
            op &= 15;                       /* number of extra bits */
            if (bits < op) {
              hold += input[_in++] << bits;
              bits += 8;
              if (bits < op) {
                hold += input[_in++] << bits;
                bits += 8;
              }
            }
            dist += hold & ((1 << op) - 1);
//#ifdef INFLATE_STRICT
            if (dist > dmax) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD$1;
              break top;
            }
//#endif
            hold >>>= op;
            bits -= op;
            //Tracevv((stderr, "inflate:         distance %u\n", dist));
            op = _out - beg;                /* max distance in output */
            if (dist > op) {                /* see if copy from window */
              op = dist - op;               /* distance back in window */
              if (op > whave) {
                if (state.sane) {
                  strm.msg = 'invalid distance too far back';
                  state.mode = BAD$1;
                  break top;
                }

// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//                if (len <= op - whave) {
//                  do {
//                    output[_out++] = 0;
//                  } while (--len);
//                  continue top;
//                }
//                len -= op - whave;
//                do {
//                  output[_out++] = 0;
//                } while (--op > whave);
//                if (op === 0) {
//                  from = _out - dist;
//                  do {
//                    output[_out++] = output[from++];
//                  } while (--len);
//                  continue top;
//                }
//#endif
              }
              from = 0; // window index
              from_source = s_window;
              if (wnext === 0) {           /* very common case */
                from += wsize - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              else if (wnext < op) {      /* wrap around window */
                from += wsize + wnext - op;
                op -= wnext;
                if (op < len) {         /* some from end of window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = 0;
                  if (wnext < len) {  /* some from start of window */
                    op = wnext;
                    len -= op;
                    do {
                      output[_out++] = s_window[from++];
                    } while (--op);
                    from = _out - dist;      /* rest from output */
                    from_source = output;
                  }
                }
              }
              else {                      /* contiguous in window */
                from += wnext - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              while (len > 2) {
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                len -= 3;
              }
              if (len) {
                output[_out++] = from_source[from++];
                if (len > 1) {
                  output[_out++] = from_source[from++];
                }
              }
            }
            else {
              from = _out - dist;          /* copy direct from output */
              do {                        /* minimum length is three */
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                len -= 3;
              } while (len > 2);
              if (len) {
                output[_out++] = output[from++];
                if (len > 1) {
                  output[_out++] = output[from++];
                }
              }
            }
          }
          else if ((op & 64) === 0) {          /* 2nd level distance code */
            here = dcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
            continue dodist;
          }
          else {
            strm.msg = 'invalid distance code';
            state.mode = BAD$1;
            break top;
          }

          break; // need to emulate goto via "continue"
        }
      }
      else if ((op & 64) === 0) {              /* 2nd level length code */
        here = lcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
        continue dolen;
      }
      else if (op & 32) {                     /* end-of-block */
        //Tracevv((stderr, "inflate:         end of block\n"));
        state.mode = TYPE$1;
        break top;
      }
      else {
        strm.msg = 'invalid literal/length code';
        state.mode = BAD$1;
        break top;
      }

      break; // need to emulate goto via "continue"
    }
  } while (_in < last && _out < end);

  /* return unused bytes (on entry, bits < 8, so in won't go too far back) */
  len = bits >> 3;
  _in -= len;
  bits -= len << 3;
  hold &= (1 << bits) - 1;

  /* update state and return */
  strm.next_in = _in;
  strm.next_out = _out;
  strm.avail_in = (_in < last ? 5 + (last - _in) : 5 - (_in - last));
  strm.avail_out = (_out < end ? 257 + (end - _out) : 257 - (_out - end));
  state.hold = hold;
  state.bits = bits;
  return;
};

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

const MAXBITS = 15;
const ENOUGH_LENS$1 = 852;
const ENOUGH_DISTS$1 = 592;
//const ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);

const CODES$1 = 0;
const LENS$1 = 1;
const DISTS$1 = 2;

const lbase = new Uint16Array([ /* Length codes 257..285 base */
  3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,
  35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0
]);

const lext = new Uint8Array([ /* Length codes 257..285 extra */
  16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18,
  19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78
]);

const dbase = new Uint16Array([ /* Distance codes 0..29 base */
  1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
  257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
  8193, 12289, 16385, 24577, 0, 0
]);

const dext = new Uint8Array([ /* Distance codes 0..29 extra */
  16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22,
  23, 23, 24, 24, 25, 25, 26, 26, 27, 27,
  28, 28, 29, 29, 64, 64
]);

const inflate_table = (type, lens, lens_index, codes, table, table_index, work, opts) =>
{
  const bits = opts.bits;
      //here = opts.here; /* table entry for duplication */

  let len = 0;               /* a code's length in bits */
  let sym = 0;               /* index of code symbols */
  let min = 0, max = 0;          /* minimum and maximum code lengths */
  let root = 0;              /* number of index bits for root table */
  let curr = 0;              /* number of index bits for current table */
  let drop = 0;              /* code bits to drop for sub-table */
  let left = 0;                   /* number of prefix codes available */
  let used = 0;              /* code entries in table used */
  let huff = 0;              /* Huffman code */
  let incr;              /* for incrementing code, index */
  let fill;              /* index for replicating entries */
  let low;               /* low bits for current root entry */
  let mask;              /* mask for low root bits */
  let next;             /* next available space in table */
  let base = null;     /* base value table to use */
  let base_index = 0;
//  let shoextra;    /* extra bits table to use */
  let end;                    /* use base and extra for symbol > end */
  const count = new Uint16Array(MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */
  const offs = new Uint16Array(MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */
  let extra = null;
  let extra_index = 0;

  let here_bits, here_op, here_val;

  /*
   Process a set of code lengths to create a canonical Huffman code.  The
   code lengths are lens[0..codes-1].  Each length corresponds to the
   symbols 0..codes-1.  The Huffman code is generated by first sorting the
   symbols by length from short to long, and retaining the symbol order
   for codes with equal lengths.  Then the code starts with all zero bits
   for the first code of the shortest length, and the codes are integer
   increments for the same length, and zeros are appended as the length
   increases.  For the deflate format, these bits are stored backwards
   from their more natural integer increment ordering, and so when the
   decoding tables are built in the large loop below, the integer codes
   are incremented backwards.

   This routine assumes, but does not check, that all of the entries in
   lens[] are in the range 0..MAXBITS.  The caller must assure this.
   1..MAXBITS is interpreted as that code length.  zero means that that
   symbol does not occur in this code.

   The codes are sorted by computing a count of codes for each length,
   creating from that a table of starting indices for each length in the
   sorted table, and then entering the symbols in order in the sorted
   table.  The sorted table is work[], with that space being provided by
   the caller.

   The length counts are used for other purposes as well, i.e. finding
   the minimum and maximum length codes, determining if there are any
   codes at all, checking for a valid set of lengths, and looking ahead
   at length counts to determine sub-table sizes when building the
   decoding tables.
   */

  /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */
  for (len = 0; len <= MAXBITS; len++) {
    count[len] = 0;
  }
  for (sym = 0; sym < codes; sym++) {
    count[lens[lens_index + sym]]++;
  }

  /* bound code lengths, force root to be within code lengths */
  root = bits;
  for (max = MAXBITS; max >= 1; max--) {
    if (count[max] !== 0) { break; }
  }
  if (root > max) {
    root = max;
  }
  if (max === 0) {                     /* no symbols to code at all */
    //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
    //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
    //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;


    //table.op[opts.table_index] = 64;
    //table.bits[opts.table_index] = 1;
    //table.val[opts.table_index++] = 0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;

    opts.bits = 1;
    return 0;     /* no symbols, but wait for decoding to report error */
  }
  for (min = 1; min < max; min++) {
    if (count[min] !== 0) { break; }
  }
  if (root < min) {
    root = min;
  }

  /* check for an over-subscribed or incomplete set of lengths */
  left = 1;
  for (len = 1; len <= MAXBITS; len++) {
    left <<= 1;
    left -= count[len];
    if (left < 0) {
      return -1;
    }        /* over-subscribed */
  }
  if (left > 0 && (type === CODES$1 || max !== 1)) {
    return -1;                      /* incomplete set */
  }

  /* generate offsets into symbol table for each length for sorting */
  offs[1] = 0;
  for (len = 1; len < MAXBITS; len++) {
    offs[len + 1] = offs[len] + count[len];
  }

  /* sort symbols by length, by symbol order within each length */
  for (sym = 0; sym < codes; sym++) {
    if (lens[lens_index + sym] !== 0) {
      work[offs[lens[lens_index + sym]]++] = sym;
    }
  }

  /*
   Create and fill in decoding tables.  In this loop, the table being
   filled is at next and has curr index bits.  The code being used is huff
   with length len.  That code is converted to an index by dropping drop
   bits off of the bottom.  For codes where len is less than drop + curr,
   those top drop + curr - len bits are incremented through all values to
   fill the table with replicated entries.

   root is the number of index bits for the root table.  When len exceeds
   root, sub-tables are created pointed to by the root entry with an index
   of the low root bits of huff.  This is saved in low to check for when a
   new sub-table should be started.  drop is zero when the root table is
   being filled, and drop is root when sub-tables are being filled.

   When a new sub-table is needed, it is necessary to look ahead in the
   code lengths to determine what size sub-table is needed.  The length
   counts are used for this, and so count[] is decremented as codes are
   entered in the tables.

   used keeps track of how many table entries have been allocated from the
   provided *table space.  It is checked for LENS and DIST tables against
   the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
   the initial root table size constants.  See the comments in inftrees.h
   for more information.

   sym increments through all symbols, and the loop terminates when
   all codes of length max, i.e. all codes, have been processed.  This
   routine permits incomplete codes, so another loop after this one fills
   in the rest of the decoding tables with invalid code markers.
   */

  /* set up for code type */
  // poor man optimization - use if-else instead of switch,
  // to avoid deopts in old v8
  if (type === CODES$1) {
    base = extra = work;    /* dummy value--not used */
    end = 19;

  } else if (type === LENS$1) {
    base = lbase;
    base_index -= 257;
    extra = lext;
    extra_index -= 257;
    end = 256;

  } else {                    /* DISTS */
    base = dbase;
    extra = dext;
    end = -1;
  }

  /* initialize opts for loop */
  huff = 0;                   /* starting code */
  sym = 0;                    /* starting code symbol */
  len = min;                  /* starting code length */
  next = table_index;              /* current table to fill in */
  curr = root;                /* current table index bits */
  drop = 0;                   /* current bits to drop from code for index */
  low = -1;                   /* trigger new sub-table when len > root */
  used = 1 << root;          /* use root table entries */
  mask = used - 1;            /* mask for comparing low */

  /* check available table space */
  if ((type === LENS$1 && used > ENOUGH_LENS$1) ||
    (type === DISTS$1 && used > ENOUGH_DISTS$1)) {
    return 1;
  }

  /* process all codes and make table entries */
  for (;;) {
    /* create table entry */
    here_bits = len - drop;
    if (work[sym] < end) {
      here_op = 0;
      here_val = work[sym];
    }
    else if (work[sym] > end) {
      here_op = extra[extra_index + work[sym]];
      here_val = base[base_index + work[sym]];
    }
    else {
      here_op = 32 + 64;         /* end of block */
      here_val = 0;
    }

    /* replicate for those indices with low len bits equal to huff */
    incr = 1 << (len - drop);
    fill = 1 << curr;
    min = fill;                 /* save offset to next table */
    do {
      fill -= incr;
      table[next + (huff >> drop) + fill] = (here_bits << 24) | (here_op << 16) | here_val |0;
    } while (fill !== 0);

    /* backwards increment the len-bit code huff */
    incr = 1 << (len - 1);
    while (huff & incr) {
      incr >>= 1;
    }
    if (incr !== 0) {
      huff &= incr - 1;
      huff += incr;
    } else {
      huff = 0;
    }

    /* go to next symbol, update count, len */
    sym++;
    if (--count[len] === 0) {
      if (len === max) { break; }
      len = lens[lens_index + work[sym]];
    }

    /* create new sub-table if needed */
    if (len > root && (huff & mask) !== low) {
      /* if first time, transition to sub-tables */
      if (drop === 0) {
        drop = root;
      }

      /* increment past last table */
      next += min;            /* here min is 1 << curr */

      /* determine length of next table */
      curr = len - drop;
      left = 1 << curr;
      while (curr + drop < max) {
        left -= count[curr + drop];
        if (left <= 0) { break; }
        curr++;
        left <<= 1;
      }

      /* check for enough space */
      used += 1 << curr;
      if ((type === LENS$1 && used > ENOUGH_LENS$1) ||
        (type === DISTS$1 && used > ENOUGH_DISTS$1)) {
        return 1;
      }

      /* point entry in root table to sub-table */
      low = huff & mask;
      /*table.op[low] = curr;
      table.bits[low] = root;
      table.val[low] = next - opts.table_index;*/
      table[low] = (root << 24) | (curr << 16) | (next - table_index) |0;
    }
  }

  /* fill in remaining table entry if code is incomplete (guaranteed to have
   at most one remaining entry, since if the code is incomplete, the
   maximum code length that was allowed to get this far is one bit) */
  if (huff !== 0) {
    //table.op[next + huff] = 64;            /* invalid code marker */
    //table.bits[next + huff] = len - drop;
    //table.val[next + huff] = 0;
    table[next + huff] = ((len - drop) << 24) | (64 << 16) |0;
  }

  /* set return parameters */
  //opts.table_index += used;
  opts.bits = root;
  return 0;
};


var inftrees = inflate_table;

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.






const CODES = 0;
const LENS = 1;
const DISTS = 2;

/* Public constants ==========================================================*/
/* ===========================================================================*/

const {
  Z_FINISH: Z_FINISH$1, Z_BLOCK, Z_TREES,
  Z_OK: Z_OK$1, Z_STREAM_END: Z_STREAM_END$1, Z_NEED_DICT: Z_NEED_DICT$1, Z_STREAM_ERROR: Z_STREAM_ERROR$1, Z_DATA_ERROR: Z_DATA_ERROR$1, Z_MEM_ERROR: Z_MEM_ERROR$1, Z_BUF_ERROR,
  Z_DEFLATED
} = constants$2;


/* STATES ====================================================================*/
/* ===========================================================================*/


const    HEAD = 1;       /* i: waiting for magic header */
const    FLAGS = 2;      /* i: waiting for method and flags (gzip) */
const    TIME = 3;       /* i: waiting for modification time (gzip) */
const    OS = 4;         /* i: waiting for extra flags and operating system (gzip) */
const    EXLEN = 5;      /* i: waiting for extra length (gzip) */
const    EXTRA = 6;      /* i: waiting for extra bytes (gzip) */
const    NAME = 7;       /* i: waiting for end of file name (gzip) */
const    COMMENT = 8;    /* i: waiting for end of comment (gzip) */
const    HCRC = 9;       /* i: waiting for header crc (gzip) */
const    DICTID = 10;    /* i: waiting for dictionary check value */
const    DICT = 11;      /* waiting for inflateSetDictionary() call */
const        TYPE = 12;      /* i: waiting for type bits, including last-flag bit */
const        TYPEDO = 13;    /* i: same, but skip check to exit inflate on new block */
const        STORED = 14;    /* i: waiting for stored size (length and complement) */
const        COPY_ = 15;     /* i/o: same as COPY below, but only first time in */
const        COPY = 16;      /* i/o: waiting for input or output to copy stored block */
const        TABLE = 17;     /* i: waiting for dynamic block table lengths */
const        LENLENS = 18;   /* i: waiting for code length code lengths */
const        CODELENS = 19;  /* i: waiting for length/lit and distance code lengths */
const            LEN_ = 20;      /* i: same as LEN below, but only first time in */
const            LEN = 21;       /* i: waiting for length/lit/eob code */
const            LENEXT = 22;    /* i: waiting for length extra bits */
const            DIST = 23;      /* i: waiting for distance code */
const            DISTEXT = 24;   /* i: waiting for distance extra bits */
const            MATCH = 25;     /* o: waiting for output space to copy string */
const            LIT = 26;       /* o: waiting for output space to write literal */
const    CHECK = 27;     /* i: waiting for 32-bit check value */
const    LENGTH = 28;    /* i: waiting for 32-bit length (gzip) */
const    DONE = 29;      /* finished check, done -- remain here until reset */
const    BAD = 30;       /* got a data error -- remain here until reset */
const    MEM = 31;       /* got an inflate() memory error -- remain here until reset */
const    SYNC = 32;      /* looking for synchronization bytes to restart inflate() */

/* ===========================================================================*/



const ENOUGH_LENS = 852;
const ENOUGH_DISTS = 592;
//const ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);

const MAX_WBITS = 15;
/* 32K LZ77 window */
const DEF_WBITS = MAX_WBITS;


const zswap32 = (q) => {

  return  (((q >>> 24) & 0xff) +
          ((q >>> 8) & 0xff00) +
          ((q & 0xff00) << 8) +
          ((q & 0xff) << 24));
};


function InflateState() {
  this.mode = 0;             /* current inflate mode */
  this.last = false;          /* true if processing last block */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
  this.havedict = false;      /* true if dictionary provided */
  this.flags = 0;             /* gzip header method and flags (0 if zlib) */
  this.dmax = 0;              /* zlib header max distance (INFLATE_STRICT) */
  this.check = 0;             /* protected copy of check value */
  this.total = 0;             /* protected copy of output count */
  // TODO: may be {}
  this.head = null;           /* where to save gzip header information */

  /* sliding window */
  this.wbits = 0;             /* log base 2 of requested window size */
  this.wsize = 0;             /* window size or zero if not using window */
  this.whave = 0;             /* valid bytes in the window */
  this.wnext = 0;             /* window write index */
  this.window = null;         /* allocated sliding window, if needed */

  /* bit accumulator */
  this.hold = 0;              /* input bit accumulator */
  this.bits = 0;              /* number of bits in "in" */

  /* for string and stored block copying */
  this.length = 0;            /* literal or length of data to copy */
  this.offset = 0;            /* distance back to copy string from */

  /* for table and code decoding */
  this.extra = 0;             /* extra bits needed */

  /* fixed and dynamic code tables */
  this.lencode = null;          /* starting table for length/literal codes */
  this.distcode = null;         /* starting table for distance codes */
  this.lenbits = 0;           /* index bits for lencode */
  this.distbits = 0;          /* index bits for distcode */

  /* dynamic table building */
  this.ncode = 0;             /* number of code length code lengths */
  this.nlen = 0;              /* number of length code lengths */
  this.ndist = 0;             /* number of distance code lengths */
  this.have = 0;              /* number of code lengths in lens[] */
  this.next = null;              /* next available space in codes[] */

  this.lens = new Uint16Array(320); /* temporary storage for code lengths */
  this.work = new Uint16Array(288); /* work area for code table building */

  /*
   because we don't have pointers in js, we use lencode and distcode directly
   as buffers so we don't need codes
  */
  //this.codes = new Int32Array(ENOUGH);       /* space for code tables */
  this.lendyn = null;              /* dynamic table for length/literal codes (JS specific) */
  this.distdyn = null;             /* dynamic table for distance codes (JS specific) */
  this.sane = 0;                   /* if false, allow invalid distance too far */
  this.back = 0;                   /* bits back of last unprocessed length/lit */
  this.was = 0;                    /* initial length of match */
}


const inflateResetKeep = (strm) => {

  if (!strm || !strm.state) { return Z_STREAM_ERROR$1; }
  const state = strm.state;
  strm.total_in = strm.total_out = state.total = 0;
  strm.msg = ''; /*Z_NULL*/
  if (state.wrap) {       /* to support ill-conceived Java test suite */
    strm.adler = state.wrap & 1;
  }
  state.mode = HEAD;
  state.last = 0;
  state.havedict = 0;
  state.dmax = 32768;
  state.head = null/*Z_NULL*/;
  state.hold = 0;
  state.bits = 0;
  //state.lencode = state.distcode = state.next = state.codes;
  state.lencode = state.lendyn = new Int32Array(ENOUGH_LENS);
  state.distcode = state.distdyn = new Int32Array(ENOUGH_DISTS);

  state.sane = 1;
  state.back = -1;
  //Tracev((stderr, "inflate: reset\n"));
  return Z_OK$1;
};


const inflateReset = (strm) => {

  if (!strm || !strm.state) { return Z_STREAM_ERROR$1; }
  const state = strm.state;
  state.wsize = 0;
  state.whave = 0;
  state.wnext = 0;
  return inflateResetKeep(strm);

};


const inflateReset2 = (strm, windowBits) => {
  let wrap;

  /* get the state */
  if (!strm || !strm.state) { return Z_STREAM_ERROR$1; }
  const state = strm.state;

  /* extract wrap request from windowBits parameter */
  if (windowBits < 0) {
    wrap = 0;
    windowBits = -windowBits;
  }
  else {
    wrap = (windowBits >> 4) + 1;
    if (windowBits < 48) {
      windowBits &= 15;
    }
  }

  /* set number of window bits, free window if different */
  if (windowBits && (windowBits < 8 || windowBits > 15)) {
    return Z_STREAM_ERROR$1;
  }
  if (state.window !== null && state.wbits !== windowBits) {
    state.window = null;
  }

  /* update state and reset the rest of it */
  state.wrap = wrap;
  state.wbits = windowBits;
  return inflateReset(strm);
};


const inflateInit2 = (strm, windowBits) => {

  if (!strm) { return Z_STREAM_ERROR$1; }
  //strm.msg = Z_NULL;                 /* in case we return an error */

  const state = new InflateState();

  //if (state === Z_NULL) return Z_MEM_ERROR;
  //Tracev((stderr, "inflate: allocated\n"));
  strm.state = state;
  state.window = null/*Z_NULL*/;
  const ret = inflateReset2(strm, windowBits);
  if (ret !== Z_OK$1) {
    strm.state = null/*Z_NULL*/;
  }
  return ret;
};


const inflateInit = (strm) => {

  return inflateInit2(strm, DEF_WBITS);
};


/*
 Return state with length and distance decoding tables and index sizes set to
 fixed code decoding.  Normally this returns fixed tables from inffixed.h.
 If BUILDFIXED is defined, then instead this routine builds the tables the
 first time it's called, and returns those tables the first time and
 thereafter.  This reduces the size of the code by about 2K bytes, in
 exchange for a little execution time.  However, BUILDFIXED should not be
 used for threaded applications, since the rewriting of the tables and virgin
 may not be thread-safe.
 */
let virgin = true;

let lenfix, distfix; // We have no pointers in JS, so keep tables separate


const fixedtables = (state) => {

  /* build fixed huffman tables if first call (may not be thread safe) */
  if (virgin) {
    lenfix = new Int32Array(512);
    distfix = new Int32Array(32);

    /* literal/length table */
    let sym = 0;
    while (sym < 144) { state.lens[sym++] = 8; }
    while (sym < 256) { state.lens[sym++] = 9; }
    while (sym < 280) { state.lens[sym++] = 7; }
    while (sym < 288) { state.lens[sym++] = 8; }

    inftrees(LENS,  state.lens, 0, 288, lenfix,   0, state.work, { bits: 9 });

    /* distance table */
    sym = 0;
    while (sym < 32) { state.lens[sym++] = 5; }

    inftrees(DISTS, state.lens, 0, 32,   distfix, 0, state.work, { bits: 5 });

    /* do this just once */
    virgin = false;
  }

  state.lencode = lenfix;
  state.lenbits = 9;
  state.distcode = distfix;
  state.distbits = 5;
};


/*
 Update the window with the last wsize (normally 32K) bytes written before
 returning.  If window does not exist yet, create it.  This is only called
 when a window is already in use, or when output has been written during this
 inflate call, but the end of the deflate stream has not been reached yet.
 It is also called to create a window for dictionary data when a dictionary
 is loaded.

 Providing output buffers larger than 32K to inflate() should provide a speed
 advantage, since only the last 32K of output is copied to the sliding window
 upon return from inflate(), and since all distances after the first 32K of
 output will fall in the output data, making match copies simpler and faster.
 The advantage may be dependent on the size of the processor's data caches.
 */
const updatewindow = (strm, src, end, copy) => {

  let dist;
  const state = strm.state;

  /* if it hasn't been done already, allocate space for the window */
  if (state.window === null) {
    state.wsize = 1 << state.wbits;
    state.wnext = 0;
    state.whave = 0;

    state.window = new Uint8Array(state.wsize);
  }

  /* copy state->wsize or less output bytes into the circular window */
  if (copy >= state.wsize) {
    state.window.set(src.subarray(end - state.wsize, end), 0);
    state.wnext = 0;
    state.whave = state.wsize;
  }
  else {
    dist = state.wsize - state.wnext;
    if (dist > copy) {
      dist = copy;
    }
    //zmemcpy(state->window + state->wnext, end - copy, dist);
    state.window.set(src.subarray(end - copy, end - copy + dist), state.wnext);
    copy -= dist;
    if (copy) {
      //zmemcpy(state->window, end - copy, copy);
      state.window.set(src.subarray(end - copy, end), 0);
      state.wnext = copy;
      state.whave = state.wsize;
    }
    else {
      state.wnext += dist;
      if (state.wnext === state.wsize) { state.wnext = 0; }
      if (state.whave < state.wsize) { state.whave += dist; }
    }
  }
  return 0;
};


const inflate$2 = (strm, flush) => {

  let state;
  let input, output;          // input/output buffers
  let next;                   /* next input INDEX */
  let put;                    /* next output INDEX */
  let have, left;             /* available input and output */
  let hold;                   /* bit buffer */
  let bits;                   /* bits in bit buffer */
  let _in, _out;              /* save starting available input and output */
  let copy;                   /* number of stored or match bytes to copy */
  let from;                   /* where to copy match bytes from */
  let from_source;
  let here = 0;               /* current decoding table entry */
  let here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
  //let last;                   /* parent table entry */
  let last_bits, last_op, last_val; // paked "last" denormalized (JS specific)
  let len;                    /* length to copy for repeats, bits to drop */
  let ret;                    /* return code */
  const hbuf = new Uint8Array(4);    /* buffer for gzip header crc calculation */
  let opts;

  let n; // temporary variable for NEED_BITS

  const order = /* permutation of code lengths */
    new Uint8Array([ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ]);


  if (!strm || !strm.state || !strm.output ||
      (!strm.input && strm.avail_in !== 0)) {
    return Z_STREAM_ERROR$1;
  }

  state = strm.state;
  if (state.mode === TYPE) { state.mode = TYPEDO; }    /* skip check */


  //--- LOAD() ---
  put = strm.next_out;
  output = strm.output;
  left = strm.avail_out;
  next = strm.next_in;
  input = strm.input;
  have = strm.avail_in;
  hold = state.hold;
  bits = state.bits;
  //---

  _in = have;
  _out = left;
  ret = Z_OK$1;

  inf_leave: // goto emulation
  for (;;) {
    switch (state.mode) {
      case HEAD:
        if (state.wrap === 0) {
          state.mode = TYPEDO;
          break;
        }
        //=== NEEDBITS(16);
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if ((state.wrap & 2) && hold === 0x8b1f) {  /* gzip header */
          state.check = 0/*crc32(0L, Z_NULL, 0)*/;
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32_1(state.check, hbuf, 2, 0);
          //===//

          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          state.mode = FLAGS;
          break;
        }
        state.flags = 0;           /* expect zlib header */
        if (state.head) {
          state.head.done = false;
        }
        if (!(state.wrap & 1) ||   /* check if zlib header allowed */
          (((hold & 0xff)/*BITS(8)*/ << 8) + (hold >> 8)) % 31) {
          strm.msg = 'incorrect header check';
          state.mode = BAD;
          break;
        }
        if ((hold & 0x0f)/*BITS(4)*/ !== Z_DEFLATED) {
          strm.msg = 'unknown compression method';
          state.mode = BAD;
          break;
        }
        //--- DROPBITS(4) ---//
        hold >>>= 4;
        bits -= 4;
        //---//
        len = (hold & 0x0f)/*BITS(4)*/ + 8;
        if (state.wbits === 0) {
          state.wbits = len;
        }
        else if (len > state.wbits) {
          strm.msg = 'invalid window size';
          state.mode = BAD;
          break;
        }

        // !!! pako patch. Force use `options.windowBits` if passed.
        // Required to always use max window size by default.
        state.dmax = 1 << state.wbits;
        //state.dmax = 1 << len;

        //Tracev((stderr, "inflate:   zlib header ok\n"));
        strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
        state.mode = hold & 0x200 ? DICTID : TYPE;
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        break;
      case FLAGS:
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.flags = hold;
        if ((state.flags & 0xff) !== Z_DEFLATED) {
          strm.msg = 'unknown compression method';
          state.mode = BAD;
          break;
        }
        if (state.flags & 0xe000) {
          strm.msg = 'unknown header flags set';
          state.mode = BAD;
          break;
        }
        if (state.head) {
          state.head.text = ((hold >> 8) & 1);
        }
        if (state.flags & 0x0200) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32_1(state.check, hbuf, 2, 0);
          //===//
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = TIME;
        /* falls through */
      case TIME:
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (state.head) {
          state.head.time = hold;
        }
        if (state.flags & 0x0200) {
          //=== CRC4(state.check, hold)
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          hbuf[2] = (hold >>> 16) & 0xff;
          hbuf[3] = (hold >>> 24) & 0xff;
          state.check = crc32_1(state.check, hbuf, 4, 0);
          //===
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = OS;
        /* falls through */
      case OS:
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (state.head) {
          state.head.xflags = (hold & 0xff);
          state.head.os = (hold >> 8);
        }
        if (state.flags & 0x0200) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32_1(state.check, hbuf, 2, 0);
          //===//
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = EXLEN;
        /* falls through */
      case EXLEN:
        if (state.flags & 0x0400) {
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.length = hold;
          if (state.head) {
            state.head.extra_len = hold;
          }
          if (state.flags & 0x0200) {
            //=== CRC2(state.check, hold);
            hbuf[0] = hold & 0xff;
            hbuf[1] = (hold >>> 8) & 0xff;
            state.check = crc32_1(state.check, hbuf, 2, 0);
            //===//
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
        }
        else if (state.head) {
          state.head.extra = null/*Z_NULL*/;
        }
        state.mode = EXTRA;
        /* falls through */
      case EXTRA:
        if (state.flags & 0x0400) {
          copy = state.length;
          if (copy > have) { copy = have; }
          if (copy) {
            if (state.head) {
              len = state.head.extra_len - state.length;
              if (!state.head.extra) {
                // Use untyped array for more convenient processing later
                state.head.extra = new Uint8Array(state.head.extra_len);
              }
              state.head.extra.set(
                input.subarray(
                  next,
                  // extra field is limited to 65536 bytes
                  // - no need for additional size check
                  next + copy
                ),
                /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
                len
              );
              //zmemcpy(state.head.extra + len, next,
              //        len + copy > state.head.extra_max ?
              //        state.head.extra_max - len : copy);
            }
            if (state.flags & 0x0200) {
              state.check = crc32_1(state.check, input, copy, next);
            }
            have -= copy;
            next += copy;
            state.length -= copy;
          }
          if (state.length) { break inf_leave; }
        }
        state.length = 0;
        state.mode = NAME;
        /* falls through */
      case NAME:
        if (state.flags & 0x0800) {
          if (have === 0) { break inf_leave; }
          copy = 0;
          do {
            // TODO: 2 or 1 bytes?
            len = input[next + copy++];
            /* use constant limit because in js we should not preallocate memory */
            if (state.head && len &&
                (state.length < 65536 /*state.head.name_max*/)) {
              state.head.name += String.fromCharCode(len);
            }
          } while (len && copy < have);

          if (state.flags & 0x0200) {
            state.check = crc32_1(state.check, input, copy, next);
          }
          have -= copy;
          next += copy;
          if (len) { break inf_leave; }
        }
        else if (state.head) {
          state.head.name = null;
        }
        state.length = 0;
        state.mode = COMMENT;
        /* falls through */
      case COMMENT:
        if (state.flags & 0x1000) {
          if (have === 0) { break inf_leave; }
          copy = 0;
          do {
            len = input[next + copy++];
            /* use constant limit because in js we should not preallocate memory */
            if (state.head && len &&
                (state.length < 65536 /*state.head.comm_max*/)) {
              state.head.comment += String.fromCharCode(len);
            }
          } while (len && copy < have);
          if (state.flags & 0x0200) {
            state.check = crc32_1(state.check, input, copy, next);
          }
          have -= copy;
          next += copy;
          if (len) { break inf_leave; }
        }
        else if (state.head) {
          state.head.comment = null;
        }
        state.mode = HCRC;
        /* falls through */
      case HCRC:
        if (state.flags & 0x0200) {
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          if (hold !== (state.check & 0xffff)) {
            strm.msg = 'header crc mismatch';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
        }
        if (state.head) {
          state.head.hcrc = ((state.flags >> 9) & 1);
          state.head.done = true;
        }
        strm.adler = state.check = 0;
        state.mode = TYPE;
        break;
      case DICTID:
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        strm.adler = state.check = zswap32(hold);
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = DICT;
        /* falls through */
      case DICT:
        if (state.havedict === 0) {
          //--- RESTORE() ---
          strm.next_out = put;
          strm.avail_out = left;
          strm.next_in = next;
          strm.avail_in = have;
          state.hold = hold;
          state.bits = bits;
          //---
          return Z_NEED_DICT$1;
        }
        strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
        state.mode = TYPE;
        /* falls through */
      case TYPE:
        if (flush === Z_BLOCK || flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case TYPEDO:
        if (state.last) {
          //--- BYTEBITS() ---//
          hold >>>= bits & 7;
          bits -= bits & 7;
          //---//
          state.mode = CHECK;
          break;
        }
        //=== NEEDBITS(3); */
        while (bits < 3) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.last = (hold & 0x01)/*BITS(1)*/;
        //--- DROPBITS(1) ---//
        hold >>>= 1;
        bits -= 1;
        //---//

        switch ((hold & 0x03)/*BITS(2)*/) {
          case 0:                             /* stored block */
            //Tracev((stderr, "inflate:     stored block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = STORED;
            break;
          case 1:                             /* fixed block */
            fixedtables(state);
            //Tracev((stderr, "inflate:     fixed codes block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = LEN_;             /* decode codes */
            if (flush === Z_TREES) {
              //--- DROPBITS(2) ---//
              hold >>>= 2;
              bits -= 2;
              //---//
              break inf_leave;
            }
            break;
          case 2:                             /* dynamic block */
            //Tracev((stderr, "inflate:     dynamic codes block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = TABLE;
            break;
          case 3:
            strm.msg = 'invalid block type';
            state.mode = BAD;
        }
        //--- DROPBITS(2) ---//
        hold >>>= 2;
        bits -= 2;
        //---//
        break;
      case STORED:
        //--- BYTEBITS() ---// /* go to byte boundary */
        hold >>>= bits & 7;
        bits -= bits & 7;
        //---//
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if ((hold & 0xffff) !== ((hold >>> 16) ^ 0xffff)) {
          strm.msg = 'invalid stored block lengths';
          state.mode = BAD;
          break;
        }
        state.length = hold & 0xffff;
        //Tracev((stderr, "inflate:       stored length %u\n",
        //        state.length));
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = COPY_;
        if (flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case COPY_:
        state.mode = COPY;
        /* falls through */
      case COPY:
        copy = state.length;
        if (copy) {
          if (copy > have) { copy = have; }
          if (copy > left) { copy = left; }
          if (copy === 0) { break inf_leave; }
          //--- zmemcpy(put, next, copy); ---
          output.set(input.subarray(next, next + copy), put);
          //---//
          have -= copy;
          next += copy;
          left -= copy;
          put += copy;
          state.length -= copy;
          break;
        }
        //Tracev((stderr, "inflate:       stored end\n"));
        state.mode = TYPE;
        break;
      case TABLE:
        //=== NEEDBITS(14); */
        while (bits < 14) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.nlen = (hold & 0x1f)/*BITS(5)*/ + 257;
        //--- DROPBITS(5) ---//
        hold >>>= 5;
        bits -= 5;
        //---//
        state.ndist = (hold & 0x1f)/*BITS(5)*/ + 1;
        //--- DROPBITS(5) ---//
        hold >>>= 5;
        bits -= 5;
        //---//
        state.ncode = (hold & 0x0f)/*BITS(4)*/ + 4;
        //--- DROPBITS(4) ---//
        hold >>>= 4;
        bits -= 4;
        //---//
//#ifndef PKZIP_BUG_WORKAROUND
        if (state.nlen > 286 || state.ndist > 30) {
          strm.msg = 'too many length or distance symbols';
          state.mode = BAD;
          break;
        }
//#endif
        //Tracev((stderr, "inflate:       table sizes ok\n"));
        state.have = 0;
        state.mode = LENLENS;
        /* falls through */
      case LENLENS:
        while (state.have < state.ncode) {
          //=== NEEDBITS(3);
          while (bits < 3) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.lens[order[state.have++]] = (hold & 0x07);//BITS(3);
          //--- DROPBITS(3) ---//
          hold >>>= 3;
          bits -= 3;
          //---//
        }
        while (state.have < 19) {
          state.lens[order[state.have++]] = 0;
        }
        // We have separate tables & no pointers. 2 commented lines below not needed.
        //state.next = state.codes;
        //state.lencode = state.next;
        // Switch to use dynamic table
        state.lencode = state.lendyn;
        state.lenbits = 7;

        opts = { bits: state.lenbits };
        ret = inftrees(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
        state.lenbits = opts.bits;

        if (ret) {
          strm.msg = 'invalid code lengths set';
          state.mode = BAD;
          break;
        }
        //Tracev((stderr, "inflate:       code lengths ok\n"));
        state.have = 0;
        state.mode = CODELENS;
        /* falls through */
      case CODELENS:
        while (state.have < state.nlen + state.ndist) {
          for (;;) {
            here = state.lencode[hold & ((1 << state.lenbits) - 1)];/*BITS(state.lenbits)*/
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          if (here_val < 16) {
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            state.lens[state.have++] = here_val;
          }
          else {
            if (here_val === 16) {
              //=== NEEDBITS(here.bits + 2);
              n = here_bits + 2;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              if (state.have === 0) {
                strm.msg = 'invalid bit length repeat';
                state.mode = BAD;
                break;
              }
              len = state.lens[state.have - 1];
              copy = 3 + (hold & 0x03);//BITS(2);
              //--- DROPBITS(2) ---//
              hold >>>= 2;
              bits -= 2;
              //---//
            }
            else if (here_val === 17) {
              //=== NEEDBITS(here.bits + 3);
              n = here_bits + 3;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              len = 0;
              copy = 3 + (hold & 0x07);//BITS(3);
              //--- DROPBITS(3) ---//
              hold >>>= 3;
              bits -= 3;
              //---//
            }
            else {
              //=== NEEDBITS(here.bits + 7);
              n = here_bits + 7;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              len = 0;
              copy = 11 + (hold & 0x7f);//BITS(7);
              //--- DROPBITS(7) ---//
              hold >>>= 7;
              bits -= 7;
              //---//
            }
            if (state.have + copy > state.nlen + state.ndist) {
              strm.msg = 'invalid bit length repeat';
              state.mode = BAD;
              break;
            }
            while (copy--) {
              state.lens[state.have++] = len;
            }
          }
        }

        /* handle error breaks in while */
        if (state.mode === BAD) { break; }

        /* check for end-of-block code (better have one) */
        if (state.lens[256] === 0) {
          strm.msg = 'invalid code -- missing end-of-block';
          state.mode = BAD;
          break;
        }

        /* build code tables -- note: do not change the lenbits or distbits
           values here (9 and 6) without reading the comments in inftrees.h
           concerning the ENOUGH constants, which depend on those values */
        state.lenbits = 9;

        opts = { bits: state.lenbits };
        ret = inftrees(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
        // We have separate tables & no pointers. 2 commented lines below not needed.
        // state.next_index = opts.table_index;
        state.lenbits = opts.bits;
        // state.lencode = state.next;

        if (ret) {
          strm.msg = 'invalid literal/lengths set';
          state.mode = BAD;
          break;
        }

        state.distbits = 6;
        //state.distcode.copy(state.codes);
        // Switch to use dynamic table
        state.distcode = state.distdyn;
        opts = { bits: state.distbits };
        ret = inftrees(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
        // We have separate tables & no pointers. 2 commented lines below not needed.
        // state.next_index = opts.table_index;
        state.distbits = opts.bits;
        // state.distcode = state.next;

        if (ret) {
          strm.msg = 'invalid distances set';
          state.mode = BAD;
          break;
        }
        //Tracev((stderr, 'inflate:       codes ok\n'));
        state.mode = LEN_;
        if (flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case LEN_:
        state.mode = LEN;
        /* falls through */
      case LEN:
        if (have >= 6 && left >= 258) {
          //--- RESTORE() ---
          strm.next_out = put;
          strm.avail_out = left;
          strm.next_in = next;
          strm.avail_in = have;
          state.hold = hold;
          state.bits = bits;
          //---
          inffast(strm, _out);
          //--- LOAD() ---
          put = strm.next_out;
          output = strm.output;
          left = strm.avail_out;
          next = strm.next_in;
          input = strm.input;
          have = strm.avail_in;
          hold = state.hold;
          bits = state.bits;
          //---

          if (state.mode === TYPE) {
            state.back = -1;
          }
          break;
        }
        state.back = 0;
        for (;;) {
          here = state.lencode[hold & ((1 << state.lenbits) - 1)];  /*BITS(state.lenbits)*/
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if (here_bits <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        if (here_op && (here_op & 0xf0) === 0) {
          last_bits = here_bits;
          last_op = here_op;
          last_val = here_val;
          for (;;) {
            here = state.lencode[last_val +
                    ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((last_bits + here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          //--- DROPBITS(last.bits) ---//
          hold >>>= last_bits;
          bits -= last_bits;
          //---//
          state.back += last_bits;
        }
        //--- DROPBITS(here.bits) ---//
        hold >>>= here_bits;
        bits -= here_bits;
        //---//
        state.back += here_bits;
        state.length = here_val;
        if (here_op === 0) {
          //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
          //        "inflate:         literal '%c'\n" :
          //        "inflate:         literal 0x%02x\n", here.val));
          state.mode = LIT;
          break;
        }
        if (here_op & 32) {
          //Tracevv((stderr, "inflate:         end of block\n"));
          state.back = -1;
          state.mode = TYPE;
          break;
        }
        if (here_op & 64) {
          strm.msg = 'invalid literal/length code';
          state.mode = BAD;
          break;
        }
        state.extra = here_op & 15;
        state.mode = LENEXT;
        /* falls through */
      case LENEXT:
        if (state.extra) {
          //=== NEEDBITS(state.extra);
          n = state.extra;
          while (bits < n) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.length += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
          //--- DROPBITS(state.extra) ---//
          hold >>>= state.extra;
          bits -= state.extra;
          //---//
          state.back += state.extra;
        }
        //Tracevv((stderr, "inflate:         length %u\n", state.length));
        state.was = state.length;
        state.mode = DIST;
        /* falls through */
      case DIST:
        for (;;) {
          here = state.distcode[hold & ((1 << state.distbits) - 1)];/*BITS(state.distbits)*/
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if ((here_bits) <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        if ((here_op & 0xf0) === 0) {
          last_bits = here_bits;
          last_op = here_op;
          last_val = here_val;
          for (;;) {
            here = state.distcode[last_val +
                    ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((last_bits + here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          //--- DROPBITS(last.bits) ---//
          hold >>>= last_bits;
          bits -= last_bits;
          //---//
          state.back += last_bits;
        }
        //--- DROPBITS(here.bits) ---//
        hold >>>= here_bits;
        bits -= here_bits;
        //---//
        state.back += here_bits;
        if (here_op & 64) {
          strm.msg = 'invalid distance code';
          state.mode = BAD;
          break;
        }
        state.offset = here_val;
        state.extra = (here_op) & 15;
        state.mode = DISTEXT;
        /* falls through */
      case DISTEXT:
        if (state.extra) {
          //=== NEEDBITS(state.extra);
          n = state.extra;
          while (bits < n) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.offset += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
          //--- DROPBITS(state.extra) ---//
          hold >>>= state.extra;
          bits -= state.extra;
          //---//
          state.back += state.extra;
        }
//#ifdef INFLATE_STRICT
        if (state.offset > state.dmax) {
          strm.msg = 'invalid distance too far back';
          state.mode = BAD;
          break;
        }
//#endif
        //Tracevv((stderr, "inflate:         distance %u\n", state.offset));
        state.mode = MATCH;
        /* falls through */
      case MATCH:
        if (left === 0) { break inf_leave; }
        copy = _out - left;
        if (state.offset > copy) {         /* copy from window */
          copy = state.offset - copy;
          if (copy > state.whave) {
            if (state.sane) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD;
              break;
            }
// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//          Trace((stderr, "inflate.c too far\n"));
//          copy -= state.whave;
//          if (copy > state.length) { copy = state.length; }
//          if (copy > left) { copy = left; }
//          left -= copy;
//          state.length -= copy;
//          do {
//            output[put++] = 0;
//          } while (--copy);
//          if (state.length === 0) { state.mode = LEN; }
//          break;
//#endif
          }
          if (copy > state.wnext) {
            copy -= state.wnext;
            from = state.wsize - copy;
          }
          else {
            from = state.wnext - copy;
          }
          if (copy > state.length) { copy = state.length; }
          from_source = state.window;
        }
        else {                              /* copy from output */
          from_source = output;
          from = put - state.offset;
          copy = state.length;
        }
        if (copy > left) { copy = left; }
        left -= copy;
        state.length -= copy;
        do {
          output[put++] = from_source[from++];
        } while (--copy);
        if (state.length === 0) { state.mode = LEN; }
        break;
      case LIT:
        if (left === 0) { break inf_leave; }
        output[put++] = state.length;
        left--;
        state.mode = LEN;
        break;
      case CHECK:
        if (state.wrap) {
          //=== NEEDBITS(32);
          while (bits < 32) {
            if (have === 0) { break inf_leave; }
            have--;
            // Use '|' instead of '+' to make sure that result is signed
            hold |= input[next++] << bits;
            bits += 8;
          }
          //===//
          _out -= left;
          strm.total_out += _out;
          state.total += _out;
          if (_out) {
            strm.adler = state.check =
                /*UPDATE(state.check, put - _out, _out);*/
                (state.flags ? crc32_1(state.check, output, _out, put - _out) : adler32_1(state.check, output, _out, put - _out));

          }
          _out = left;
          // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too
          if ((state.flags ? hold : zswap32(hold)) !== state.check) {
            strm.msg = 'incorrect data check';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          //Tracev((stderr, "inflate:   check matches trailer\n"));
        }
        state.mode = LENGTH;
        /* falls through */
      case LENGTH:
        if (state.wrap && state.flags) {
          //=== NEEDBITS(32);
          while (bits < 32) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          if (hold !== (state.total & 0xffffffff)) {
            strm.msg = 'incorrect length check';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          //Tracev((stderr, "inflate:   length matches trailer\n"));
        }
        state.mode = DONE;
        /* falls through */
      case DONE:
        ret = Z_STREAM_END$1;
        break inf_leave;
      case BAD:
        ret = Z_DATA_ERROR$1;
        break inf_leave;
      case MEM:
        return Z_MEM_ERROR$1;
      case SYNC:
        /* falls through */
      default:
        return Z_STREAM_ERROR$1;
    }
  }

  // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"

  /*
     Return from inflate(), updating the total counts and the check value.
     If there was no progress during the inflate() call, return a buffer
     error.  Call updatewindow() to create and/or update the window state.
     Note: a memory error from inflate() is non-recoverable.
   */

  //--- RESTORE() ---
  strm.next_out = put;
  strm.avail_out = left;
  strm.next_in = next;
  strm.avail_in = have;
  state.hold = hold;
  state.bits = bits;
  //---

  if (state.wsize || (_out !== strm.avail_out && state.mode < BAD &&
                      (state.mode < CHECK || flush !== Z_FINISH$1))) {
    if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) ;
  }
  _in -= strm.avail_in;
  _out -= strm.avail_out;
  strm.total_in += _in;
  strm.total_out += _out;
  state.total += _out;
  if (state.wrap && _out) {
    strm.adler = state.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
      (state.flags ? crc32_1(state.check, output, _out, strm.next_out - _out) : adler32_1(state.check, output, _out, strm.next_out - _out));
  }
  strm.data_type = state.bits + (state.last ? 64 : 0) +
                    (state.mode === TYPE ? 128 : 0) +
                    (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
  if (((_in === 0 && _out === 0) || flush === Z_FINISH$1) && ret === Z_OK$1) {
    ret = Z_BUF_ERROR;
  }
  return ret;
};


const inflateEnd = (strm) => {

  if (!strm || !strm.state /*|| strm->zfree == (free_func)0*/) {
    return Z_STREAM_ERROR$1;
  }

  let state = strm.state;
  if (state.window) {
    state.window = null;
  }
  strm.state = null;
  return Z_OK$1;
};


const inflateGetHeader = (strm, head) => {

  /* check state */
  if (!strm || !strm.state) { return Z_STREAM_ERROR$1; }
  const state = strm.state;
  if ((state.wrap & 2) === 0) { return Z_STREAM_ERROR$1; }

  /* save header structure */
  state.head = head;
  head.done = false;
  return Z_OK$1;
};


const inflateSetDictionary = (strm, dictionary) => {
  const dictLength = dictionary.length;

  let state;
  let dictid;
  let ret;

  /* check state */
  if (!strm /* == Z_NULL */ || !strm.state /* == Z_NULL */) { return Z_STREAM_ERROR$1; }
  state = strm.state;

  if (state.wrap !== 0 && state.mode !== DICT) {
    return Z_STREAM_ERROR$1;
  }

  /* check for correct dictionary identifier */
  if (state.mode === DICT) {
    dictid = 1; /* adler32(0, null, 0)*/
    /* dictid = adler32(dictid, dictionary, dictLength); */
    dictid = adler32_1(dictid, dictionary, dictLength, 0);
    if (dictid !== state.check) {
      return Z_DATA_ERROR$1;
    }
  }
  /* copy dictionary to window using updatewindow(), which will amend the
   existing dictionary if appropriate */
  ret = updatewindow(strm, dictionary, dictLength, dictLength);
  if (ret) {
    state.mode = MEM;
    return Z_MEM_ERROR$1;
  }
  state.havedict = 1;
  // Tracev((stderr, "inflate:   dictionary set\n"));
  return Z_OK$1;
};


var inflateReset_1 = inflateReset;
var inflateReset2_1 = inflateReset2;
var inflateResetKeep_1 = inflateResetKeep;
var inflateInit_1 = inflateInit;
var inflateInit2_1 = inflateInit2;
var inflate_2$1 = inflate$2;
var inflateEnd_1 = inflateEnd;
var inflateGetHeader_1 = inflateGetHeader;
var inflateSetDictionary_1 = inflateSetDictionary;
var inflateInfo = 'pako inflate (from Nodeca project)';

/* Not implemented
module.exports.inflateCopy = inflateCopy;
module.exports.inflateGetDictionary = inflateGetDictionary;
module.exports.inflateMark = inflateMark;
module.exports.inflatePrime = inflatePrime;
module.exports.inflateSync = inflateSync;
module.exports.inflateSyncPoint = inflateSyncPoint;
module.exports.inflateUndermine = inflateUndermine;
*/

var inflate_1$2 = {
	inflateReset: inflateReset_1,
	inflateReset2: inflateReset2_1,
	inflateResetKeep: inflateResetKeep_1,
	inflateInit: inflateInit_1,
	inflateInit2: inflateInit2_1,
	inflate: inflate_2$1,
	inflateEnd: inflateEnd_1,
	inflateGetHeader: inflateGetHeader_1,
	inflateSetDictionary: inflateSetDictionary_1,
	inflateInfo: inflateInfo
};

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function GZheader() {
  /* true if compressed data believed to be text */
  this.text       = 0;
  /* modification time */
  this.time       = 0;
  /* extra flags (not used when writing a gzip file) */
  this.xflags     = 0;
  /* operating system */
  this.os         = 0;
  /* pointer to extra field or Z_NULL if none */
  this.extra      = null;
  /* extra field length (valid if extra != Z_NULL) */
  this.extra_len  = 0; // Actually, we don't need it in JS,
                       // but leave for few code modifications

  //
  // Setup limits is not necessary because in js we should not preallocate memory
  // for inflate use constant limit in 65536 bytes
  //

  /* space at extra (only when reading header) */
  // this.extra_max  = 0;
  /* pointer to zero-terminated file name or Z_NULL */
  this.name       = '';
  /* space at name (only when reading header) */
  // this.name_max   = 0;
  /* pointer to zero-terminated comment or Z_NULL */
  this.comment    = '';
  /* space at comment (only when reading header) */
  // this.comm_max   = 0;
  /* true if there was or will be a header crc */
  this.hcrc       = 0;
  /* true when done reading gzip header (not used when writing a gzip file) */
  this.done       = false;
}

var gzheader = GZheader;

const toString = Object.prototype.toString;

/* Public constants ==========================================================*/
/* ===========================================================================*/

const {
  Z_NO_FLUSH, Z_FINISH,
  Z_OK, Z_STREAM_END, Z_NEED_DICT, Z_STREAM_ERROR, Z_DATA_ERROR, Z_MEM_ERROR
} = constants$2;

/* ===========================================================================*/


/**
 * class Inflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[inflate]]
 * and [[inflateRaw]].
 **/

/* internal
 * inflate.chunks -> Array
 *
 * Chunks of output data, if [[Inflate#onData]] not overridden.
 **/

/**
 * Inflate.result -> Uint8Array|String
 *
 * Uncompressed result, generated by default [[Inflate#onData]]
 * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Inflate#push]] with `Z_FINISH` / `true` param).
 **/

/**
 * Inflate.err -> Number
 *
 * Error code after inflate finished. 0 (Z_OK) on success.
 * Should be checked if broken data possible.
 **/

/**
 * Inflate.msg -> String
 *
 * Error message, if [[Inflate.err]] != 0
 **/


/**
 * new Inflate(options)
 * - options (Object): zlib inflate options.
 *
 * Creates new inflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `windowBits`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw inflate
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 * By default, when no options set, autodetect deflate/gzip data format via
 * wrapper header.
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako')
 * const chunk1 = new Uint8Array([1,2,3,4,5,6,7,8,9])
 * const chunk2 = new Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * const inflate = new pako.Inflate({ level: 3});
 *
 * inflate.push(chunk1, false);
 * inflate.push(chunk2, true);  // true -> last chunk
 *
 * if (inflate.err) { throw new Error(inflate.err); }
 *
 * console.log(inflate.result);
 * ```
 **/
function Inflate$1(options) {
  this.options = common.assign({
    chunkSize: 1024 * 64,
    windowBits: 15,
    to: ''
  }, options || {});

  const opt = this.options;

  // Force window size for `raw` data, if not set directly,
  // because we have no header for autodetect.
  if (opt.raw && (opt.windowBits >= 0) && (opt.windowBits < 16)) {
    opt.windowBits = -opt.windowBits;
    if (opt.windowBits === 0) { opt.windowBits = -15; }
  }

  // If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate
  if ((opt.windowBits >= 0) && (opt.windowBits < 16) &&
      !(options && options.windowBits)) {
    opt.windowBits += 32;
  }

  // Gzip header has no info about windows size, we can do autodetect only
  // for deflate. So, if window size not set, force it to max when gzip possible
  if ((opt.windowBits > 15) && (opt.windowBits < 48)) {
    // bit 3 (16) -> gzipped data
    // bit 4 (32) -> autodetect gzip/deflate
    if ((opt.windowBits & 15) === 0) {
      opt.windowBits |= 15;
    }
  }

  this.err    = 0;      // error code, if happens (0 = Z_OK)
  this.msg    = '';     // error message
  this.ended  = false;  // used to avoid multiple onEnd() calls
  this.chunks = [];     // chunks of compressed data

  this.strm   = new zstream();
  this.strm.avail_out = 0;

  let status  = inflate_1$2.inflateInit2(
    this.strm,
    opt.windowBits
  );

  if (status !== Z_OK) {
    throw new Error(messages[status]);
  }

  this.header = new gzheader();

  inflate_1$2.inflateGetHeader(this.strm, this.header);

  // Setup dictionary
  if (opt.dictionary) {
    // Convert data if needed
    if (typeof opt.dictionary === 'string') {
      opt.dictionary = strings.string2buf(opt.dictionary);
    } else if (toString.call(opt.dictionary) === '[object ArrayBuffer]') {
      opt.dictionary = new Uint8Array(opt.dictionary);
    }
    if (opt.raw) { //In raw mode we need to set the dictionary early
      status = inflate_1$2.inflateSetDictionary(this.strm, opt.dictionary);
      if (status !== Z_OK) {
        throw new Error(messages[status]);
      }
    }
  }
}

/**
 * Inflate#push(data[, flush_mode]) -> Boolean
 * - data (Uint8Array|ArrayBuffer): input data
 * - flush_mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE
 *   flush modes. See constants. Skipped or `false` means Z_NO_FLUSH,
 *   `true` means Z_FINISH.
 *
 * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
 * new output chunks. Returns `true` on success. If end of stream detected,
 * [[Inflate#onEnd]] will be called.
 *
 * `flush_mode` is not needed for normal operation, because end of stream
 * detected automatically. You may try to use it for advanced things, but
 * this functionality was not tested.
 *
 * On fail call [[Inflate#onEnd]] with error code and return false.
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/
Inflate$1.prototype.push = function (data, flush_mode) {
  const strm = this.strm;
  const chunkSize = this.options.chunkSize;
  const dictionary = this.options.dictionary;
  let status, _flush_mode, last_avail_out;

  if (this.ended) return false;

  if (flush_mode === ~~flush_mode) _flush_mode = flush_mode;
  else _flush_mode = flush_mode === true ? Z_FINISH : Z_NO_FLUSH;

  // Convert data if needed
  if (toString.call(data) === '[object ArrayBuffer]') {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }

  strm.next_in = 0;
  strm.avail_in = strm.input.length;

  for (;;) {
    if (strm.avail_out === 0) {
      strm.output = new Uint8Array(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }

    status = inflate_1$2.inflate(strm, _flush_mode);

    if (status === Z_NEED_DICT && dictionary) {
      status = inflate_1$2.inflateSetDictionary(strm, dictionary);

      if (status === Z_OK) {
        status = inflate_1$2.inflate(strm, _flush_mode);
      } else if (status === Z_DATA_ERROR) {
        // Replace code with more verbose
        status = Z_NEED_DICT;
      }
    }

    // Skip snyc markers if more data follows and not raw mode
    while (strm.avail_in > 0 &&
           status === Z_STREAM_END &&
           strm.state.wrap > 0 &&
           data[strm.next_in] !== 0)
    {
      inflate_1$2.inflateReset(strm);
      status = inflate_1$2.inflate(strm, _flush_mode);
    }

    switch (status) {
      case Z_STREAM_ERROR:
      case Z_DATA_ERROR:
      case Z_NEED_DICT:
      case Z_MEM_ERROR:
        this.onEnd(status);
        this.ended = true;
        return false;
    }

    // Remember real `avail_out` value, because we may patch out buffer content
    // to align utf8 strings boundaries.
    last_avail_out = strm.avail_out;

    if (strm.next_out) {
      if (strm.avail_out === 0 || status === Z_STREAM_END) {

        if (this.options.to === 'string') {

          let next_out_utf8 = strings.utf8border(strm.output, strm.next_out);

          let tail = strm.next_out - next_out_utf8;
          let utf8str = strings.buf2string(strm.output, next_out_utf8);

          // move tail & realign counters
          strm.next_out = tail;
          strm.avail_out = chunkSize - tail;
          if (tail) strm.output.set(strm.output.subarray(next_out_utf8, next_out_utf8 + tail), 0);

          this.onData(utf8str);

        } else {
          this.onData(strm.output.length === strm.next_out ? strm.output : strm.output.subarray(0, strm.next_out));
        }
      }
    }

    // Must repeat iteration if out buffer is full
    if (status === Z_OK && last_avail_out === 0) continue;

    // Finalize if end of stream reached.
    if (status === Z_STREAM_END) {
      status = inflate_1$2.inflateEnd(this.strm);
      this.onEnd(status);
      this.ended = true;
      return true;
    }

    if (strm.avail_in === 0) break;
  }

  return true;
};


/**
 * Inflate#onData(chunk) -> Void
 * - chunk (Uint8Array|String): output data. When string output requested,
 *   each chunk will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/
Inflate$1.prototype.onData = function (chunk) {
  this.chunks.push(chunk);
};


/**
 * Inflate#onEnd(status) -> Void
 * - status (Number): inflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called either after you tell inflate that the input stream is
 * complete (Z_FINISH). By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/
Inflate$1.prototype.onEnd = function (status) {
  // On success - join
  if (status === Z_OK) {
    if (this.options.to === 'string') {
      this.result = this.chunks.join('');
    } else {
      this.result = common.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};


/**
 * inflate(data[, options]) -> Uint8Array|String
 * - data (Uint8Array): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Decompress `data` with inflate/ungzip and `options`. Autodetect
 * format via wrapper header by default. That's why we don't provide
 * separate `ungzip` method.
 *
 * Supported options are:
 *
 * - windowBits
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako');
 * const input = pako.deflate(new Uint8Array([1,2,3,4,5,6,7,8,9]));
 * let output;
 *
 * try {
 *   output = pako.inflate(input);
 * } catch (err) {
 *   console.log(err);
 * }
 * ```
 **/
function inflate$1(input, options) {
  const inflator = new Inflate$1(options);

  inflator.push(input);

  // That will never happens, if you don't cheat with options :)
  if (inflator.err) throw inflator.msg || messages[inflator.err];

  return inflator.result;
}


/**
 * inflateRaw(data[, options]) -> Uint8Array|String
 * - data (Uint8Array): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * The same as [[inflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/
function inflateRaw$1(input, options) {
  options = options || {};
  options.raw = true;
  return inflate$1(input, options);
}


/**
 * ungzip(data[, options]) -> Uint8Array|String
 * - data (Uint8Array): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Just shortcut to [[inflate]], because it autodetects format
 * by header.content. Done for convenience.
 **/


var Inflate_1$1 = Inflate$1;
var inflate_2 = inflate$1;
var inflateRaw_1$1 = inflateRaw$1;
var ungzip$1 = inflate$1;
var constants = constants$2;

var inflate_1$1 = {
	Inflate: Inflate_1$1,
	inflate: inflate_2,
	inflateRaw: inflateRaw_1$1,
	ungzip: ungzip$1,
	constants: constants
};

const { Deflate, deflate, deflateRaw, gzip } = deflate_1$1;

const { Inflate, inflate, inflateRaw, ungzip } = inflate_1$1;



var Deflate_1 = Deflate;
var deflate_1 = deflate;
var deflateRaw_1 = deflateRaw;
var gzip_1 = gzip;
var Inflate_1 = Inflate;
var inflate_1 = inflate;
var inflateRaw_1 = inflateRaw;
var ungzip_1 = ungzip;
var constants_1 = constants$2;

var pako = {
	Deflate: Deflate_1,
	deflate: deflate_1,
	deflateRaw: deflateRaw_1,
	gzip: gzip_1,
	Inflate: Inflate_1,
	inflate: inflate_1,
	inflateRaw: inflateRaw_1,
	ungzip: ungzip_1,
	constants: constants_1
};

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

async function get_fetch() {
    let fetch;
    try {
        if (process && typeof process !== undefined && process.release.name === "node") {
            fetch = (await import('cross-fetch')).fetch;
        }
    } catch {
        fetch = window.fetch;
    }
    return fetch;
}

const headers = {
    credential: "include",
    cache: "force-cache",
    mode: "cors"
};

async function fetch_data(URL) {
    const fetch = await get_fetch();
    const response = await fetch(URL, headers);
    let data = await response.arrayBuffer();
    data = pako.inflate(data);
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
    
    return {values, labels, columns, statistics: getStatistics({values, columns})};
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
    
    return {values, labels, columns, statistics: getStatistics({values, columns})};
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
    
    return {values, labels, columns, statistics: getStatistics({values, columns})};
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
    
    return {values, labels, columns, statistics: getStatistics({values, columns})};
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
    
    return {values, labels, columns, statistics: getStatistics({values, columns})};
}

const MOONS = moons();

/**
 * Creates a dataset consisting of some gaussian blobs.
 * @param {Object} parameters 
 * @param {Number} [parameters.N = 400] - Number of points.
 * @param {Number} [parameters.D = 3] - Dimensionality of the dataset.
 * @param {Array<Array>|Number} [parameters.centers = 3] - Either number of blobs, or their centers.
 * @param {Array<Array>|Number} [parameters.deviations = 1] - If a number given the deviation of the blobs in each dimension, else an array consisting the deviations for all blobs for all directions.
 * @param {Number} [parameters.seed = 4711] - Seed for the random number generator.
 * @returns {{values: Array<Array>, labels: Array<String>, columns: Array<String>, statistics: Object}} - The final blobs dataset.
 */
function blobs({N = 400, D = 3, centers, deviations, seed = 4711} = {}) {
    const R = new Randomizer(seed);
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
    
    return {values, labels, columns, statistics: getStatistics({values, columns})};
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

var values=[[39.1,18.7,181,3750],[39.5,17.4,186,3800],[40.3,18,195,3250],[null,null,null,null],[36.7,19.3,193,3450],[39.3,20.6,190,3650],[38.9,17.8,181,3625],[39.2,19.6,195,4675],[34.1,18.1,193,3475],[42,20.2,190,4250],[37.8,17.1,186,3300],[37.8,17.3,180,3700],[41.1,17.6,182,3200],[38.6,21.2,191,3800],[34.6,21.1,198,4400],[36.6,17.8,185,3700],[38.7,19,195,3450],[42.5,20.7,197,4500],[34.4,18.4,184,3325],[46,21.5,194,4200],[37.8,18.3,174,3400],[37.7,18.7,180,3600],[35.9,19.2,189,3800],[38.2,18.1,185,3950],[38.8,17.2,180,3800],[35.3,18.9,187,3800],[40.6,18.6,183,3550],[40.5,17.9,187,3200],[37.9,18.6,172,3150],[40.5,18.9,180,3950],[39.5,16.7,178,3250],[37.2,18.1,178,3900],[39.5,17.8,188,3300],[40.9,18.9,184,3900],[36.4,17,195,3325],[39.2,21.1,196,4150],[38.8,20,190,3950],[42.2,18.5,180,3550],[37.6,19.3,181,3300],[39.8,19.1,184,4650],[36.5,18,182,3150],[40.8,18.4,195,3900],[36,18.5,186,3100],[44.1,19.7,196,4400],[37,16.9,185,3000],[39.6,18.8,190,4600],[41.1,19,182,3425],[37.5,18.9,179,2975],[36,17.9,190,3450],[42.3,21.2,191,4150],[39.6,17.7,186,3500],[40.1,18.9,188,4300],[35,17.9,190,3450],[42,19.5,200,4050],[34.5,18.1,187,2900],[41.4,18.6,191,3700],[39,17.5,186,3550],[40.6,18.8,193,3800],[36.5,16.6,181,2850],[37.6,19.1,194,3750],[35.7,16.9,185,3150],[41.3,21.1,195,4400],[37.6,17,185,3600],[41.1,18.2,192,4050],[36.4,17.1,184,2850],[41.6,18,192,3950],[35.5,16.2,195,3350],[41.1,19.1,188,4100],[35.9,16.6,190,3050],[41.8,19.4,198,4450],[33.5,19,190,3600],[39.7,18.4,190,3900],[39.6,17.2,196,3550],[45.8,18.9,197,4150],[35.5,17.5,190,3700],[42.8,18.5,195,4250],[40.9,16.8,191,3700],[37.2,19.4,184,3900],[36.2,16.1,187,3550],[42.1,19.1,195,4000],[34.6,17.2,189,3200],[42.9,17.6,196,4700],[36.7,18.8,187,3800],[35.1,19.4,193,4200],[37.3,17.8,191,3350],[41.3,20.3,194,3550],[36.3,19.5,190,3800],[36.9,18.6,189,3500],[38.3,19.2,189,3950],[38.9,18.8,190,3600],[35.7,18,202,3550],[41.1,18.1,205,4300],[34,17.1,185,3400],[39.6,18.1,186,4450],[36.2,17.3,187,3300],[40.8,18.9,208,4300],[38.1,18.6,190,3700],[40.3,18.5,196,4350],[33.1,16.1,178,2900],[43.2,18.5,192,4100],[35,17.9,192,3725],[41,20,203,4725],[37.7,16,183,3075],[37.8,20,190,4250],[37.9,18.6,193,2925],[39.7,18.9,184,3550],[38.6,17.2,199,3750],[38.2,20,190,3900],[38.1,17,181,3175],[43.2,19,197,4775],[38.1,16.5,198,3825],[45.6,20.3,191,4600],[39.7,17.7,193,3200],[42.2,19.5,197,4275],[39.6,20.7,191,3900],[42.7,18.3,196,4075],[38.6,17,188,2900],[37.3,20.5,199,3775],[35.7,17,189,3350],[41.1,18.6,189,3325],[36.2,17.2,187,3150],[37.7,19.8,198,3500],[40.2,17,176,3450],[41.4,18.5,202,3875],[35.2,15.9,186,3050],[40.6,19,199,4000],[38.8,17.6,191,3275],[41.5,18.3,195,4300],[39,17.1,191,3050],[44.1,18,210,4000],[38.5,17.9,190,3325],[43.1,19.2,197,3500],[36.8,18.5,193,3500],[37.5,18.5,199,4475],[38.1,17.6,187,3425],[41.1,17.5,190,3900],[35.6,17.5,191,3175],[40.2,20.1,200,3975],[37,16.5,185,3400],[39.7,17.9,193,4250],[40.2,17.1,193,3400],[40.6,17.2,187,3475],[32.1,15.5,188,3050],[40.7,17,190,3725],[37.3,16.8,192,3000],[39,18.7,185,3650],[39.2,18.6,190,4250],[36.6,18.4,184,3475],[36,17.8,195,3450],[37.8,18.1,193,3750],[36,17.1,187,3700],[41.5,18.5,201,4000],[46.1,13.2,211,4500],[50,16.3,230,5700],[48.7,14.1,210,4450],[50,15.2,218,5700],[47.6,14.5,215,5400],[46.5,13.5,210,4550],[45.4,14.6,211,4800],[46.7,15.3,219,5200],[43.3,13.4,209,4400],[46.8,15.4,215,5150],[40.9,13.7,214,4650],[49,16.1,216,5550],[45.5,13.7,214,4650],[48.4,14.6,213,5850],[45.8,14.6,210,4200],[49.3,15.7,217,5850],[42,13.5,210,4150],[49.2,15.2,221,6300],[46.2,14.5,209,4800],[48.7,15.1,222,5350],[50.2,14.3,218,5700],[45.1,14.5,215,5000],[46.5,14.5,213,4400],[46.3,15.8,215,5050],[42.9,13.1,215,5000],[46.1,15.1,215,5100],[44.5,14.3,216,4100],[47.8,15,215,5650],[48.2,14.3,210,4600],[50,15.3,220,5550],[47.3,15.3,222,5250],[42.8,14.2,209,4700],[45.1,14.5,207,5050],[59.6,17,230,6050],[49.1,14.8,220,5150],[48.4,16.3,220,5400],[42.6,13.7,213,4950],[44.4,17.3,219,5250],[44,13.6,208,4350],[48.7,15.7,208,5350],[42.7,13.7,208,3950],[49.6,16,225,5700],[45.3,13.7,210,4300],[49.6,15,216,4750],[50.5,15.9,222,5550],[43.6,13.9,217,4900],[45.5,13.9,210,4200],[50.5,15.9,225,5400],[44.9,13.3,213,5100],[45.2,15.8,215,5300],[46.6,14.2,210,4850],[48.5,14.1,220,5300],[45.1,14.4,210,4400],[50.1,15,225,5000],[46.5,14.4,217,4900],[45,15.4,220,5050],[43.8,13.9,208,4300],[45.5,15,220,5000],[43.2,14.5,208,4450],[50.4,15.3,224,5550],[45.3,13.8,208,4200],[46.2,14.9,221,5300],[45.7,13.9,214,4400],[54.3,15.7,231,5650],[45.8,14.2,219,4700],[49.8,16.8,230,5700],[46.2,14.4,214,4650],[49.5,16.2,229,5800],[43.5,14.2,220,4700],[50.7,15,223,5550],[47.7,15,216,4750],[46.4,15.6,221,5000],[48.2,15.6,221,5100],[46.5,14.8,217,5200],[46.4,15,216,4700],[48.6,16,230,5800],[47.5,14.2,209,4600],[51.1,16.3,220,6000],[45.2,13.8,215,4750],[45.2,16.4,223,5950],[49.1,14.5,212,4625],[52.5,15.6,221,5450],[47.4,14.6,212,4725],[50,15.9,224,5350],[44.9,13.8,212,4750],[50.8,17.3,228,5600],[43.4,14.4,218,4600],[51.3,14.2,218,5300],[47.5,14,212,4875],[52.1,17,230,5550],[47.5,15,218,4950],[52.2,17.1,228,5400],[45.5,14.5,212,4750],[49.5,16.1,224,5650],[44.5,14.7,214,4850],[50.8,15.7,226,5200],[49.4,15.8,216,4925],[46.9,14.6,222,4875],[48.4,14.4,203,4625],[51.1,16.5,225,5250],[48.5,15,219,4850],[55.9,17,228,5600],[47.2,15.5,215,4975],[49.1,15,228,5500],[47.3,13.8,216,4725],[46.8,16.1,215,5500],[41.7,14.7,210,4700],[53.4,15.8,219,5500],[43.3,14,208,4575],[48.1,15.1,209,5500],[50.5,15.2,216,5000],[49.8,15.9,229,5950],[43.5,15.2,213,4650],[51.5,16.3,230,5500],[46.2,14.1,217,4375],[55.1,16,230,5850],[44.5,15.7,217,4875],[48.8,16.2,222,6000],[47.2,13.7,214,4925],[null,null,null,null],[46.8,14.3,215,4850],[50.4,15.7,222,5750],[45.2,14.8,212,5200],[49.9,16.1,213,5400],[46.5,17.9,192,3500],[50,19.5,196,3900],[51.3,19.2,193,3650],[45.4,18.7,188,3525],[52.7,19.8,197,3725],[45.2,17.8,198,3950],[46.1,18.2,178,3250],[51.3,18.2,197,3750],[46,18.9,195,4150],[51.3,19.9,198,3700],[46.6,17.8,193,3800],[51.7,20.3,194,3775],[47,17.3,185,3700],[52,18.1,201,4050],[45.9,17.1,190,3575],[50.5,19.6,201,4050],[50.3,20,197,3300],[58,17.8,181,3700],[46.4,18.6,190,3450],[49.2,18.2,195,4400],[42.4,17.3,181,3600],[48.5,17.5,191,3400],[43.2,16.6,187,2900],[50.6,19.4,193,3800],[46.7,17.9,195,3300],[52,19,197,4150],[50.5,18.4,200,3400],[49.5,19,200,3800],[46.4,17.8,191,3700],[52.8,20,205,4550],[40.9,16.6,187,3200],[54.2,20.8,201,4300],[42.5,16.7,187,3350],[51,18.8,203,4100],[49.7,18.6,195,3600],[47.5,16.8,199,3900],[47.6,18.3,195,3850],[52,20.7,210,4800],[46.9,16.6,192,2700],[53.5,19.9,205,4500],[49,19.5,210,3950],[46.2,17.5,187,3650],[50.9,19.1,196,3550],[45.5,17,196,3500],[50.9,17.9,196,3675],[50.8,18.5,201,4450],[50.1,17.9,190,3400],[49,19.6,212,4300],[51.5,18.7,187,3250],[49.8,17.3,198,3675],[48.1,16.4,199,3325],[51.4,19,201,3950],[45.7,17.3,193,3600],[50.7,19.7,203,4050],[42.5,17.3,187,3350],[52.2,18.8,197,3450],[45.2,16.6,191,3250],[49.3,19.9,203,4050],[50.2,18.8,202,3800],[45.6,19.4,194,3525],[51.9,19.5,206,3950],[46.8,16.5,189,3650],[45.7,17,195,3650],[55.8,19.8,207,4000],[43.5,18.1,202,3400],[49.6,18.2,193,3775],[50.8,19,210,4100],[50.2,18.7,198,3775]];var columns=["bill_length_mm","bill_depth_mm","flipper_length_mm","body_mass_g"];var labels=["Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap"];var island=["Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream"];var sex=["male","female","female",null,"female","male","female","male",null,null,null,null,"female","male","male","female","female","male","female","male","female","male","female","male","male","female","male","female","female","male","female","male","female","male","female","male","male","female","female","male","female","male","female","male","female","male","male",null,"female","male","female","male","female","male","female","male","female","male","female","male","female","male","female","male","female","male","female","male","female","male","female","male","female","male","female","male","female","male","female","male","female","male","female","male","female","male","male","female","male","female","female","male","female","male","female","male","female","male","female","male","female","male","female","male","female","male","female","male","female","male","female","male","female","male","female","male","female","male","female","male","female","male","female","male","female","male","female","male","female","male","female","male","female","male","female","male","female","male","female","male","female","male","female","male","female","male","male","female","female","male","female","male","female","male","female","male","male","female","female","male","female","male","female","male","female","male","female","male","female","male","female","male","male","female","female","male","female","male",null,"male","female","male","male","female","female","male","female","male","female","male","female","male","female","male","female","male","male","female","female","male","female","male","female","male","female","male","female","male","female","male","female","male","female","male","female","male","female","male",null,"male","female","male","female","male","male","female","female","male","female","male","female","male","female","male","female","male","female","male","female","male","female","male","female","male","female","male","female","male","male","female","female","male","female","male","female","male",null,"male","female","male","female","male","female","male","female","male","female","male",null,"male","female",null,"female","male","female","male","female","male","male","female","male","female","female","male","female","male","female","male","female","male","female","male","male","female","female","male","female","male","female","male","female","male","female","male","female","male","female","male","female","male","male","female","female","male","female","male","male","female","male","female","female","male","female","male","male","female","female","male","female","male","female","male","female","male","male","female","male","female","female","male","female","male","male","female"];var year=[2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2007,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2008,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009];var statistics={bill_length_mm:{count:342,mean:43.9219298246,std:5.4595837139,min:32.1,"25%":39.225,"50%":44.45,"75%":48.5,max:59.6},bill_depth_mm:{count:342,mean:17.1511695906,std:1.9747931568,min:13.1,"25%":15.6,"50%":17.3,"75%":18.7,max:21.5},flipper_length_mm:{count:342,mean:200.9152046784,std:14.0617136794,min:172,"25%":190,"50%":197,"75%":213,max:231},body_mass_g:{count:342,mean:4201.7543859649,std:801.9545356981,min:2700,"25%":3550,"50%":4050,"75%":4750,max:6300}};var penguins$1 = {values:values,columns:columns,labels:labels,island:island,sex:sex,year:year,statistics:statistics};

var PENGUINS_RAW = /*#__PURE__*/Object.freeze({
__proto__: null,
values: values,
columns: columns,
labels: labels,
island: island,
sex: sex,
year: year,
statistics: statistics,
'default': penguins$1
});

/**
 * Returns the Palmers Penguins dataset.
 * @param {Object} parameters
 * @param {false|"all"|"values"} [removeMissingValues = "all"] - Remove missing values, if "all" then remove all rows if a null is in any column. If "values", then remove rows only if only the respective row in values contains a null. If false, then no missing value gets removed.
 * @returns {{values: Array<Array>, labels: Array<String>, columns: Array<String>, sex: Array<String>, year: Array<Number>, island: Array<String>, statistics: Object}} - The final penguins dataset.
 */
function penguins({removeMissingValues = "all"} = {}) {
    let {values, columns, labels, sex, year, island, statistics} = PENGUINS_RAW;
    if (removeMissingValues == "all" || removeMissingValues == "values") {
        const N = values.length;
        let valid_indices = [];
        let result = true;

        for (let i = 0; i < N; ++i) {
            result = true;
            if (removeMissingValues == "all") {
                if (!year[i] || !sex[i] || !labels[i] || !island[i]) {
                    result = result && false;
                }
            }
            if (removeMissingValues == "all" || removeMissingValues == "values") {
                for (const value of values[i]) {
                    result = result && !Number.isNaN(value);
                }
            }   
            if (result == true) valid_indices.push(i);
        }

        values = filter(values, valid_indices);
        labels = filter(labels, valid_indices);
        sex = filter(sex, valid_indices);
        year = filter(year, valid_indices);
        island = filter(island, valid_indices);
    }
    // rollup removes columns from this function call
    // const statistics = getStatistics(values, PENGUINS_RAW.columns);
    return {values, columns, labels, sex, year, island, statistics};
}

function filter(values, indices) {
    return indices.map(i => values[i]);
}

const PENGUINS = penguins();

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
    return {values, labels, columns, statistics: getStatistics({values, columns})};
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
    const columns = Array.from({length: 28 * 28}, (_, i) => `pixel_at_${i % 28}_${Math.floor(i / 28)}`);
    return {values, labels, columns, statistics: getStatistics({values, columns})};
}

exports.BLOBS = BLOBS;
exports.IRIS = iris$1;
exports.MAMMOTH = mammoth$1;
exports.MOONS = MOONS;
exports.OECD = oecd$1;
exports.PENGUINS = PENGUINS;
exports.RAYS = RAYS;
exports.SPOTIFY = spotify$1;
exports.SSHAPE = SSHAPE;
exports.SWISSROLL = SWISSROLL;
exports.WAVES = WAVES;
exports.blobs = blobs;
exports.fetch_fmnist = fmnist;
exports.fetch_mnist = mnist;
exports.moons = moons;
exports.penguins = penguins;
exports.rays = rays;
exports.sshape = sshape;
exports.swissroll = swissroll;
exports.waves = waves;

Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=dataset.umd.js.map
