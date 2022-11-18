import agility from '@agility/content-fetch'

export async function getServerSideProps(props) {
    let query = props.query
    let country = query.country;

    let msg = `Country code ${country} does not have a localized message yet.`

    try {
        const api = agility.getApi({
            guid: process.env.AGILITY_GUID,
            apiKey: process.env.AGILITY_API_FETCH_KEY
        });

        //get the list of localized messages
        const messagesResp = await api.getContentList({
            referenceName: "localizedmessages",
            locale: process.env.AGILITY_LOCALE,
            take: 100
        })

        let localMessageItem = messagesResp.items.find(contentItem => contentItem.fields.countryCode === country)

        if (localMessageItem) {
            msg = localMessageItem.fields.message
        }
    } catch (error) {
        console.error("Error getting localized message", error)
        msg = `Error getting localized message: ${error}`
    }


    // let messages = {
    //   'AR': "¿Qué hacés, wachx?",
    //   'MX': "¿Qué onda, wey?",
    //   'VE': "¿Qué pasó, mi pana?",
    //   'CO': "¿Quihubo parce?",
    //   'ES': "¿Qué pasa?",
    //   'CR': "Pura vida.",
    // };
    // default message if you're not from one of the countries covered in this tutorial
    // let msg = "This proof of concept only works with a few select countries like Argentina, Mexico, Venezuela, Colombia, and Costa Rica. I'm working on improving this.";
    //  if (messages[country]) {
    //     msg = messages[country];
    //  }
    return {
        props: {
            message: msg
        },
    };
}

const Page = ({ message }) => {
    return (
        <main>
            <h1 id="message">{message}</h1>
        </main>
    );
};

export default Page;
