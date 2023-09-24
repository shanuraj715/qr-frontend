const tooltip = (content = '', type = 'dark') => {
    return {
        "data-tooltip-id": "my-tooltip-data-html",
        "data-tooltip-html": content,
        "data-tooltip-variant": type,
        "data-tooltip-delay-hide": 100,
        "data-tooltip-delay-show": 300
    }
}

export {
    tooltip,
}