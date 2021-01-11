chrome.webRequest.onBeforeSendHeaders.addListener(
    function (details) {
        var new_x_forwarded = Math.floor(Math.random() * 100000000).toString()
        var got_x_forwarded = false
        for (var request_headers_name in details.requestHeaders) {
            // Find X-Forwarded-For
            got_x_forwarded = details.requestHeaders[request_headers_name].name.toLowerCase() == "x-forwarded-for"
            if (got_x_forwarded) {
                // Replace wih new value
                details.requestHeaders[request_headers_name].value = new_x_forwarded
                break
            }
        }
        if (!got_x_forwarded) {
            details.requestHeaders.push({ name: "X-Forwarded-For", value: new_x_forwarded })
        }
        return { requestHeaders: details.requestHeaders }
    },
    {
        urls: ["*://*.slader.com/*"],
    },
    ["blocking", "requestHeaders"]
)

chrome.webRequest.onSendHeaders.addListener(
    function (details) {
        return { requestHeaders: details.requestHeaders }
    },
    { urls: ["*://*.slader.com/textbook/*"] },
    ["requestHeaders"]
)
