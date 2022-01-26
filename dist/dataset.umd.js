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

var names=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,832,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976,977,978,979,980,981,982,983,984,985,986,987,988,989,990,991,992,993,994,995,996,997,998,999,1000,1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1016,1017,1018,1019,1020,1021,1022,1023,1024,1025,1026,1027,1028,1029,1030,1031,1032,1033,1034,1035,1036,1037,1038,1039,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1058,1059,1060,1061,1062,1063,1064,1065,1066,1067,1068,1069,1070,1071,1072,1073,1074,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103,1104,1105,1106,1107,1108,1109,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1120,1121,1122,1123,1124,1125,1126,1127,1128,1129,1130,1131,1132,1133,1134,1135,1136,1137,1138,1139,1140,1141,1142,1143,1144,1145,1146,1147,1148,1149,1150,1151,1152,1153,1154,1155,1156,1157,1158,1159,1160,1161,1162,1163,1164,1165,1166,1167,1168,1169,1170,1171,1172,1173,1174,1175,1176,1177,1178,1179,1180,1181,1182,1183,1184,1185,1186,1187,1188,1189,1190,1191,1192,1193,1194,1195,1196,1197,1198,1199];var labels$1=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10];var columns$1=["x","y","z"];var values$1=[[2.6269241666665835,11.598770000000009,-46.81017083333346],[6.407924166666589,77.37877,-28.777170833333457],[6.583924166666577,76.51577,-29.43517083333345],[7.608924166666611,70.03777000000001,-31.887170833333457],[8.816924166666581,78.52277000000001,-28.400170833333455],[9.608924166666611,71.47977,-35.98317083333345],[11.661924166666608,5.232770000000009,-53.242170833333454],[11.706924166666568,-10.074229999999993,-53.61517083333345],[11.811924166666586,16.767770000000006,-52.79517083333346],[12.117924166666569,-5.334229999999991,-53.674170833333456],[12.718924166666568,3.06177000000001,-53.781170833333455],[13.100924166666573,79.89177000000001,-27.358170833333453],[13.900924166666584,-20.723229999999994,-50.54717083333345],[15.234924166666588,24.44877000000001,-52.90417083333345],[15.588924166666573,78.13277000000001,-27.200170833333452],[20.76892416666658,82.28377,-21.245170833333454],[21.362924166666573,5.118770000000005,-57.46917083333345],[22.76892416666658,-8.207229999999996,-58.360170833333456],[22.80492416666658,81.96777,-23.87717083333345],[22.86792416666657,35.72877000000001,-55.77117083333346],[23.220924166666578,10.962770000000006,-58.91117083333346],[25.374924166666574,72.10777,-41.232170833333456],[29.7079241666666,44.774770000000004,-56.67517083333345],[31.069924166666567,49.01777000000001,-57.34117083333345],[31.243924166666602,38.673770000000005,-58.497170833333456],[31.579924166666558,4.278770000000009,-60.412170833333455],[31.799924166666585,39.41877000000001,-59.25817083333345],[31.847924166666587,23.241770000000002,-61.55717083333346],[31.85892416666661,21.253770000000003,-60.476170833333455],[31.991924166666593,31.941770000000005,-60.68217083333346],[32.055924166666614,30.664770000000004,-60.138170833333454],[33.805924166666614,78.86777000000001,-34.98017083333345],[33.87992416666657,3.537770000000009,-59.720170833333455],[35.46392416666657,81.59577,-37.601170833333455],[35.69992416666656,82.84577,-33.824170833333454],[38.101924166666606,64.27477,-50.159170833333455],[40.39192416666657,2.787770000000009,-59.742170833333454],[40.41992416666659,17.977770000000007,-61.75517083333345],[41.75792416666661,84.63777,-21.634170833333457],[42.66892416666661,84.42177,-22.657170833333453],[43.56492416666657,8.103770000000004,-63.79117083333345],[44.662924166666585,77.46877,-45.455170833333455],[45.10992416666659,86.48277,-24.719170833333457],[45.25892416666659,65.79977000000001,-52.665170833333455],[45.59392416666657,5.654770000000006,-61.558170833333456],[46.04392416666661,76.33177,-46.16017083333345],[46.6069241666666,54.91277000000001,-59.34617083333345],[46.78092416666658,55.25777000000001,-59.36417083333345],[50.309924166666576,28.279770000000013,-62.556170833333454],[50.57892416666658,24.635770000000008,-62.851170833333455],[53.49692416666659,13.987770000000005,-63.839170833333455],[53.50692416666658,85.61577000000001,-30.582170833333457],[59.43292416666657,22.607770000000002,-64.32617083333345],[61.04892416666661,52.774770000000004,-59.726170833333455],[61.94492416666657,57.423770000000005,-56.29817083333346],[66.05292416666657,85.60577000000002,-23.437170833333454],[67.00192416666658,71.97277000000001,-44.90417083333345],[68.39892416666657,79.04877,-37.14317083333346],[70.75992416666656,54.66577000000001,-56.53317083333346],[71.7369241666666,39.337770000000006,-62.18217083333346],[72.66792416666658,82.31677,-13.515170833333457],[75.43492416666658,79.36077,-4.244170833333456],[75.56492416666657,83.82877,-8.160170833333453],[76.7539241666666,82.32777,16.121829166666544],[77.37792416666656,34.08077,-61.001170833333454],[77.41992416666659,79.64477000000001,-9.304170833333458],[77.74292416666657,83.49277000000002,-8.20917083333346],[77.82892416666658,79.65177000000001,-9.919170833333453],[77.90192416666656,75.66377000000001,-32.507170833333454],[77.9029241666666,77.33977,-33.97117083333345],[78.48292416666658,78.65577,5.799829166666541],[78.79992416666659,82.20677,4.303829166666546],[78.96392416666657,63.14277000000001,59.542829166666536],[79.27892416666657,83.86777000000002,9.255829166666544],[80.52392416666657,53.56177000000001,-55.50217083333345],[80.81492416666657,81.26977000000001,2.758829166666544],[80.88892416666658,79.94777,-5.044170833333453],[81.47292416666659,79.54377000000001,-18.163170833333453],[84.60092416666657,84.86777000000002,2.106829166666543],[84.83892416666657,38.93377000000001,-60.769170833333455],[84.91092416666658,65.10677000000001,5.575829166666551],[85.26692416666657,85.16577,1.9758291666665428],[86.59692416666661,72.06077,5.963829166666542],[86.6769241666666,63.908770000000004,54.558829166666555],[86.79792416666658,78.90777000000001,-16.142170833333452],[87.76292416666661,55.283770000000004,61.24082916666654],[88.90792416666659,55.21377000000001,-51.415170833333455],[89.3039241666666,61.83377,-3.8341708333334594],[89.96792416666659,73.52577000000001,-4.351170833333455],[90.18492416666658,38.96677000000001,-58.467170833333455],[90.20392416666658,73.58177,30.184829166666546],[90.86992416666658,71.06877,34.51582916666655],[90.90392416666657,52.48577,-51.55417083333346],[91.51692416666657,59.12777000000001,-3.3971708333334476],[91.81492416666657,57.51377000000001,-2.3501708333334506],[91.9939241666666,64.68577,7.370829166666539],[93.58192416666657,72.23977000000001,9.722829166666543],[94.16092416666658,44.60177,-56.165170833333455],[94.3329241666666,74.04077000000001,17.556829166666546],[95.4029241666666,70.97877000000001,-28.000170833333456],[95.79592416666657,74.45177000000001,-11.822170833333452],[96.81292416666656,66.81177000000001,7.237829166666543],[96.9579241666666,75.84777000000001,-2.7041708333334498],[97.36692416666659,67.46377000000001,-4.549170833333449],[97.50992416666656,57.96177,-3.913170833333453],[97.57392416666659,57.40377000000001,6.597829166666543],[98.61592416666656,43.14277000000001,-55.010170833333454],[98.71592416666658,53.22077,55.832829166666556],[99.85492416666659,69.42077,7.746829166666544],[100.94492416666657,71.98977000000001,-6.429170833333458],[101.3139241666666,48.85277000000001,-48.269170833333455],[101.36492416666658,68.83577000000001,0.047829166666545575],[102.41992416666659,56.178770000000014,-4.191170833333459],[102.98292416666658,69.07577,-11.186170833333456],[103.32492416666656,70.51077000000001,-1.4111708333334576],[103.62992416666657,77.48177000000001,1.4868291666665385],[104.35492416666659,65.82777,-1.5441708333334532],[104.84792416666659,57.50277000000001,44.37682916666654],[104.85992416666659,66.98077,7.461829166666547],[105.5419241666666,42.687770000000015,-50.45917083333346],[106.43092416666661,68.63277000000001,2.6498291666665494],[106.67292416666658,68.59277,3.1178291666665388],[107.37492416666657,67.80177,-14.770170833333452],[107.44992416666656,61.27577000000001,33.43682916666654],[108.2539241666666,62.682770000000005,6.353829166666543],[108.62992416666657,63.65777000000001,5.5518291666665505],[108.68092416666661,61.416770000000014,8.064829166666541],[108.8739241666666,60.703770000000006,-26.577170833333454],[108.95492416666656,59.072770000000006,-27.309170833333454],[109.17792416666657,69.76377000000001,1.3958291666665446],[109.9939241666666,49.774770000000004,46.81982916666655],[110.43492416666658,59.688770000000005,-24.87717083333345],[111.56192416666659,47.02677000000001,-37.397170833333455],[111.61992416666658,66.57877,-2.4151708333334483],[112.4219241666666,66.12777000000001,-4.919170833333453],[114.16292416666658,43.684770000000015,-37.66717083333346],[117.35592416666657,61.75377,5.467829166666547],[117.4939241666666,61.72177000000001,6.032829166666545],[122.21592416666658,69.33077,0.38182916666654876],[125.53392416666657,58.62377000000001,0.43082916666654114],[125.65192416666656,57.27377000000001,4.2638291666665395],[129.98992416666658,42.68677000000001,45.02882916666654],[132.57192416666658,43.05877000000001,49.04082916666654],[133.36592416666656,26.16277000000001,66.51482916666654],[134.09592416666658,35.00477000000001,40.684829166666546],[134.5999241666666,43.50677,48.53982916666655],[134.94992416666656,37.06877,42.85282916666655],[136.80992416666658,35.47677,31.806829166666546],[140.0849241666666,19.615770000000012,66.47182916666654],[-102.32507583333341,-212.90623,22.782829166666545],[-101.51407583333341,-214.99723,37.48182916666654],[-97.9660758333334,-216.17422999999997,5.384829166666549],[-97.50007583333343,-209.30723,33.49382916666654],[-96.76007583333342,-208.37223,21.877829166666544],[-96.05207583333342,-213.62723,35.08382916666655],[-93.16307583333341,-209.04023,31.916829166666545],[-92.6070758333334,-210.57823000000002,12.39182916666654],[-92.40707583333341,-210.52823,14.120829166666539],[-91.25707583333343,-208.86822999999998,14.696829166666546],[-88.99307583333342,-205.50723,30.53182916666654],[-87.13907583333344,-186.79823,23.961829166666547],[-84.3470758333334,-164.58923,20.207829166666542],[-84.07407583333344,-198.13022999999998,14.913829166666545],[-83.75407583333339,-204.79622999999998,25.66182916666655],[-83.2220758333334,-216.17822999999999,48.297829166666546],[-83.07007583333342,-164.85923,23.73682916666654],[-82.9820758333334,-184.89123,17.226829166666548],[-82.3710758333334,-197.13822999999996,20.23982916666654],[-82.19007583333342,-183.82022999999998,37.139829166666544],[-81.99207583333339,-160.93523,36.818829166666546],[-81.35307583333343,-189.46423,38.11282916666654],[-80.41607583333342,-196.22823,39.651829166666545],[-79.97907583333341,-215.34823,43.90082916666654],[-79.53207583333341,-200.68322999999998,14.904829166666545],[-79.18907583333339,-177.22422999999998,36.20682916666655],[-79.01907583333343,-194.91922999999997,25.258829166666544],[-78.64907583333343,-213.73122999999998,45.04082916666654],[-78.28207583333341,-172.51423,13.514829166666544],[-77.82507583333341,-160.17423,24.934829166666546],[-77.38407583333344,-188.25723,37.49182916666655],[-76.9580758333334,-169.49322999999998,39.60482916666655],[-76.48707583333339,-167.09823,24.928829166666546],[-75.9890758333334,-206.34823,8.367829166666539],[-75.22407583333342,-161.67622999999998,12.561829166666541],[-75.1840758333334,-194.29323,19.45982916666655],[-75.1020758333334,-207.27323,7.77282916666654],[-74.93807583333341,-204.56923,9.023829166666545],[-74.77907583333342,-187.62523,14.261829166666544],[-74.1670758333334,-185.82423,23.05882916666654],[-74.03607583333343,-170.95022999999998,13.073829166666542],[-73.30607583333341,-157.77423,25.080829166666547],[-72.6500758333334,-131.53823,27.38282916666654],[-72.44407583333339,-182.54023,18.606829166666543],[-72.4000758333334,-153.45323,39.96082916666654],[-72.3710758333334,-159.22123,39.67482916666654],[-72.03607583333343,-157.38522999999998,37.82682916666654],[-71.57007583333342,-152.48622999999998,24.886829166666544],[-71.32407583333344,-155.82823,24.90382916666654],[-71.2630758333334,-160.96523,35.57582916666655],[-70.84107583333343,-143.87623,28.199829166666547],[-70.48807583333343,-125.15623,25.883829166666544],[-68.12407583333339,-133.40023,26.77282916666654],[-66.94407583333339,-179.90523000000002,34.288829166666545],[-62.53807583333344,-134.14423,40.21682916666654],[-35.59607583333343,-213.49622999999997,-20.969170833333457],[-33.51607583333339,-214.97823,-19.793170833333456],[-28.895075833333408,-210.14623,-23.187170833333454],[-27.47307583333344,-129.11423,-33.38017083333345],[-27.12907583333339,-167.83523,-31.458170833333455],[-26.5420758333334,-213.01322999999996,-38.184170833333454],[-26.13407583333344,-212.26722999999998,-8.455170833333455],[-25.913075833333437,-208.64722999999998,-38.607170833333456],[-25.133075833333407,-211.48023,-13.499170833333451],[-24.224075833333416,-119.74722999999999,-36.010170833333454],[-23.299075833333404,-169.57522999999998,-24.412170833333455],[-22.986075833333416,-212.52823,-14.279170833333453],[-22.583075833333396,-165.45522999999997,-24.939170833333456],[-22.392075833333422,-160.88723,-12.741170833333456],[-22.188075833333414,-208.57723,-20.642170833333452],[-22.174075833333404,-207.74523,-38.437170833333454],[-21.416075833333423,-184.53823,-23.427170833333456],[-21.389075833333436,-129.27523,-35.955170833333455],[-20.750075833333426,-183.10523,-32.915170833333455],[-19.89607583333344,-152.67423,-24.675170833333453],[-19.166075833333423,-172.83923,-21.472170833333458],[-18.50507583333342,-143.65823,-25.88017083333345],[-17.932075833333386,-164.00023,-23.955170833333455],[-17.66507583333339,-214.64623,-47.436170833333456],[-16.2150758333334,-200.33022999999997,-27.309170833333454],[-15.49707583333344,-171.31023,-37.01517083333346],[-14.602075833333402,-182.31322999999998,-19.460170833333457],[-14.197075833333429,-171.86122999999998,-26.143170833333457],[-14.192075833333433,-192.25223,-29.334170833333452],[-13.932075833333386,-178.15022999999997,-13.484170833333458],[-13.920075833333442,-180.38022999999998,-12.212170833333452],[-13.73107583333342,-181.86723,-36.34717083333346],[-13.70507583333341,-162.32423,-41.56617083333345],[-13.08207583333342,-165.01623,-14.714170833333455],[-12.965075833333401,-190.42422999999997,-28.762170833333457],[-12.581075833333387,-202.13022999999998,-44.681170833333454],[-12.307075833333386,-165.46722999999997,-34.793170833333456],[-12.258075833333407,-193.61023,-12.355170833333453],[-11.966075833333434,-164.06623,-36.321170833333454],[-10.823075833333405,-187.43622999999997,-28.922170833333453],[-10.670075833333442,-171.06923,-37.817170833333456],[-10.601075833333425,-191.09123,-31.006170833333456],[-10.487075833333392,-209.65823,-5.697170833333459],[-10.178075833333423,-198.52022999999997,-11.613170833333456],[-9.635075833333417,-203.97023000000002,-40.60017083333346],[-9.426075833333414,-204.62423,-45.589170833333455],[-8.98507583333344,-175.26223,-22.858170833333453],[-8.406075833333432,-177.55023,-16.859170833333458],[-7.930075833333433,-188.86122999999998,-16.498170833333454],[-7.627075833333436,-184.91023,-11.892170833333452],[-6.357075833333397,-178.28523,-33.760170833333454],[-5.245075833333431,-196.89323000000002,-13.678170833333454],[-3.965075833333401,-198.36923000000002,-13.579170833333457],[-285.4280758333334,55.816770000000005,-41.540170833333455],[-285.20607583333344,53.283770000000004,-70.32017083333345],[-284.56207583333344,52.789770000000004,-50.10017083333345],[-283.8150758333334,48.37777000000001,66.17282916666653],[-282.8180758333334,39.429770000000005,-70.69017083333345],[-282.6950758333334,47.39177000000001,-77.46817083333346],[-280.3730758333334,39.36477000000001,-69.32917083333345],[-279.6550758333334,59.661770000000004,-44.52917083333345],[-277.3040758333334,47.97777000000001,-76.82717083333345],[-276.7870758333334,50.46677000000001,-72.69717083333346],[-276.70407583333343,41.62377000000001,78.67882916666653],[-276.3390758333334,30.227770000000007,-76.82317083333345],[-274.57907583333343,28.511770000000013,-90.96117083333345],[-269.7720758333334,22.108770000000007,-93.59517083333346],[-264.87907583333345,7.718770000000006,89.90082916666654],[-264.7190758333334,18.733770000000007,-94.68117083333345],[-264.3680758333334,27.322770000000006,-83.43317083333345],[-261.98307583333343,16.99477000000001,80.27782916666655],[-261.17707583333345,3.4517700000000104,-92.84617083333345],[-260.9100758333334,23.393770000000004,-90.76017083333346],[-258.0740758333334,8.211770000000008,95.08482916666654],[-257.5630758333334,4.028770000000009,-96.04017083333346],[-257.1950758333334,-1.6172299999999922,-90.03217083333345],[-253.0390758333334,12.581770000000006,-93.46917083333345],[-251.71607583333343,-1.8582299999999918,-95.70317083333346],[-249.9170758333334,9.086770000000008,-93.44617083333345],[-245.05807583333342,5.209770000000006,91.98882916666653],[-243.9600758333334,-3.4602299999999957,-94.24017083333345],[-243.1550758333334,2.8967700000000107,84.26882916666654],[-224.06707583333343,-15.932229999999993,70.80182916666655],[-223.03407583333342,-18.22422999999999,-84.06517083333345],[-222.23607583333342,-11.318229999999993,85.43882916666655],[-219.24307583333342,-11.534229999999994,75.00582916666656],[-218.7470758333334,-26.147229999999993,77.46982916666656],[-218.01207583333343,-25.232229999999994,-79.42317083333346],[-214.4670758333334,-12.48422999999999,76.42282916666653],[-212.84407583333342,-17.885229999999993,-73.90017083333345],[-211.90507583333343,-22.447229999999994,80.47282916666654],[-206.74407583333343,-22.713229999999992,-51.220170833333455],[-206.07707583333342,-23.496229999999994,-50.35517083333345],[-205.35107583333343,-23.242229999999992,58.72382916666655],[-204.4120758333334,-32.284229999999994,-59.988170833333456],[-199.43807583333341,-31.781229999999994,-52.77917083333345],[-192.61107583333342,-14.870229999999992,46.44182916666655],[-189.9420758333334,-13.393229999999992,-36.03017083333346],[-189.75607583333343,-12.977229999999992,-39.58517083333346],[-188.78407583333342,-22.411229999999993,45.83882916666654],[-185.2460758333334,-15.862229999999993,-46.30417083333346],[-183.05807583333342,-12.125229999999995,-24.976170833333455],[-181.7890758333334,-11.74922999999999,53.29382916666654],[-179.5440758333334,-4.023229999999991,-25.628170833333456],[-178.6320758333334,-3.8322299999999956,-27.567170833333456],[-176.13007583333342,-13.459229999999991,-38.915170833333455],[-175.92107583333342,-0.4392299999999949,33.34582916666655],[-175.5390758333334,-12.62722999999999,-38.03517083333345],[-173.55207583333342,-19.492229999999992,-25.727170833333453],[-170.61107583333342,13.50677000000001,-4.915170833333448],[-168.2040758333334,13.907770000000006,-15.546170833333456],[-168.0560758333334,-5.180229999999995,-11.564170833333456],[-165.39107583333342,12.609770000000005,28.734829166666543],[-164.0390758333334,24.000770000000003,11.249829166666544],[-161.5440758333334,5.63477000000001,10.806829166666546],[-161.2590758333334,21.367770000000007,29.81982916666655],[-161.2040758333334,9.291770000000007,5.080829166666547],[-159.50007583333343,11.569770000000005,3.6798291666665506],[-159.2270758333334,25.962770000000006,-16.234170833333458],[-158.58107583333341,23.10377000000001,8.869829166666548],[-157.99407583333343,4.030770000000011,16.06482916666654],[-154.98207583333343,16.843770000000006,7.214829166666547],[-154.09407583333342,3.9927700000000073,20.01082916666654],[-153.1690758333334,18.639770000000006,29.451829166666542],[-152.01607583333342,14.764770000000006,-1.2531708333334564],[-151.7710758333334,11.06477000000001,15.709829166666552],[-59.912075833333404,23.892770000000013,48.43682916666654],[-50.63407583333344,35.91577000000001,46.61882916666654],[-49.5250758333334,32.98777000000001,38.93382916666654],[-49.3400758333334,32.22477000000001,44.663829166666545],[-49.224075833333416,33.59577,38.71682916666654],[-47.575075833333415,42.66277000000001,38.22982916666655],[-47.37907583333339,37.89377,39.163829166666545],[-46.752075833333436,43.29677000000001,20.57582916666655],[-45.70507583333341,65.73677,30.705829166666547],[-45.61207583333339,55.310770000000005,34.54382916666654],[-45.09807583333344,35.25977,20.202829166666547],[-44.03107583333343,79.32877,30.40682916666654],[-43.26207583333343,54.03777000000001,36.50782916666654],[-42.65107583333344,52.23877,55.49582916666654],[-42.398075833333394,67.29777000000001,48.47382916666655],[-41.5010758333334,57.63377000000001,19.401829166666545],[-41.452075833333424,82.21677000000001,27.446829166666546],[-41.182075833333386,39.86477000000001,21.115829166666543],[-40.66807583333343,15.908770000000004,42.24082916666654],[-40.4530758333334,66.17977,49.07182916666655],[-39.98407583333341,58.58077,18.53082916666655],[-39.210075833333406,39.521770000000004,22.698829166666542],[-38.90207583333341,36.86777000000001,24.374829166666544],[-38.65107583333344,15.943770000000008,44.07982916666654],[-38.1070758333334,66.61877000000001,8.148829166666545],[-37.79107583333342,29.944770000000005,27.839829166666547],[-36.58407583333343,30.173770000000005,48.42182916666654],[-35.96707583333341,37.99877000000001,41.19882916666654],[-35.84807583333344,80.75377,40.23782916666654],[-35.74607583333341,56.328770000000006,34.08582916666654],[-35.365075833333435,32.69877000000001,44.94582916666654],[-34.861075833333416,59.76277,9.53782916666654],[-33.674075833333404,40.53277000000001,45.35182916666655],[-33.53607583333343,46.77577000000001,38.84082916666655],[-33.440075833333424,89.75377000000002,27.526829166666545],[-33.337075833333415,65.02677000000001,17.538829166666545],[-33.16307583333344,49.30277000000001,18.23982916666654],[-32.60407583333341,56.798770000000005,11.870829166666539],[-32.46907583333342,82.47877000000001,25.800829166666546],[-31.38007583333342,43.792770000000004,33.32682916666654],[-30.601075833333425,-5.0452299999999894,37.645829166666545],[-29.738075833333426,46.58877000000001,31.78782916666654],[-29.726075833333425,46.432770000000005,31.925829166666546],[-29.48307583333343,42.27677000000001,44.02482916666655],[-29.154075833333422,83.34877000000002,24.81982916666655],[-26.321075833333396,80.55677000000001,26.791829166666545],[-25.800075833333437,59.33877000000001,14.299829166666541],[-25.749075833333393,57.072770000000006,17.67982916666655],[-25.628075833333412,73.61977,41.15582916666655],[-24.68907583333339,23.849770000000007,56.11782916666655],[-24.65707583333341,67.58277000000001,37.04582916666655],[-24.258075833333407,59.38277000000001,34.94982916666655],[-24.01607583333339,57.02877000000001,29.15582916666655],[-23.99507583333343,25.92477000000001,56.65282916666655],[-22.534075833333418,41.173770000000005,34.46782916666655],[-22.392075833333422,15.983770000000007,42.35282916666655],[-21.411075833333427,59.58877000000001,49.624829166666544],[-20.411075833333427,87.57677,34.49282916666654],[-19.710075833333406,86.29877,25.29682916666654],[-18.550075833333437,67.42177000000001,14.711829166666547],[-18.123075833333417,60.047770000000014,30.654829166666545],[-17.079075833333434,30.57477,65.53082916666654],[-15.949075833333438,60.533770000000004,7.690829166666546],[-15.340075833333401,59.87977000000001,33.523829166666545],[-13.52807583333339,48.66577000000001,38.18982916666654],[-13.29007583333339,38.36977,74.34582916666653],[-13.246075833333407,40.453770000000006,45.58882916666654],[-12.98107583333342,16.239770000000007,50.77282916666654],[-12.74507583333343,38.86477000000001,46.16282916666654],[-12.38407583333344,-30.338229999999992,44.999829166666544],[-12.005075833333422,36.01377000000001,46.48982916666654],[-10.41507583333339,65.39377,28.27482916666655],[-8.637075833333427,43.038770000000014,66.34082916666654],[-8.476075833333425,0.15977000000000885,50.389829166666544],[-8.418075833333432,8.453770000000006,50.416829166666545],[-7.870075833333431,-20.603229999999993,48.17682916666655],[-5.573075833333405,51.74377000000001,44.273829166666545],[-4.4080758333334416,29.82177,50.681829166666546],[-0.7230758333334393,39.697770000000006,52.98582916666655],[-0.2710758333334411,30.04077000000001,53.10882916666654],[-0.034075833333417904,21.593770000000006,55.21082916666654],[0.18492416666657618,-3.918229999999994,54.54782916666653],[0.746924166666588,-17.217229999999994,52.89782916666654],[1.6929241666666144,52.059770000000015,49.50682916666655],[3.6059241666665685,-0.8502299999999892,56.13082916666656],[4.059924166666576,-29.25822999999999,50.32982916666654],[5.436924166666586,-32.37022999999999,49.09782916666654],[7.708924166666577,-32.15122999999999,49.84182916666654],[10.800924166666562,46.89277000000001,54.808829166666555],[11.378924166666593,24.46977000000001,59.23982916666654],[13.531924166666613,44.58277000000001,56.49982916666656],[18.384924166666565,52.28177000000001,53.172829166666546],[21.204924166666558,17.163770000000007,64.06082916666654],[22.475924166666573,6.608770000000007,64.16082916666656],[30.343924166666568,34.51177000000001,65.13982916666654],[31.8569241666666,23.16577000000001,66.99182916666655],[36.908924166666566,43.94877000000001,64.19982916666655],[38.38792416666661,25.426770000000005,68.20682916666655],[38.73492416666659,25.34777000000001,68.09182916666654],[39.31492416666657,41.93677000000001,65.39082916666655],[46.09192416666656,53.38877000000001,66.00982916666655],[47.73892416666661,32.31777000000001,71.48982916666654],[48.01292416666661,30.498770000000007,71.76482916666654],[48.76692416666657,61.215770000000006,62.35282916666654],[49.19692416666658,62.06877,62.59082916666654],[50.26992416666661,19.389770000000013,72.49082916666654],[58.087924166666596,51.63677000000001,66.57482916666655],[64.29292416666658,32.411770000000004,72.84682916666654],[68.01392416666658,55.560770000000005,66.64782916666655],[68.94992416666656,47.36177000000001,70.17582916666655],[-46.53107583333343,84.72277000000001,1.8528291666665524],[-45.73107583333342,94.76477000000001,1.2058291666665468],[-44.464075833333425,84.62377000000002,1.3418291666665425],[-35.62207583333344,88.95677000000002,4.562829166666546],[-24.333075833333396,81.08577000000001,5.04582916666655],[-24.256075833333398,59.048770000000005,-5.958170833333455],[-23.039075833333413,62.19877000000001,-7.517170833333452],[-22.53307583333344,78.06877,1.1948291666665511],[-22.05607583333341,60.23377000000001,-4.191170833333459],[-21.5900758333334,86.50877000000001,1.238829166666548],[-15.84807583333344,65.80577000000001,-4.6441708333334475],[-15.821075833333396,66.35877,-6.839170833333455],[-15.33407583333343,59.26877,0.02282916666653989],[-14.538075833333437,60.20277,-0.619170833333456],[-14.529075833333422,73.23777000000001,-10.072170833333452],[-13.779075833333422,89.89477000000001,4.231829166666543],[-12.126075833333402,70.18677000000001,20.946829166666546],[-11.325075833333415,75.82177,14.860829166666548],[-11.274075833333427,82.13877000000001,0.8908291666665491],[-10.57007583333342,82.40577,6.5448291666665455],[-10.49507583333343,67.99577000000001,-20.223170833333455],[-7.010075833333417,99.27177000000002,2.1328291666665393],[-6.848075833333439,110.32877,4.307829166666551],[-6.822075833333429,72.71677000000001,-21.222170833333458],[-5.5500758333334375,68.22977,-28.504170833333454],[-5.230075833333387,72.94577000000001,9.589829166666547],[-4.930075833333433,62.337770000000006,2.8018291666665505],[-4.9250758333334375,75.87877,-15.849170833333453],[-4.517075833333422,76.29077000000001,-14.442170833333456],[-3.8480758333334393,66.49877000000001,8.38582916666654],[-3.6300758333334215,76.05177,12.869829166666548],[-3.524075833333427,74.61877000000001,-22.988170833333456],[-3.298075833333428,69.89777000000001,32.639829166666544],[-1.992075833333388,74.79377000000001,24.419829166666545],[-1.9600758333334056,71.14977,-24.972170833333458],[-1.9270758333333902,83.23677000000002,5.172829166666546],[1.0369241666666085,75.59777000000001,-3.139170833333452],[1.5589241666665998,80.43477000000001,22.726829166666548],[2.6789241666666044,78.16477,9.580829166666547],[3.045924166666566,91.72677,6.350829166666543],[3.0929241666665916,82.19677,7.126829166666539],[3.152924166666594,93.08277,2.3488291666665475],[4.121924166666588,77.44777,-4.048170833333458],[4.426924166666595,87.13977000000001,1.373829166666539],[4.428924166666604,74.44477,9.356829166666543],[4.472924166666587,82.69277000000001,27.03082916666655],[4.4779241666665826,93.09877000000002,6.02582916666654],[5.698924166666586,84.53177000000001,1.860829166666548],[6.351924166666606,84.61377,-5.203170833333459],[7.420924166666566,80.93077000000001,-2.693170833333454],[7.70992416666661,101.80377,5.148829166666545],[7.781924166666613,79.42377,14.26682916666654],[9.15192416666656,74.78177000000001,8.076829166666542],[10.194924166666567,66.92677,1.9558291666665468],[10.616924166666593,99.80677000000001,3.4328291666665507],[11.756924166666579,106.19877000000001,3.755829166666544],[13.045924166666566,76.22077,35.404829166666545],[13.521924166666565,84.64077000000002,-1.8501708333334506],[15.188924166666595,95.52877,4.007829166666539],[15.513924166666584,83.74377,-3.541170833333453],[16.53692416666661,97.44077,4.032829166666545],[16.92792416666657,81.42377,13.990829166666543],[20.833924166666577,103.96177000000002,4.6898291666665415],[21.259924166666565,104.72677,4.505829166666544],[22.36792416666657,97.96777000000002,3.90082916666654],[23.722924166666587,86.34877000000002,-5.723170833333455],[24.15392416666657,89.96077000000001,3.8258291666665514],[24.682924166666567,72.57177,45.541829166666545],[24.934924166666576,102.12477,4.053829166666546],[25.97192416666661,83.89177,-12.942170833333456],[26.748924166666598,81.38777,-4.665170833333448],[28.138924166666584,85.80077000000001,-7.280170833333457],[28.142924166666603,84.71877000000002,12.959829166666552],[28.19392416666659,64.41477,53.00082916666655],[28.470924166666578,87.83777000000002,17.86782916666654],[29.563924166666595,86.38377000000001,3.41182916666655],[29.906924166666613,86.87577,-7.682170833333458],[30.069924166666567,86.42177,-8.732170833333456],[31.08492416666661,89.82777,20.348829166666548],[32.88192416666658,87.11777000000002,28.791829166666545],[33.323924166666586,82.77277000000001,-7.416170833333453],[33.76692416666657,88.86677000000002,28.51582916666655],[33.823924166666586,80.01277,6.151829166666545],[33.90392416666657,86.55677000000001,-4.929170833333458],[34.81992416666657,79.05177,7.7878291666665405],[35.71392416666657,74.24677000000001,48.28682916666655],[36.27692416666656,95.45777,2.2578291666665393],[36.684924166666576,79.04977000000001,-3.8231708333334495],[36.898924166666575,84.95577000000002,8.942829166666542],[37.20892416666658,80.89777000000001,12.41882916666654],[38.059924166666576,91.18877000000002,1.208829166666547],[38.152924166666594,75.37377000000001,49.82082916666654],[38.726924166666606,86.78777000000001,11.321829166666546],[38.747924166666564,84.03377000000002,-6.424170833333449],[38.94392416666659,65.51877,54.641829166666554],[40.95992416666661,69.99677000000001,4.181829166666546],[42.36492416666658,73.28877000000001,-0.7721708333334476],[43.698924166666586,82.76877,-9.491170833333456],[44.09092416666658,69.21677000000001,1.8348291666665517],[44.0999241666666,99.30477,1.4768291666665476],[44.124924166666574,83.73377,32.32182916666655],[44.61692416666659,85.11177000000002,-8.790170833333448],[45.70192416666657,77.39377,50.84082916666655],[46.16192416666661,77.60877,46.413829166666545],[46.327924166666605,70.00377,0.4698291666665426],[46.497924166666564,82.45177000000001,-8.34317083333346],[46.71192416666656,85.19877000000001,10.003829166666549],[48.761924166666574,85.47877000000001,10.994829166666548],[50.34092416666658,79.91577000000001,-6.489170833333461],[51.39392416666658,71.28077,1.373829166666539],[52.874924166666574,69.00977,0.6168291666665482],[53.952924166666605,83.27577000000001,37.80182916666655],[55.10492416666659,85.91877000000001,3.509829166666549],[55.509924166666565,81.58277000000001,41.47482916666655],[55.73392416666661,85.71877000000002,-6.5871708333334595],[56.00492416666657,72.40877,55.73182916666656],[56.009924166666565,86.43877000000002,-11.936170833333456],[56.303924166666604,94.39577000000001,2.6488291666665447],[57.148924166666575,73.06677,56.48682916666655],[57.601924166666606,90.86577000000001,1.2128291666665518],[58.087924166666596,98.53177000000001,1.8778291666665439],[58.15392416666657,83.87377000000002,-11.161170833333458],[59.08892416666657,71.28977,6.5518291666665505],[59.86592416666656,84.88577,-12.424170833333456],[60.295924166666566,73.81377,-3.774170833333457],[60.59092416666658,84.74877000000002,-0.6541708333334526],[61.19692416666658,85.49277000000002,-12.415170833333455],[61.66592416666657,85.80577000000001,1.7498291666665438],[62.01892416666658,87.05777000000002,-14.312170833333454],[62.45492416666656,83.27477,33.431829166666546],[63.134924166666565,82.47477,14.079829166666542],[63.74092416666656,84.76277,7.679829166666551],[63.89192416666657,85.92577000000001,7.39482916666654],[65.56792416666661,85.62377000000002,3.2178291666665473],[66.08392416666658,95.62277000000002,2.712829166666552],[66.78592416666658,83.16477000000002,8.856829166666543],[67.03692416666661,86.33277,10.776829166666545],[67.25992416666656,78.91477,7.649829166666549],[68.41792416666658,76.58677,-3.4051708333334574],[68.66392416666656,82.15677000000001,5.238829166666548],[69.81292416666656,83.67777,-7.0331708333334575],[71.86292416666657,81.51277,25.06782916666654],[75.54592416666657,76.62377000000001,39.145829166666545],[-67.69507583333342,-10.275229999999993,-0.5351708333334528],[-67.59207583333341,2.868770000000005,39.09682916666655],[-66.88207583333343,-19.152229999999992,-1.9191708333334532],[-66.77607583333344,-17.64822999999999,6.942829166666542],[-66.75207583333344,-118.49023,32.72282916666654],[-66.73307583333343,6.754770000000008,-48.235170833333456],[-66.59407583333342,-15.332229999999992,-1.791170833333453],[-66.4840758333334,6.074770000000008,-47.34117083333345],[-65.8470758333334,-4.54822999999999,50.88182916666655],[-64.14507583333341,-18.815229999999993,51.20182916666654],[-63.8690758333334,-19.133229999999994,-4.554170833333458],[-63.523075833333394,-28.79422999999999,2.7578291666665393],[-63.444075833333386,-20.711229999999993,8.119829166666548],[-63.15207583333341,0.014770000000005723,2.701829166666542],[-60.41807583333343,-4.30422999999999,12.53082916666655],[-59.7150758333334,5.987770000000005,46.01082916666654],[-59.69207583333343,-10.931229999999992,-7.59417083333345],[-59.31207583333344,-15.572229999999994,-4.5731708333334495],[-59.18707583333344,-12.897229999999993,12.963829166666542],[-58.974075833333416,-25.891229999999993,-40.32317083333346],[-58.78107583333343,-1.9062299999999937,9.68582916666655],[-58.72307583333344,10.133770000000005,42.44682916666655],[-57.934075833333395,-8.577229999999993,10.581829166666552],[-57.64607583333344,-11.75522999999999,-52.35517083333345],[-57.587075833333415,-99.32623,49.73582916666655],[-57.33007583333341,7.594770000000011,-44.00617083333346],[-56.958075833333396,16.069770000000005,-5.45717083333345],[-56.03207583333341,-23.960229999999992,-0.48217083333345556],[-55.65607583333343,-6.806229999999992,14.401829166666545],[-55.139075833333436,11.813770000000005,-39.309170833333454],[-55.02407583333343,10.219770000000011,46.529829166666545],[-54.13307583333341,2.986770000000007,58.496829166666544],[-53.65907583333342,-86.23822999999999,49.92682916666655],[-53.24607583333341,-37.41422999999999,3.4908291666665434],[-52.27707583333341,-4.475229999999989,53.94682916666655],[-52.1500758333334,4.9547700000000106,36.48882916666655],[-51.53107583333343,-106.10022999999998,46.18082916666654],[-50.186075833333405,-24.681229999999992,16.77482916666655],[-50.1020758333334,-27.266229999999993,5.404829166666545],[-49.78407583333342,-19.98522999999999,-12.782170833333453],[-49.30307583333342,-4.8662299999999945,-31.552170833333456],[-49.25307583333341,-8.759229999999995,-52.934170833333454],[-47.704075833333434,-2.537229999999994,35.69882916666654],[-47.48107583333342,-73.11322999999999,40.99382916666654],[-47.45907583333343,-8.320229999999995,38.37882916666655],[-47.30207583333339,-7.662229999999994,-17.175170833333453],[-47.18307583333342,-35.52022999999999,-49.44417083333346],[-46.80507583333343,-90.81522999999999,30.121829166666544],[-46.54307583333343,-25.774229999999992,43.71682916666654],[-46.33407583333343,14.309770000000007,50.21982916666654],[-45.597075833333406,-20.347229999999993,-34.34917083333345],[-45.51207583333343,-38.49222999999999,-0.49917083333345147],[-45.49607583333341,-32.82122999999999,6.705829166666547],[-44.958075833333396,-30.89222999999999,-4.191170833333459],[-42.83607583333344,4.980770000000007,26.181829166666546],[-41.45707583333342,-89.64222999999998,-27.284170833333455],[-41.24707583333344,-8.753229999999995,-35.001170833333454],[-41.16907583333341,12.882770000000008,26.413829166666545],[-41.14907583333343,-41.969229999999996,-32.84117083333346],[-40.61707583333339,-86.27623,-31.372170833333456],[-40.579075833333434,-8.040229999999994,48.53082916666655],[-39.89107583333339,7.514770000000006,-23.370170833333454],[-38.71907583333342,-38.89622999999999,15.303829166666546],[-38.59207583333341,-101.74123,44.84282916666655],[-38.30607583333341,-43.29422999999999,-1.7791708333334526],[-38.2510758333334,-82.25823,-48.76417083333345],[-38.069075833333386,-35.228229999999996,5.517829166666544],[-37.946075833333396,-69.53322999999999,-28.086170833333455],[-37.8520758333334,-85.91323,-38.430170833333456],[-37.00907583333344,-94.79722999999998,-36.79117083333345],[-36.03107583333343,-20.367229999999992,30.452829166666547],[-35.57207583333343,-28.59622999999999,-22.339170833333455],[-35.43307583333342,-50.98922999999999,-44.007170833333454],[-35.299075833333404,21.59777000000001,-45.141170833333454],[-35.05007583333344,-66.12022999999999,-27.622170833333456],[-34.65607583333343,-55.38222999999999,-41.32017083333346],[-33.6380758333334,-62.299229999999994,-52.92917083333346],[-32.96907583333342,-58.69122999999999,-31.279170833333453],[-32.53107583333343,-6.967229999999994,37.99282916666654],[-32.023075833333394,-108.03022999999999,-29.965170833333453],[-31.8520758333334,-31.728229999999993,-24.533170833333457],[-30.406075833333432,-105.05122999999999,-33.391170833333454],[-29.38007583333342,24.027770000000004,-38.25617083333346],[-28.402075833333413,18.181770000000007,-35.595170833333455],[-28.298075833333428,-69.28322999999999,-28.833170833333455],[-27.374075833333393,-38.78022999999999,24.088829166666542],[-26.93507583333343,-84.82122999999999,-43.54117083333345],[-26.648075833333394,-52.098229999999994,-0.3041708333334583],[-26.478075833333435,-92.50122999999999,-28.219170833333457],[-26.022075833333417,-88.36222999999998,-39.732170833333456],[-25.89107583333339,-53.54222999999999,6.085829166666542],[-25.786075833333427,-92.98423,-28.00217083333345],[-25.002075833333436,-41.69022999999999,18.87982916666654],[-24.78307583333344,-30.933229999999995,-31.574170833333454],[-24.601075833333425,-41.77522999999999,24.568829166666546],[-24.367075833333388,-23.129229999999993,-29.30417083333345],[-23.40807583333344,25.55277000000001,-35.781170833333455],[-23.339075833333425,-41.625229999999995,-10.551170833333451],[-22.488075833333426,-14.818229999999993,-35.613170833333456],[-22.472075833333406,9.711770000000008,-36.610170833333456],[-22.250075833333426,0.027770000000010953,-33.51817083333346],[-20.458075833333396,-44.009229999999995,17.30482916666655],[-20.166075833333423,-33.41622999999999,-27.677170833333456],[-20.026075833333437,-86.54522999999999,-33.88617083333345],[-18.605075833333387,-40.18222999999999,33.06082916666655],[-18.577075833333424,-36.811229999999995,31.431829166666546],[-18.253075833333412,-50.875229999999995,-6.184170833333454],[-17.21107583333344,-34.598229999999994,-32.650170833333455],[-16.496075833333407,-108.09123,-33.65517083333346],[-15.99707583333344,-90.00122999999999,-45.272170833333455],[-15.7920758333334,-42.65122999999999,29.14782916666654],[-15.685075833333428,-21.20922999999999,-41.376170833333454],[-15.625075833333426,-56.31922999999999,5.425829166666546],[-15.20507583333341,-45.92822999999999,-12.884170833333457],[-14.666075833333423,-9.079229999999995,-42.59617083333345],[-14.400075833333403,-31.423229999999993,-36.705170833333455],[-13.85607583333342,-38.15222999999999,-20.910170833333453],[-12.925075833333437,-40.28822999999999,26.285829166666545],[-12.865075833333435,-32.86822999999999,42.57382916666654],[-12.70907583333343,-30.954229999999992,44.431829166666546],[-12.060075833333428,-21.944229999999994,-41.08717083333345],[-11.238075833333426,-93.05623,-45.900170833333455],[-10.755075833333422,-96.79522999999999,-42.824170833333454],[-10.198075833333405,-40.90222999999999,-26.402170833333457],[-8.526075833333437,-11.683229999999995,-43.47517083333345],[-8.49507583333343,-42.972229999999996,27.487829166666543],[-6.995075833333431,4.234770000000005,-45.412170833333455],[-5.4560758333333865,-35.44722999999999,43.68382916666654],[-4.231075833333421,-32.38022999999999,43.124829166666544],[-3.3560758333334206,-35.02022999999999,41.10682916666654],[0.9079241666665894,-38.41622999999999,40.70082916666655],[116.25192416666658,44.80277000000001,4.4938291666665435],[117.79892416666661,47.87077000000001,8.81082916666655],[121.96392416666657,43.99877000000001,-39.153170833333455],[122.06492416666657,52.184770000000015,9.249829166666544],[123.5419241666666,51.468770000000006,-7.741170833333456],[123.82292416666661,55.191770000000005,5.865829166666543],[124.54792416666658,45.39077,10.967829166666547],[125.0639241666666,6.066770000000005,-66.02417083333346],[128.5559241666666,-9.012229999999995,-66.32417083333345],[129.62292416666656,59.50377,17.67682916666655],[130.09392416666657,34.61277000000001,-47.619170833333456],[130.44992416666656,53.08977,4.497829166666548],[131.50492416666657,32.87877,-45.132170833333454],[131.61592416666656,2.4517700000000104,-49.183170833333456],[131.69492416666657,54.34277,4.600829166666543],[132.91792416666658,58.86177000000001,13.28482916666654],[134.6619241666666,20.325770000000006,-56.27317083333345],[135.87692416666658,51.678770000000014,14.395829166666545],[137.45492416666656,35.39377,13.154829166666545],[137.5879241666666,6.980770000000007,-32.30717083333345],[138.45892416666658,4.075770000000006,-58.64317083333346],[138.52592416666658,54.941770000000005,10.782829166666545],[138.7949241666666,12.429770000000005,-44.531170833333455],[138.86992416666658,57.310770000000005,10.782829166666545],[139.6839241666666,-4.711229999999993,-15.208170833333455],[139.8329241666666,-10.015229999999995,-24.56017083333345],[140.61092416666656,0.922770000000007,-47.19117083333346],[141.89692416666657,0.6977700000000056,18.55882916666654],[142.40592416666658,-4.80422999999999,-9.859170833333451],[142.4389241666666,-3.1832299999999947,-10.122170833333456],[143.27192416666657,31.44677,19.601829166666548],[144.1719241666666,35.44977,10.571829166666546],[144.4069241666666,35.298770000000005,9.711829166666547],[144.59192416666656,31.959770000000006,-9.84117083333345],[144.6089241666666,18.93977000000001,-21.726170833333455],[145.0849241666666,41.09977000000001,3.840829166666552],[145.48592416666656,42.23977000000001,6.7168291666665425],[145.51492416666656,39.61477000000001,-6.492170833333461],[145.5469241666666,43.57777,4.549829166666541],[145.74492416666658,-12.550229999999992,-4.71317083333345],[145.75992416666656,-2.0922299999999936,13.713829166666542],[146.03392416666657,34.76777000000001,8.715829166666552],[146.54292416666658,13.45477000000001,-26.033170833333457],[147.15392416666657,-20.191229999999994,-25.44417083333345],[147.5929241666666,-12.20622999999999,-10.917170833333458],[147.70692416666657,-76.04323,36.502829166666544],[147.7439241666666,-22.752229999999994,38.97382916666655],[147.8829241666666,2.517770000000006,42.82482916666655],[147.9889241666666,41.435770000000005,5.940829166666546],[148.2099241666666,10.864770000000007,-26.012170833333457],[148.4439241666666,0.6187700000000049,-33.250170833333456],[148.44692416666658,34.48077000000001,12.166829166666545],[149.06792416666661,-19.86922999999999,-23.436170833333456],[149.20492416666656,-14.404229999999991,-43.055170833333456],[149.7629241666666,-5.738229999999994,24.966829166666543],[149.88692416666657,41.14777000000001,10.457829166666542],[150.39392416666658,7.766770000000008,-18.211170833333455],[150.42092416666657,39.66877000000001,10.680829166666541],[150.93492416666658,-27.603229999999993,47.773829166666545],[150.94692416666658,-13.494229999999991,30.538829166666545],[151.17792416666657,31.982770000000002,-4.037170833333448],[151.7699241666666,-12.785229999999991,-44.799170833333456],[151.8569241666666,3.3497700000000066,22.127829166666544],[152.4309241666666,8.694770000000005,-22.49917083333345],[152.44992416666656,-7.372229999999995,-17.334170833333452],[152.65392416666657,-33.67022999999999,36.02582916666654],[153.2829241666666,12.224770000000007,29.49882916666654],[153.3279241666666,38.965770000000006,0.46182916666654705],[153.41792416666658,-8.202229999999993,-17.13017083333345],[154.01492416666656,38.89877000000001,3.254829166666539],[154.55092416666656,-7.473229999999994,-18.686170833333456],[155.11792416666657,-19.37522999999999,-47.894170833333455],[156.61592416666656,28.777770000000004,-2.669170833333453],[156.96592416666658,-5.146229999999996,23.981829166666543],[157.34192416666656,-11.961229999999993,-47.540170833333455],[159.09592416666658,1.0077700000000078,-13.039170833333458],[159.12292416666656,-45.814229999999995,46.72182916666655],[159.30492416666658,-48.012229999999995,47.81482916666654],[160.5329241666666,33.00377,1.5928291666665473],[161.74492416666658,-12.783229999999989,-39.77417083333346],[162.18992416666657,-11.022229999999993,-41.45717083333346],[163.20892416666658,-30.555229999999995,-40.32317083333346],[163.6309241666666,-20.103229999999993,49.62382916666654],[164.24292416666657,-20.49422999999999,-42.52617083333345],[164.93492416666658,-81.58023,-29.172170833333453],[165.6499241666666,23.32477,-1.9371708333334539],[166.19292416666661,22.33377,4.78682916666655],[167.32692416666663,23.733770000000007,11.166829166666545],[167.43192416666653,22.294770000000014,-1.7921708333334578],[167.60992416666653,24.563770000000005,4.565829166666546],[167.87792416666656,-6.732229999999994,15.53082916666655],[168.0779241666666,-3.74322999999999,18.64182916666654],[168.14892416666663,-66.77623,-35.41417083333346],[168.6739241666666,-66.80823,-37.99017083333345],[168.7029241666666,-73.84823,-42.982170833333456],[170.50992416666662,21.929770000000005,-2.412170833333448],[171.4479241666666,-10.433229999999995,-13.687170833333454],[173.4389241666666,16.47677000000001,-1.0061708333334565],[174.14392416666664,-7.453229999999991,16.89682916666655],[175.5449241666666,11.919770000000007,-8.679170833333458],[175.83392416666658,15.973770000000009,-1.2021708333334544],[176.02592416666658,24.59277,1.876829166666539],[176.34892416666656,-9.913229999999992,21.11182916666654],[180.33192416666662,8.147770000000008,0.9678291666665473],[184.49292416666657,-24.211229999999993,-6.4351708333334585],[186.07192416666663,-23.498229999999992,8.811829166666541],[186.30192416666654,13.04677000000001,5.2368291666665385],[186.9719241666666,15.767770000000006,2.137829166666549],[188.94292416666661,-0.8602299999999943,-6.662170833333448],[189.02192416666657,-0.18722999999999246,8.253829166666549],[189.3139241666666,-1.3682299999999898,-3.4141708333334577],[192.00192416666658,3.659770000000009,0.4818291666665431],[196.2709241666666,-12.085229999999996,-2.643170833333457],[197.72992416666654,-19.060229999999994,11.306829166666546],[199.6549241666666,-19.632229999999993,-3.2761708333334525],[202.58492416666655,-43.747229999999995,2.8498291666665523],[205.87392416666654,-58.70822999999999,0.049829166666540914],[206.58992416666655,-31.311229999999995,1.9468291666665465],[207.25192416666658,-56.62722999999999,2.796829166666541],[207.6789241666666,-41.37022999999999,1.4878291666665433],[-162.4120758333334,28.31877,2.884829166666549],[-158.6520758333334,51.319770000000005,-4.942170833333449],[-158.2590758333334,28.419770000000014,-15.344170833333457],[-155.0560758333334,48.13877000000001,24.080829166666547],[-153.3010758333334,65.55777,15.13582916666654],[-153.23607583333342,63.87977000000001,13.634829166666549],[-152.9840758333334,43.23977000000001,-11.604170833333455],[-150.5560758333334,48.801770000000005,-11.009170833333457],[-149.7570758333334,67.61277000000001,3.6188291666665435],[-148.2830758333334,68.06377,-22.722170833333458],[-147.88507583333342,76.40877,31.469829166666543],[-147.26707583333342,56.26877,-15.702170833333454],[-146.5610758333334,80.01877,6.15582916666655],[-144.57007583333342,89.97677,11.93582916666655],[-144.2410758333334,76.97277000000001,30.071829166666546],[-144.10007583333342,34.681770000000014,-2.9821708333334556],[-143.1620758333334,36.67777000000001,18.81782916666654],[-142.1560758333334,70.83777,-16.072170833333452],[-142.0210758333334,78.99577000000001,-22.988170833333456],[-141.87907583333342,91.00477,13.204829166666542],[-139.63507583333342,44.88177,2.3958291666665446],[-139.4070758333334,45.48277,21.220829166666547],[-139.4060758333334,77.63777,-25.622170833333456],[-138.8180758333334,81.25777000000001,-28.040170833333455],[-138.5980758333334,59.76577,-7.100170833333451],[-138.2690758333334,76.30677000000001,7.790829166666541],[-136.9960758333334,62.033770000000004,28.425829166666546],[-136.73207583333343,90.82377000000001,5.815829166666546],[-136.69007583333342,32.21177,0.157829166666545],[-136.65507583333343,76.66877000000001,-20.957170833333457],[-136.3590758333334,76.28277000000001,-19.783170833333457],[-136.16507583333342,60.50177000000001,27.996829166666544],[-136.1390758333334,95.17677000000002,17.66182916666655],[-135.66507583333342,41.093770000000006,9.032829166666545],[-135.6210758333334,42.85177,-3.3971708333334476],[-135.3470758333334,92.73777,21.83182916666655],[-135.23607583333342,64.90277,38.94682916666655],[-135.1690758333334,59.46177,27.215829166666552],[-134.22007583333342,96.68077000000001,-6.067170833333449],[-133.33307583333342,38.75777000000001,15.252829166666544],[-133.2110758333334,70.89677,2.2938291666665407],[-133.1390758333334,39.813770000000005,3.674829166666541],[-132.95707583333342,26.382770000000008,10.065829166666546],[-132.5920758333334,89.38077,-15.547170833333453],[-132.5020758333334,40.52377000000001,10.059829166666546],[-132.4840758333334,86.57277,-9.670170833333458],[-132.3820758333334,39.34977000000001,10.556829166666546],[-131.7510758333334,84.83777000000002,-2.484170833333451],[-131.58207583333342,83.74077000000001,23.01982916666654],[-131.01707583333342,92.34077,30.44282916666654],[-129.5140758333334,73.87577,25.708829166666547],[-129.4790758333334,21.062770000000015,18.28082916666655],[-128.0740758333334,87.09277000000002,15.494829166666548],[-127.18307583333342,71.83177,22.605829166666553],[-127.10407583333341,39.95177000000001,6.927829166666541],[-125.94407583333341,14.347770000000004,16.446829166666546],[-125.27907583333342,99.73777,25.52582916666654],[-123.90807583333341,70.93177000000001,18.15582916666655],[-123.84407583333342,22.197770000000006,2.0178291666665444],[-123.51607583333342,43.62777000000001,-15.421170833333456],[-123.19607583333342,42.566770000000005,7.619829166666548],[-123.13607583333342,66.49277000000001,42.58682916666655],[-122.70707583333342,64.66577000000001,16.454829166666542],[-122.16007583333342,89.61377,-11.662170833333455],[-122.01807583333343,36.10477,14.948829166666542],[-121.92707583333342,69.31077,-6.819170833333459],[-121.75207583333341,25.09277,-11.933170833333456],[-121.3290758333334,40.26577,27.52182916666655],[-121.24207583333342,120.75677,3.009829166666549],[-120.87907583333342,120.96177000000002,8.496829166666544],[-120.56907583333341,67.91177,43.133829166666544],[-120.1740758333334,25.566770000000005,10.071829166666546],[-119.38907583333341,38.795770000000005,25.836829166666547],[-119.3410758333334,116.04177,29.428829166666546],[-118.3460758333334,63.39277000000001,-5.555170833333449],[-117.8470758333334,118.25677,-15.408170833333457],[-117.83907583333342,29.627770000000012,25.404829166666545],[-116.7870758333334,38.328770000000006,27.583829166666547],[-116.22007583333342,36.807770000000005,27.350829166666543],[-115.16607583333342,59.89077,17.40382916666654],[-115.0490758333334,35.82477,26.960829166666542],[-114.08607583333341,34.435770000000005,-15.888170833333454],[-113.73107583333342,123.84877000000002,-6.2691708333334475],[-113.62707583333341,52.15377000000001,27.169829166666545],[-112.90507583333343,64.42877000000001,34.58882916666654],[-112.74707583333341,47.36677,1.5808291666665468],[-112.6440758333334,56.70877,-7.1041708333334554],[-112.53207583333341,57.059770000000015,17.44182916666655],[-112.24107583333341,55.47077,-6.650170833333448],[-111.15107583333341,52.96377000000001,17.621829166666544],[-110.18207583333341,95.83077000000002,-33.144170833333455],[-110.1440758333334,70.19277000000001,40.95182916666654],[-109.63307583333341,121.93177000000001,-0.670170833333458],[-109.54407583333341,52.652770000000004,14.556829166666546],[-109.28807583333341,67.29877,-2.301170833333458],[-109.28507583333342,123.01577000000002,4.496829166666544],[-109.18107583333341,115.50577,31.675829166666546],[-108.79707583333342,61.62377000000001,28.877829166666544],[-108.79207583333343,44.15377000000001,26.532829166666545],[-108.20207583333342,45.158770000000004,-17.467170833333455],[-107.83707583333342,120.43977,3.4668291666665425],[-107.76207583333343,117.32977000000001,21.508829166666544],[-107.4710758333334,73.83577000000001,-16.928170833333454],[-107.11607583333341,100.85977000000001,4.012829166666549],[-107.0310758333334,104.72077,3.211829166666547],[-106.79807583333343,69.03177000000001,33.13282916666654],[-106.72407583333342,54.11877000000001,10.943829166666546],[-106.66907583333341,109.32877,5.429829166666551],[-106.65507583333343,56.825770000000006,3.8828291666665393],[-105.72307583333341,73.09077,-11.878170833333456],[-105.62407583333342,74.22477,-25.459170833333452],[-105.54007583333342,48.19277000000001,-15.921170833333456],[-105.26607583333342,115.71777000000002,-11.297170833333453],[-105.05907583333342,71.86777000000001,23.55182916666655],[-104.12507583333343,64.99677000000001,-13.730170833333453],[-103.71407583333342,70.40277,18.228829166666543],[-103.0660758333334,72.76677000000001,36.92182916666654],[-102.93107583333341,89.69577,8.140829166666549],[-102.85407583333341,60.61677,-15.262170833333457],[-102.46707583333341,69.68377000000001,0.8058291666665411],[-102.43407583333342,72.27377000000001,-20.417170833333458],[-102.31807583333341,60.152770000000004,27.529829166666545],[-101.60007583333342,71.88477,35.69682916666655],[-101.3940758333334,42.82477,-19.610170833333456],[-101.19007583333342,94.09077,13.383829166666544],[-100.63707583333343,99.68877000000002,-1.362170833333451],[-100.27607583333341,34.923770000000005,-18.037170833333455],[-100.0370758333334,99.38077,-23.410170833333453],[-99.82607583333342,73.42877000000001,-18.217170833333455],[-99.6090758333334,70.76677000000001,31.75482916666654],[-99.26607583333342,45.88777,-14.462170833333452],[-99.22307583333341,101.27677000000001,-21.92617083333345],[-98.79407583333341,86.93977,7.142829166666544],[-97.84807583333341,105.82277,25.841829166666543],[-97.51707583333342,106.27777000000002,21.746829166666544],[-95.31307583333341,71.11677,26.077829166666547],[-94.44007583333342,102.70877,23.841829166666543],[-92.91907583333341,83.78377000000002,-0.9371708333334539],[-92.6070758333334,73.94577000000001,16.93682916666654],[-92.29607583333342,81.34077,-2.1911708333334587],[-92.2220758333334,71.98977000000001,-5.870170833333461],[-91.01507583333341,67.57577,-0.9691708333334503],[-87.84407583333342,68.69277000000001,-8.262170833333457],[-87.41407583333341,71.58777,24.79582916666655],[-85.7440758333334,64.21377000000001,12.824829166666547],[-83.27707583333341,67.97477,-11.655170833333457],[-83.12807583333341,67.22477,-9.404170833333453],[-80.20107583333339,68.10877,13.605829166666553],[-78.9530758333334,64.94877000000001,14.309829166666546],[-78.88307583333341,81.74777,6.852829166666552],[-75.21407583333342,69.08277000000001,12.459829166666552],[-76.88207583333343,59.84177000000001,-0.49317083333345124],[-76.15607583333343,57.51177000000001,5.322829166666551],[-76.14507583333341,71.64277000000001,-6.46317083333345],[-75.53207583333341,66.88577000000001,-5.21917083333345],[-75.38907583333344,62.12077000000001,-7.054170833333458],[-74.73507583333344,60.77677000000001,-7.387170833333457],[-74.19707583333343,54.98277,10.626829166666539],[-74.1360758333334,63.530770000000004,9.689829166666541],[-73.89007583333341,62.05277000000001,-5.254170833333461],[-73.49807583333342,72.97177,-3.143170833333457],[-72.81407583333339,61.11477000000001,-8.118170833333451],[-72.17107583333342,55.86477000000001,-4.504170833333461],[-71.06307583333341,59.09277,-6.117170833333461],[-69.92307583333343,53.03277000000001,0.7328291666665478],[-69.3930758333334,73.67077,-2.7971708333334533],[-69.19907583333344,73.05977000000001,-2.615170833333451],[-68.53807583333344,59.62677000000001,-7.279170833333453],[-68.01207583333343,69.53077,-3.9341708333334537],[-67.67507583333344,65.95377,9.562829166666546],[-67.49707583333344,70.39977,11.237829166666543],[-67.31307583333341,51.75377,2.3988291666665447],[-65.81507583333342,53.158770000000004,15.965829166666552],[-61.601075833333425,64.34877,-4.250170833333456],[-59.5010758333334,62.774770000000004,-2.120170833333461],[-59.05507583333343,42.97477000000001,-41.03017083333346],[-58.24307583333342,59.25477000000001,10.87982916666654],[-57.40207583333341,60.30877000000001,-7.711170833333455],[-57.13207583333343,59.928770000000014,-39.244170833333456],[-56.58007583333341,52.43377000000001,17.767829166666544],[-56.1430758333334,46.173770000000005,-26.342170833333455],[-55.83007583333341,62.73377000000001,-36.69817083333346],[-55.54307583333343,53.73977000000001,16.005829166666544],[-54.45707583333342,38.459770000000006,-29.975170833333458],[-54.27407583333343,29.34577,-31.372170833333456],[-53.958075833333396,54.795770000000005,-7.616170833333456],[-53.724075833333416,33.17177000000001,-31.085170833333457],[-52.63707583333343,55.07177,-45.315170833333454],[-52.53107583333343,73.86277000000001,-27.083170833333455],[-52.208075833333396,67.92077,6.878829166666549],[-52.139075833333436,47.99277000000001,-2.917170833333458],[-51.799075833333404,57.22277000000001,-9.753170833333456],[-51.51907583333343,60.69977,14.324829166666547],[-51.2440758333334,41.416770000000014,-32.07517083333345],[-50.9770758333334,29.57077000000001,-36.12717083333345],[-50.86807583333342,29.266770000000008,-9.83217083333345],[-50.7680758333334,26.993770000000012,-9.49217083333346],[-50.63507583333342,50.96377000000001,-13.794170833333453],[-50.43907583333339,53.041770000000014,-3.4451708333334494],[-50.36707583333339,54.30277000000001,-7.9791708333334554],[-50.182075833333386,62.91877000000001,-7.669170833333453],[-50.11007583333344,60.718770000000006,7.303829166666546],[-49.75807583333341,67.08677,3.5678291666665416],[-49.7560758333334,57.51877,8.89982916666655],[-49.50507583333342,70.41777,-20.617170833333454],[-49.24107583333341,67.24577000000001,0.40582916666654967],[-49.196075833333396,28.263770000000008,-36.08217083333346],[-49.12007583333343,44.05577000000001,-7.60517083333346],[-48.99107583333341,86.47577,-18.582170833333457],[-48.22107583333343,47.343770000000006,-8.020170833333452],[-47.14007583333341,52.718770000000006,18.603829166666543],[-45.7320758333334,66.43477000000001,-2.487170833333451],[-45.273075833333394,50.85177,-28.701170833333457],[-45.25907583333344,63.783770000000004,11.849829166666552],[-43.17507583333344,53.25777000000001,-16.832170833333457],[-42.726075833333425,43.405770000000004,-28.735170833333456],[-42.672075833333395,50.37377000000001,0.02682916666654478],[-41.214075833333425,48.42477000000001,10.883829166666544],[-39.716075833333434,63.771770000000004,-27.333170833333455],[-37.71707583333341,79.83777,0.9768291666665476],[-37.52407583333343,70.51877,-1.1581708333334575],[-37.32607583333339,27.187770000000015,-42.559170833333454],[-36.38007583333342,78.30777,5.496829166666544],[-36.19207583333343,89.73877,-14.616170833333456],[-35.60807583333343,53.97877000000001,-7.497170833333456],[-34.79307583333343,56.25977,-31.56917083333345],[-34.72107583333343,41.676770000000005,-45.159170833333455],[-33.44307583333341,48.73977000000001,-35.33817083333346],[-30.924075833333404,27.386770000000013,-33.20717083333346],[-29.71707583333341,40.435770000000005,-30.349170833333453],[-29.503075833333412,31.999770000000012,-47.35517083333345],[-29.26607583333339,24.639770000000013,-33.528170833333455],[-28.6020758333334,72.86877000000001,-30.524170833333457],[-26.099075833333416,55.343770000000006,-19.670170833333458],[-24.76607583333339,37.48677000000001,-50.78917083333346],[-23.186075833333405,65.20377,-46.24017083333345],[-22.537075833333404,42.64177000000001,-31.351170833333455],[-22.35607583333342,37.25277000000001,-55.845170833333455],[-20.87007583333343,50.76277,-61.21217083333345],[-19.515075833333412,63.68377000000001,-20.514170833333452],[-18.002075833333436,47.301770000000005,-62.95617083333345],[-16.19507583333342,52.17777000000001,-56.53517083333345],[-15.088075833333392,42.58277000000001,-35.76217083333346],[-11.454075833333434,47.59577,-39.79417083333345],[-11.34207583333341,48.49577000000001,-38.940170833333454],[-10.992075833333388,38.05577000000001,-43.49917083333345],[-7.267075833333422,22.459770000000006,-42.689170833333456],[-6.525075833333403,51.37377000000001,-35.19817083333346],[-6.216075833333434,39.71477,-39.31617083333345],[-5.847075833333406,51.97277000000001,-38.735170833333456],[-5.823075833333405,42.36877000000001,-38.28517083333345],[-4.917075833333399,49.578770000000006,-39.83117083333345],[-2.601075833333425,42.09177000000001,-40.77717083333346],[2.26692416666657,23.22877000000001,-45.821170833333454],[5.051924166666595,16.920770000000005,-48.54717083333345],[12.07292416666661,40.797770000000014,-48.555170833333456],[12.161924166666608,36.956770000000006,-48.473170833333455],[13.017924166666603,57.59677000000001,-41.70717083333346],[13.017924166666603,58.52377000000001,-41.430170833333456],[13.600924166666573,55.08677,-43.135170833333454],[15.72192416666661,26.91577000000001,-52.120170833333454],[164.53392416666662,-120.90923,-37.702170833333454],[168.78792416666664,-118.86823,-27.872170833333456],[169.0829241666666,-115.79023,-23.619170833333456],[170.1119241666666,-130.16422999999998,-32.58217083333346],[171.17492416666659,-123.21923,-40.077170833333454],[171.46892416666657,-131.83722999999998,-28.37417083333345],[172.08892416666657,-104.10323,-44.391170833333454],[172.22792416666658,-131.87322999999998,-27.769170833333455],[173.08392416666658,-108.74922999999998,-36.13017083333345],[174.8379241666666,-96.85622999999998,-27.663170833333453],[175.0399241666666,-130.15823,-43.01417083333345],[177.67292416666663,-101.45622999999999,-26.030170833333457],[177.81192416666664,-100.88122999999999,-25.23717083333345],[178.07892416666658,-117.12622999999999,-40.52617083333345],[179.30092416666656,-147.31522999999999,-34.943170833333454],[180.14692416666657,-133.75322999999997,-38.446170833333454],[181.27192416666657,-126.94223,-23.37717083333345],[182.91292416666664,-117.70522999999999,-30.753170833333456],[183.4969241666666,-119.98322999999999,-40.067170833333456],[183.72992416666654,-128.14722999999998,-28.969170833333457],[186.43292416666662,-209.28023000000002,-24.409170833333455],[187.1979241666666,-210.41023,-23.297170833333453],[187.37692416666658,-136.22723,-26.852170833333453],[188.22992416666654,-210.06522999999999,-38.056170833333454],[188.36492416666664,-213.68122999999997,-47.38017083333345],[190.54092416666657,-211.25522999999998,-38.879170833333454],[190.96092416666653,-150.93822999999998,-33.98917083333345],[191.52692416666656,-205.24723,-35.363170833333456],[191.90092416666658,-208.27823,-24.305170833333456],[192.73892416666655,-204.65422999999998,-28.352170833333453],[194.8999241666666,-208.54122999999998,-37.84417083333346],[195.24392416666655,-149.82823,-39.50917083333346],[195.81092416666655,-203.04422999999997,-22.661170833333458],[195.88492416666662,-185.00023,-37.82617083333346],[195.92792416666663,-182.40323,-34.287170833333455],[196.28292416666653,-205.76322999999996,-39.20617083333345],[196.79792416666663,-199.69923,-23.649170833333457],[197.39892416666663,-213.26722999999998,-50.824170833333454],[197.61792416666657,-205.32423,-41.492170833333454],[198.1069241666666,-179.58522999999997,-41.564170833333456],[198.49392416666655,-190.67822999999999,-36.65817083333346],[198.71492416666655,-178.03823,-42.52617083333345],[199.54192416666655,-186.52823,-22.542170833333458],[199.55192416666654,-173.05923,-27.322170833333452],[199.62392416666654,-185.30322999999999,-23.085170833333457],[202.15892416666662,-194.01322999999996,-28.981170833333458],[203.75392416666654,-197.01823000000002,-35.20617083333345],[204.0489241666666,-171.59623,-40.446170833333454],[205.3329241666666,-198.50322999999997,-35.94117083333345],[209.51292416666655,-196.61822999999998,-32.421170833333456],[213.40192416666656,-183.71022999999997,-37.59717083333346],[112.2439241666666,-213.85023,36.898829166666545],[116.30992416666658,-213.51623,25.65682916666654],[118.11792416666657,-212.51322999999996,28.201829166666542],[124.62492416666657,-206.52623,30.711829166666547],[124.87492416666657,-211.22422999999998,49.69882916666654],[126.50292416666656,-213.75023,47.96682916666654],[126.8279241666666,-202.22023000000002,39.75382916666655],[127.1889241666666,-199.94522999999998,36.02482916666655],[129.64892416666657,-203.93723,29.00482916666654],[131.64392416666658,-206.32723,26.841829166666543],[131.65592416666658,-104.03823,38.68082916666654],[131.77392416666657,-193.00522999999998,32.14982916666655],[132.2679241666666,-210.40722999999997,51.157829166666545],[132.82992416666656,-216.37122999999997,53.89482916666654],[132.92992416666658,-205.73523,25.701829166666542],[133.65392416666657,-205.47422999999998,39.21182916666655],[133.9629241666666,-202.76823000000002,47.36082916666655],[134.51892416666658,-191.75223,42.95582916666655],[135.1739241666666,-206.33123,28.229829166666548],[135.35792416666658,-114.21722999999999,36.99882916666654],[136.07992416666656,-132.80223,39.13282916666654],[137.1939241666666,-166.57223,34.48582916666655],[137.2629241666666,-201.51223,36.36182916666654],[137.31492416666657,-98.61322999999999,43.294829166666545],[137.40192416666656,-177.69223,30.56682916666655],[137.8979241666666,-204.89722999999998,48.74082916666654],[138.11492416666658,-197.29122999999998,31.142829166666544],[138.14392416666658,-128.00123,42.19682916666655],[138.22892416666656,-122.81222999999999,31.916829166666545],[140.0829241666666,-199.17023,45.871829166666544],[140.41392416666656,-101.33422999999999,48.267829166666544],[140.75992416666656,-188.34722999999997,29.849829166666552],[141.45692416666657,-193.41823,47.72182916666655],[141.5639241666666,-175.72023000000002,32.175829166666546],[142.0489241666666,-163.42723,32.746829166666544],[142.08192416666657,-200.99322999999998,37.81482916666654],[142.2099241666666,-196.99223,46.392829166666544],[142.53392416666657,-178.66222999999997,46.09482916666654],[144.3879241666666,-173.20223,41.17682916666655],[144.7179241666666,-144.73622999999998,32.42482916666654],[145.51192416666657,-174.01923,45.14782916666654],[145.72892416666656,-156.39523,41.48882916666655],[146.7489241666666,-201.46123,44.99182916666655],[147.49092416666656,-159.05122999999998,45.25182916666654],[148.8039241666666,-171.45223,45.86482916666654],[148.9069241666666,-191.27722999999997,39.85282916666655],[151.2699241666666,-126.54923,32.39682916666655],[152.4579241666666,-128.17423,44.386829166666544],[152.55092416666656,-93.00223,36.07482916666655],[152.96392416666657,-99.78423,35.22482916666655],[153.4729241666666,-98.78423,32.121829166666544],[153.83892416666657,-106.32522999999999,36.28782916666654],[155.55292416666657,-107.39123,37.36982916666655],[155.99292416666657,-107.95822999999999,31.57082916666654]];var statistics$1={x:{count:1200,mean:-0,std:107.1854452931,min:-285.4280758333,"25%":-67.0363258333,"50%":-13.7180758333,"75%":79.5901741667,max:213.4019241667},y:{count:1200,mean:0,std:92.172432346,min:-216.37123,"25%":-28.91023,"50%":35.60277,"75%":67.32952,max:123.84877},z:{count:1200,mean:-0,std:34.285883392,min:-96.0401708333,"25%":-26.1929208333,"50%":1.6713291667,"75%":25.7318291667,max:95.0848291667}};var mammoth = {names:names,labels:labels$1,columns:columns$1,values:values$1,statistics:statistics$1};

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
    return [mean, dev / N];
}

