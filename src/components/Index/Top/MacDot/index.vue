<template>
    <div class="dot">
        <ul>
            <li class="red-dot"></li>
            <li class="org-dot"></li>
            <li class="green-dot"></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'dot'
}
</script>

<style lang="scss" scoped>

    .dot {
        width: 20%;
        ul {
            display: flex;
        }
        ul li {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: orange;
            position: relative;
            top: 10px;           
            margin-left: 8px;       
        }
       ul .red-dot {
           background-color: #FF5A52;
       }
       ul .org-dot {
           background-color: #f3cc2f;
       }
       ul .green-dot {
           background-color: #52c22b;
       }
    }
    
</style>