# ARM_financial_market_tickers
### Demo URL: [https://arm-financial-market-tickers.netlify.app/](https://arm-financial-market-tickers.netlify.app/)

A react application that fetches financial news and data from https://www.marketaux.com/ apis

##### Q1 - This project took approximately +/- 8 hours
##### Q2 - With more time, I would improve on the user experience, design and improve error handling
##### Q3 - React router version 6 is the latest version of the react-router library and there are a few implementation changes, one of with is how path routes are implemented (i.e., new: ```...element={<Component />```, old ```... component={Component} />```)
 Snippet:
    
    ```
     <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/market-news/:id" element={<DetailsPage />} />
      </Routes>
    
    ```
##### Q4 - To improve performace, the number of calls made to a single endpoint can be checked and minimized.
##### Q5 - The marketaux site can be improved by opening up more endpoints for free account plan and increasing the number of api request limit for test purposes, internal sever errors can also be better handled.
