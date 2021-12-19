<template>
    <div>
        <h1>Todos</h1>
        <ul>
            <li v-for="todo of todos" :key="todo.id">
                {{ todo.name}}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";

export default {
        name: "TodoList",
        data() {
            return {
                todos: []
            };
        },
        async created(){
            try{
                const res = await axios.get(`http://localhost:3001/todos`);
                this.todos = res.data;
            } catch(e){
                console.log(e);
            }
        }
        
    
};
</script>


<style>
h1{
    text-decoration: underline;
}

li{
    color: white;
}
</style>