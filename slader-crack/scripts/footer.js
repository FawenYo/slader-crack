var element_removed = false
var element_parent = document.body

var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (mutation.addedNodes && mutation.addedNodes.length > 0) {
            var node1 = mutation.target.querySelector("section.Paywall__footer-counter")
            if (node1) {
                node1.parentNode.removeChild(node1)
                element_removed = true
            }

            if (element_removed) {
                observer.disconnect()
            }
        }
    })
})

observer.observe(element_parent, {
    childList: true,
    subtree: true,
})
