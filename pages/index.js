export function getServerSideProps(props)
    {
        let query = props.query
        let country = query.country;

        let messages = {
      
        };
        // default message if you're not from one of the countries covered in this tutorial
        let msg = "This proof of concept only works with a few select countries like Argentina, Mexico, Venezuela, Colombia, and Costa Rica. I'm working on improving this.";
         if (messages[country]) {
            msg = messages[country];
         }
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
