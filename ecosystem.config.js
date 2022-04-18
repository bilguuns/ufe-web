module.exports = {
    apps: [
        {
            name: "ufe_web",
            mode: "cluster",
            script: "/usr/bin/yarn",
            args: "start",
            watch: false,
            instances: 4,
            autorestart: true,
            max_memory_restart: "300M",
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