function getStatistics({values, columns}) {
    return function() {
        let result = {};
        columns.forEach((dimension, i) => {
            result[dimension] = {};
            const [mean, std] = deviation(values, row => row[i]);
            result[dimension].std = std;
            result[dimension].mean = mean;
            const [min, max] = extent(values, row => row[i]);
            result[dimension].min = min;
            result[dimension].max = max;
        });
        return result;
    }
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

function parse_openml_mnist_data(raw_data, fn_apply_to_value = (v) => v) {
    const [all_columns, ...values_tmp] = raw_data.split(/\r?\n|\r/).map(row => row.split(","));
    const all_labels = [];
    const all_values = [];
    values_tmp.forEach((row) => {
        all_values.push(row.slice(0, -1).map(fn_apply_to_value));
        all_labels.push(row.slice(-1)[0]);
    });
    return { all_columns, all_values, all_labels };
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
    return {values, columns, labels, sex, year, island, statistics: getStatistics(values)};
}

function filter(values, indices) {
    return indices.map(i => values[i]);
}

const PENGUINS = penguins();

const openml_main_api = "https://www.openml.org/api/v1/json/";
const openml_file_api = "https://www.openml.org/data/v1/get_csv/";

// MNIST = 554
// FMNIST = 40996
// KNNIST = 41982

/**
 * Fetches data from openml.org
 * @param {Number} id - Data ID from openml.org
 * @param {String} api_key - Your api-key
 * @returns {Object} - Raw data as string, and the dataset description provided by openml.org.
 */
async function fetch_openml(id, api_key) {
    let fetch = await get_fetch();

    let url = encodeURI(`${openml_main_api}data/${id}`);
    if (api_key) {
        url += `?api_key=${api_key}`;
    }
    // Fetching for file id.
    const main_response = await fetch(url);
    
    if (!main_response.ok) {
        throw Error(`${main_response.status} ${main_response.statusText}`);
    }
    const description = await main_response.json();

    // fetching the file.
    const file_response = await fetch(openml_file_api + description.data_set_description.file_id);
    if (!file_response.ok) {
        throw Error(`${file_response.status} ${file_response.statusText}`);
    }
    const raw_data = await file_response.text();


    return { raw_data, description: {} };
}

/**
 * Downloads and samples the MNIST dataset.
 * @param {Object} parameters
 * @param {Number} [N = 400] - Number of points.
 * @param {Number} [seed = 4711] - Seed for the random number generator.
 * @param {Array<Number>} [digits = [0,1,2,3,4,5,6,7,8,9]] - Filter for which digits end up in the final dataset.
 * @param {String} [api_key = null] - API key for OpenML.
 * @returns {{values: Array<Array>, labels: Array<String>, columns: Array<String>, statistics: Object}} - The final MNIST dataset sample.
 */
async function mnist({N = 400, seed = 4711, digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], api_key} = {}) {
    const R = new Randomizer(seed);
    const { raw_data, description } = await fetch_openml(554, api_key);
    const { all_values, all_labels } = parse_openml_mnist_data(raw_data, value => +value / 255);

    const n = Math.floor(N / digits.length);
    const number_digits = Array.from({length: digits.length}, () => n);
    number_digits[0] += (N - (n * digits.length));
    
    const indices = all_labels.map((_, i) => i);
    const filtered_indices = digits.map(digit => indices.filter(i => all_labels[i] == digit));
    const selected_indices = number_digits.map((n, i) => R.choice(filtered_indices[i], n)).flat();
    const values = [];
    const labels = [];
    for (const i of selected_indices) {
        values.push(all_values[i]);
        labels.push(all_labels[i]);
    }
    const columns = Array.from({length: 28 * 28}, (_, i) => `pixel_at_${i % 28}_${Math.floor(i / 28)}`);
    return { values, labels, columns, statistics: getStatistics({values, columns}), description };
}

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
 * @param {String} [api_key = null] - API key for OpenML.
 * @returns {{values: Array<Array>, labels: Array<String>, columns: Array<String>, statistics: Object}} - The final FMNIST dataset sample.
 */
