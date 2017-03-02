(function (time_left, state) {
    return {
        command: {
            action: "turn",
            metadata: {
                direction: "right"
            }
        },
        state: {
            hello: "world"
        }
    }
});
