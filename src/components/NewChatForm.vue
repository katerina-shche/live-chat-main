<template>
    <textarea
        placeholder="type a message and hit enter to send"
        v-model="message"
        @keypress.enter.prevent="handleSubmit">
        <div class="error">{{ error }}</div>
    </textarea>
</template>

<script>
import { getUser } from '@/composables/getUser';
import { useCollection } from '@/composables/useCollection';
import { timestamp } from '@/firebase/config';

import { ref } from 'vue';


    export default {
        setup() {
            const message = ref('')
            const { user } = getUser()
            const { projectAddDoc, error } = useCollection('messages')

            const handleSubmit = async () => {
                const chat = {
                    name: user.value.displayName,
                    message: message.value,
                    createdAt: timestamp() 
                }
                await projectAddDoc(chat)
                if (!error.value) {
                    message.value = ''
                }
                
            }

            return { message, handleSubmit, error }
        }
    }
</script>

<style scoped>
    form {
        margin: 10px;
    }
    textarea {
        width: 100%;
        max-width: 100%;
        margin-bottom: 6px;
        padding: 10px;
        box-sizing: border-box;
        border: 0;
        border-radius: 20px;
        font-family: inherit;
        outline: none;
    }
</style>