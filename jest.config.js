export default {
    "roots": [
        "<rootDir>/src"
    ],
    "testMatch": [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    "collectCoverage": true,
    "collectCoverageFrom": [
        "**/*.ts"
    ],
    "coverageThreshold": {
        "global": {
            "lines": 90
        }
    }
}
