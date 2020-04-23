<template>
    <v-container class="project-container">
        <v-row class="title-row" justify="center">
            <v-img
                v-show="imgUrl !== ''"
                :src="getImageURL(imgUrl)"
                max-height="30rem"
                min-height="30rem"
                contain
            ></v-img>
        </v-row>
        <v-row class="title-row" justify="center">
            <h1>{{title}}</h1>
        </v-row>
        <v-row class="content-row">
            <VueShowdown v-if="isMarkdown" :markdown="content"></VueShowdown>
            <div v-else>{{content}}</div>
        </v-row>
    </v-container>
</template>

<script>
import {getImageURL} from '../plugins/utils'
export default {
    props: {
        projectId:(Number,String)
    },
    data: () => ({
        content:"",
        isMarkdown:false,
        project:null,
        title:"",
        imgUrl:""
    }),
    methods:{
        getImageURL,
        onSuccess(response){
            this.isMarkdown = true;

            this.content = response.data.replace("{{LOCAL_IMAGE_DIR}}",process.env.BASE_URL+'images');
        },
        // eslint-disable-next-line no-unused-vars
        onFail(error){
            this.content = this.project.content?.text;
        },
        retrieveData()
        {
            if(this.project.content.mdUrl)
            {
                this.axios.get(process.env.BASE_URL+"projects/markdown/"+this.project.content.mdUrl)
                .then(this.onSuccess)
                .catch(this.onFail)
            }
            else
            {
                this.content = this.project.content?.text;
            }

            this.title = this.project.title;
            console.log()
            this.imgUrl = this.project.imageUrl;
        },
        retrieveProject(projectId)
        {
            if(this.$store.state.projects)
            {
                if(this.$store.state.projects.length <= projectId)
                {
                    this.$router.push({name:"404"});
                }
                else
                {
                    this.project = this.$store.state.projects[this.projectId]
                    this.retrieveData();
                }
            }
            else
            {
                this.$store.subscribe((mutation,state) => {
                    if(mutation.type === "setprojects" && state.projects.length > projectId)
                    {
                        if(this.$store.state.projects.length <= projectId)
                        {
                            this.$router.push({name:"404"});
                        }
                        else
                        {
                            this.project = state.projects[projectId];
                            this.retrieveData();
                        }
                    }
                },this,projectId)
            }
        }
    },
    mounted:function() {
        this.retrieveProject(this.projectId)
    },
    watch: {
        // eslint-disable-next-line no-unused-vars
        $route(to, from) {
            if(to && to.name === "Project" && to.params && to.params.projectId)
            {
                var projectId = to.params.projectId;
                if(!Number.isSafeInteger(projectId))
                {
                    this.retrieveProject(projectId)
                }
            }
        }
    }
}
</script>

<style lang="scss">
.title-menu{
    font-size: 3rem;    
}
.content-row{
    margin:2rem;
   
    img{
        max-width: 50%;
        display: block;
        margin: auto;
    }
}
@media(min-width: 992px)
{
    .title-row
    {
        margin-top: 2rem;;
    }
}
</style>