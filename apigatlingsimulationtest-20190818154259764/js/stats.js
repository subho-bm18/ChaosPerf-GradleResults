var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10000",
        "ok": "0",
        "ko": "10000"
    },
    "minResponseTime": {
        "total": "6",
        "ok": "-",
        "ko": "6"
    },
    "maxResponseTime": {
        "total": "574",
        "ok": "-",
        "ko": "574"
    },
    "meanResponseTime": {
        "total": "65",
        "ok": "-",
        "ko": "65"
    },
    "standardDeviation": {
        "total": "43",
        "ok": "-",
        "ko": "43"
    },
    "percentiles1": {
        "total": "62",
        "ok": "-",
        "ko": "62"
    },
    "percentiles2": {
        "total": "91",
        "ok": "-",
        "ko": "91"
    },
    "percentiles3": {
        "total": "121",
        "ok": "-",
        "ko": "121"
    },
    "percentiles4": {
        "total": "150",
        "ok": "-",
        "ko": "150"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 10000,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "277.778",
        "ok": "-",
        "ko": "277.778"
    }
},
contents: {
"req_addorder-api-7eadd": {
        type: "REQUEST",
        name: "AddOrder-API",
path: "AddOrder-API",
pathFormatted: "req_addorder-api-7eadd",
stats: {
    "name": "AddOrder-API",
    "numberOfRequests": {
        "total": "10000",
        "ok": "0",
        "ko": "10000"
    },
    "minResponseTime": {
        "total": "6",
        "ok": "-",
        "ko": "6"
    },
    "maxResponseTime": {
        "total": "574",
        "ok": "-",
        "ko": "574"
    },
    "meanResponseTime": {
        "total": "65",
        "ok": "-",
        "ko": "65"
    },
    "standardDeviation": {
        "total": "43",
        "ok": "-",
        "ko": "43"
    },
    "percentiles1": {
        "total": "62",
        "ok": "-",
        "ko": "62"
    },
    "percentiles2": {
        "total": "91",
        "ok": "-",
        "ko": "91"
    },
    "percentiles3": {
        "total": "121",
        "ok": "-",
        "ko": "121"
    },
    "percentiles4": {
        "total": "150",
        "ok": "-",
        "ko": "150"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 10000,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "277.778",
        "ok": "-",
        "ko": "277.778"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}