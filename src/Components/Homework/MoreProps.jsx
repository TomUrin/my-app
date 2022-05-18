function MoreProps ({first, second, color}) {
    return (
        <>
        <h1 style = {
            {
                color: color,
            }
        }>{first}</h1>
        <h2 style = {
            {
                color: color,
            }
        }>{second}</h2>
        </>
    )
}

export default MoreProps;