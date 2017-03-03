((time_left, state) => ({
    command: {
        action: "turn",
        metadata: {
            direction: "right"
        }
    },
    state: {
        hello: "world"
    }
});