async function fmnist({N = 400, seed = 4711, items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], api_key} = {}) {
    const R = new Randomizer(seed);
    const { raw_data, description } = await fetch_openml(40996, api_key);
    const { all_values, all_labels } = parse_openml_mnist_data(raw_data, value => +value / 255);

    const n = Math.floor(N / items.length);
    const number_digits = Array.from({length: items.length}, () => n);
    number_digits[0] += (N - (n * items.length));
    
    const indices = all_labels.map((_, i) => i);
    const filtered_indices = items.map(digit => indices.filter(i => all_labels[i] == digit));
    const selected_indices = number_digits.map((n, i) => R.choice(filtered_indices[i], n)).flat();
    const values = [];
    const labels = [];
    for (const i of selected_indices) {
        values.push(all_values[i]);
        labels.push(FMNIST_LABELS_DICT[all_labels[i]]);
    }
    const columns = Array.from({length: 28 * 28}, (_, i) => `pixel_at_${i % 28}_${Math.floor(i / 28)}`);
    return {values, labels, columns, statistics: getStatistics({values, columns}), description};
}

const KMNIST_LABELS_DICT = {
    0: "お",
    1: "き",
    2: "す",
    3: "つ",
    4: "な",
    5: "は",
    6: "ま",
    7: "や",
    8: "れ",
    9: "を"
};

