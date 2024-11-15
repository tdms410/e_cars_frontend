function ProductCounter({ count, total }) {
    return (
        <p>
            {count ? (
                <>
                    Vous avez vu {count} sur {total} voitures
                </>
            ) : (
                <> {total} voitures </>
            )}
        </p>
    );
}

export default ProductCounter;
