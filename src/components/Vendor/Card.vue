<template>
<div class="card-flex">
   
    

    
    <div class="card" v-for="item in cardItems" :key="item.cardTitle">
        <img 
            class="card-img-top" 
            :src="item.cardImg"
            max-height="600px"
            alt="Card image top">
        
        <!-- <div class="card-img-overlay">
            <h3 class="card-title" style="color: white;">{{ item.cardTitle }}</h3>
            <h4 class="card-subtitle" style="color: white;">{{ item.cardSubtitle}}</h4>
            <p class="card-text" style="color: white;">{{ item.cardText }}</p>
        </div> -->

        <div class="card-body">
            <div class="row">
            <!-- Avatar -->
                <div class="col-xs-12 white">
                    <img 
                         src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg" 
                         class="rounded-circle" 
                         alt="woman avatar">
                 </div>
                 <div class="avatar-text col">
                    <p class="card-title">Woman Avatar</p> 
                    <p class="card-text"><small>Card Text Area</small></p>
                </div>
            </div>
        </div>

    </div> 
    
</div>   
</template>

<script>
    export default {
        data () {
            return {
                cardItems: [
                    {   cardTitle: 'Title 1', 
                        cardSubtitle: 'Subtitle 1', 
                        cardText: 'Card quote 1', 
                        cardImg: 'https://source.unsplash.com/daily?nature' 
                    },
                    {   cardTitle: 'Title 2', 
                        cardSubtitle: 'Subtitle 2', 
                        cardText: 'Card quote 2', 
                        cardImg: 'https://source.unsplash.com/daily' 
                    },
                    {   cardTitle: 'Title 3', 
                        cardSubtitle: 'Subtitle 3', 
                        cardText: 'Card quote 3', 
                        cardImg: 'https://source.unsplash.com/daily?rock' 
                    },
                    {   cardTitle: 'Title 4', 
                        cardSubtitle: 'Subtitle 4', 
                        cardText: 'Card quote 4', 
                        cardImg: 'https://source.unsplash.com/daily?wood' 
                    },
                    {   cardTitle: 'Title 5', 
                        cardSubtitle: 'Subtitle 5', 
                        cardText: 'Card quote 5', 
                        cardImg: 'https://source.unsplash.com/daily' 
                    },
                    {   cardTitle: 'Title 6', 
                        cardSubtitle: 'Subtitle 6', 
                        cardText: 'Card quote 6', 
                        cardImg: 'https://source.unsplash.com/weekly?water' 
                    },
                    {   cardTitle: 'Title 1', 
                        cardSubtitle: 'Subtitle 1', 
                        cardText: 'Card quote 1', 
                        cardImg: 'https://source.unsplash.com/daily?nature' 
                    },
                    {   cardTitle: 'Title 2', 
                        cardSubtitle: 'Subtitle 2', 
                        cardText: 'Card quote 2', 
                        cardImg: 'https://source.unsplash.com/daily' 
                    },
                    {   cardTitle: 'Title 3', 
                        cardSubtitle: 'Subtitle 3', 
                        cardText: 'Card quote 3', 
                        cardImg: 'https://source.unsplash.com/collection/190727/800x600' 
                    },
                    {   cardTitle: 'Title 4', 
                        cardSubtitle: 'Subtitle 4', 
                        cardText: 'Card quote 4', 
                        cardImg: 'https://source.unsplash.com/random' 
                    },
                    {   cardTitle: 'Title 5', 
                        cardSubtitle: 'Subtitle 5', 
                        cardText: 'Card quote 5', 
                        cardImg: 'https://source.unsplash.com/daily' 
                    },
                    {   cardTitle: 'Title 6', 
                        cardSubtitle: 'Subtitle 6', 
                        cardText: 'Card quote 6', 
                        cardImg: 'https://source.unsplash.com/collection/190727/800x600' 
                    },
                    {   cardTitle: 'Title 1', 
                        cardSubtitle: 'Subtitle 1', 
                        cardText: 'Card quote 1', 
                        cardImg: 'https://source.unsplash.com/daily?nature' 
                    },
                    {   cardTitle: 'Title 2', 
                        cardSubtitle: 'Subtitle 2', 
                        cardText: 'Card quote 2', 
                        cardImg: 'https://source.unsplash.com/daily' 
                    },
                    {   cardTitle: 'Title 3', 
                        cardSubtitle: 'Subtitle 3', 
                        cardText: 'Card quote 3', 
                        cardImg: 'https://source.unsplash.com/collection/190727/800x600' 
                    },
                    {   cardTitle: 'Title 4', 
                        cardSubtitle: 'Subtitle 4', 
                        cardText: 'Card quote 4', 
                        cardImg: 'https://source.unsplash.com/random' 
                    },
                    {   cardTitle: 'Title 5', 
                        cardSubtitle: 'Subtitle 5', 
                        cardText: 'Card quote 5', 
                        cardImg: 'https://source.unsplash.com/daily' 
                    },
                    {   cardTitle: 'Title 6', 
                        cardSubtitle: 'Subtitle 6', 
                        cardText: 'Card quote 6', 
                        cardImg: 'https://source.unsplash.com/collection/190727/800x600' 
                    }
                ]
            }
        }
    }
</script>

<style>
.card-flex {
    display: inline;
}

.rounded-circle {
    margin: 0 3px 0 10px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    vertical-align: middle;
}

.card-title {
    margin: 0px 0px;
}

</style>