/**
 * Downloads and samples the Kuzushiji-MNIST dataset.
 * @param {Object} parameters
 * @param {Number} [N = 400] - Number of points.
 * @param {Number} [seed = 4711] - Seed for the random number generator.
 * @param {Array<Number>} [items = [0,1,2,3,4,5,6,7,8,9]] - Filter for which items end up in the final dataset.
 * @param {String} [api_key = null] - API key for OpenML.
 * @returns {{values: Array<Array>, labels: Array<String>, columns: Array<String>, statistics: Object}} - The final Kuzushiji-MNIST dataset sample.
 * @see{@link{https://arxiv.org/abs/1812.01718}}
 */
async function kmnist({N = 400, seed = 4711, letters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], api_key} = {}) {
    const R = new Randomizer(seed);
    const { raw_data, description } = await fetch_openml(41982, api_key);
    const { all_values, all_labels } = parse_openml_mnist_data(raw_data, value => +value / 255);

    const n = Math.floor(N / letters.length);
    const number_digits = Array.from({length: letters.length}, () => n);
    number_digits[0] += (N - (n * letters.length));
    
    const indices = all_labels.map((_, i) => i);
    const filtered_indices = letters.map(digit => indices.filter(i => all_labels[i] == digit));
    const selected_indices = number_digits.map((n, i) => R.choice(filtered_indices[i], n)).flat();
    const values = [];
    const labels = [];
    for (const i of selected_indices) {
        values.push(all_values[i]);
        labels.push(KMNIST_LABELS_DICT[all_labels[i]]);
    }
    const columns = Array.from({length: 28 * 28}, (_, i) => `pixel_at_${i % 28}_${Math.floor(i / 28)}`);
    return {values, labels, columns, statistics: getStatistics({values, columns}), description};
}

var version="0.2.1";

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
exports.fetch_kmnist = kmnist;
exports.fetch_mnist = mnist;
exports.fetch_openml = fetch_openml;
exports.moons = moons;
exports.penguins = penguins;
exports.rays = rays;
exports.sshape = sshape;
exports.swissroll = swissroll;
exports.version = version;
exports.waves = waves;

Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=dataset.umd.js.map
