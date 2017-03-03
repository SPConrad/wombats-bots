((state, time_left) => ({
    command: {
        action: "turn",
        metadata: {
            direction: "right"
        }
    },
    state: {
        hello: "world"
    }
}));
