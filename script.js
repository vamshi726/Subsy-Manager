
var config = {

    containerID: "sawo-container",

    identifierType: "email",

    apiKey: "a1a7cce9-95ee-4bda-940e-32f03d29b73e",

    onSuccess: (payload) => {
        window.location = "./index.html"
    },
};
var sawo = new Sawo(config);
sawo.showForm(); 

