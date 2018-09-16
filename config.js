export default {
    app: {
        token: "949897894ab641b6bef960ea9d4ddc4e", // <- enter your token here
        muted: false, // <- mute microphone by default
        googleIt: true // <- ask users to google their request, in case of input.unknown action
    },
    locale: {
        strings: {
            welcomeFrontline: "Welcome to Frontline.",
            welcomeTitle: "We help veterans and their families by connecting them to mental health resources.",
            welcomeDescription: 'To get help, just say "hello"',
            offlineTitle: "Oh, no!",
            offlineDescription: "It looks like you are not connected to the internet, this webpage requires internet connection, to process your requests",
            queryTitle: "Ask me something...",
            voiceTitle: "Go ahead, im listening..."
        },
        settings: {
            speechLang: "en-GB", // <- output language
            recognitionLang: "en-US" // <- input(recognition) language
        }
    }
}
