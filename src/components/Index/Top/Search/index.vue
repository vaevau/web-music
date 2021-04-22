<template>
    <div class="search">        
        <svg t="1618916631604" class="search-icon" viewBox="0 0 1024 1024"  p-id="2848" width="16" height="16"><path d="M1024 942.979045 672.514371 637.634963c51.146675-64.375716 81.745603-145.772236 81.745603-234.191342 0-207.949932-169.180055-377.129987-377.129987-377.129987S0 195.493689 0 403.443621s169.180055 377.129987 377.129987 377.129987c93.457939 0 179.069936-34.186057 245.027359-90.68935l354.316813 307.802108L1024 942.979045zM377.129987 732.424232C195.729621 732.424232 48.149376 584.843987 48.149376 403.443621S195.729621 74.46301 377.129987 74.46301c181.402774 0 328.980611 147.580245 328.980611 328.980611S558.532761 732.424232 377.129987 732.424232z" p-id="2849" fill="#ccc"></path></svg>
        <input type="text" value="搜索" class="search-ipt"/>
    </div>
</template>

<script>
export default {
    name: 'search'
}
</script>

<style lang="scss" scoped>
.search {
    width: 30%;
    margin-left: 40px;    
    position: relative;
    .search-icon {
      position: absolute;
      top: 21px;
      left: 8px;
    }
    .search-ipt {        
        height: 24px;
        width: 160px;
        padding-left: 28px;
        display: inline-block;
        background-color: #4a4a4a;  
        color: rgb(177, 171, 171);     
        font-size: 12px;
        border-radius: 12px;
        border: none;
        outline: none;
        
    }
    .search-ipt:focus{
        background-color: #363636;    
    }
   
}
    
</style>