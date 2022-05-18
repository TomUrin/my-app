function ZebraiBebrai({spalva}) {
    if(spalva == 1) {
        return (
               <>
               <h1 style = {
                   {
                       color: "blue"
                   }
               }>Zebrai ir Bebrai</h1>
               </>
        )
    } else {
            return (
               <>
               <h1 style = {
                   {
                       color: "red"
                   }
               }>Zebrai ir Bebrai</h1>
               </>
            )
        }
}

export default ZebraiBebrai;