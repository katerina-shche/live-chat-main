<template>
    <div class="container">
        <Navbar />
        <ChatWindow />
        <NewChatForm />
    </div>
</template>

<script>
    import NewChatForm from '@/components/NewChatForm.vue'
    import ChatWindow from '@/components/ChatWindow.vue'
    import  Navbar  from '@/components/Navbar.vue'
    import { watch } from 'vue'
    import { useRouter } from 'vue-router'
    import { getUser } from '@/composables/getUser'

    export default {
        components:  { Navbar, NewChatForm, ChatWindow },
        setup() {
            const { user, error } = getUser()
            const router = useRouter()

            watch( user, () => {
                console.log('watching user', user.value )
                if (!user.value) {
                    router.push({ name: 'Welcome' })
                }
            })   
        }
        
    }
</script>

<style>

</style>