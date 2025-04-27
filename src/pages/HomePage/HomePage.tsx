export const HomePage = () => {
    return (
        <div>
            <h1>HomePage</h1>
            {Array.from({ length: 40 }, (_, i) => (
                <p key={i}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                    voluptatibus delectus libero a perferendis ipsam commodi?
                    Facilis iusto quaerat ipsum asperiores eum, ut quae molestiae
                    illum nesciunt repellendus sint veniam?
                </p>
            ))}

        </div>
    );
};
