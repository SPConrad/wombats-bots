def wombat(state, time_left):
    return {
        'command': {
            'action': 'turn',
            'metadata': {
                'direction': 'right'
            }
        },
        'state': {
            'hello': 'world'
        }
    }
