const userResolver = {
    Query: {
        async user(_, { input }, context) {

            return {
                id: 1,
                name: 'Jhon',
                email: 'jhon@gmail.com',
            }
        },
        async users(_, { input }, context) {
            return {
                pages: 1,
                length: 1,
                rows: [
                    {
                        id: 1,
                        name: 'Jhon',
                        email: 'jhon@gmail.com',
                    }
                ]
            }
        },
    },
};

export { userResolver };