module.exports = {
    apps: [
        {
            name: "ufe_web",
            mode: "cluster",
            script: "/usr/bin/yarn",
            args: "start",
            watch: false,
            instances: 1,
            autorestart: true,
            max_memory_restart: "2048M",
            env_development: {
                PORT: 3081,
                NODE_ENV: "development",
            },
            env_production: {
                PORT: 3080,
                NODE_ENV: "production",
            },
        },
    ],
};
