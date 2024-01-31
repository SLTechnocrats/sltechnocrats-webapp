import { portfolioActions } from "./portfolio";

// export const fetchData = () =>{
//     return async (dispatch) =>{
//         const fetchHandler = async()=>{
//             const res= await fetch("https://portfolio-api-9e248-default-rtdb.firebaseio.com/portfolio.json");
//             const data = await res.json();
//             return data;
//         }
//         try{
//             const portfolioData= await fetchHandler()
//             dispatch(portfolioActions.fetchPortfolio(portfolioData));
//             // console.log("Data fetched successfully" );
//         }catch(err){
//             console.log('unable to fetch data');
//         }
//     }
// }

export const fetchData = () => {
    return async (dispatch) => {
        // Function to handle the data fetching
        const fetchPortfolioData = async () => {
            const response = await fetch("https://portfolio-api-9e248-default-rtdb.firebaseio.com/portfolio.json");
            if (!response.ok) {
                throw new Error('Failed to fetch portfolio data');
            }
            return await response.json();
        };

        try {
            // Fetch and dispatch the portfolio data
            const portfolioData = await fetchPortfolioData();
            dispatch(portfolioActions.fetchPortfolio(portfolioData));
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    };
};
