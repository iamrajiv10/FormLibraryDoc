export const example1Data = [
    {
        label: "Country",
        name: "country",
        type: "select",
        options: ["India", "USA", "Canada"]
    }
];

export const example2Data = [
    {
        label: "Country",
        name: "country",
        type: "select",
        options: ["India", "USA", "Canada"],
        required: true
    }
];

export const example3Data = [
    {
        label: "Country",
        name: "country",
        type: "select",
        options: ["India", "USA", "Canada"],
        required: true,
        errorMessage: 'Please select a value.'
    }
];

export const example5Data = [
    {
        label: "Country",
        name: "country",
        type: "select",
        options: ["India", "USA", "Canada"],
        disabled: true
    }
];

export const example9Data = [
    {
        label: "Country",
        name: "country",
        type: "select",
        options: ["India", "USA", "Canada"],

        required: true,

        errorMessage: 'Please select a value.',

        style: {
            borderRadius: '8px'
        },

        labelStyle: {
            color: '#1976d2'
        },

        grid: {
            md: 12,
            xs: 12
        }
    }
];