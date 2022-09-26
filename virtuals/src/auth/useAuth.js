import axios from "axios";
import { computed, reactive } from "vue";

// reactive
const state = reactive({
    authenticated: false,
    user: {},
});

export default function useAuth() {
    const getAuthenticated = computed(() => state.authenticated);
    const getUser = computed(() => state.user);
    // computed

    const setAuthenticated = (authenticated) => {
        state.authenticated = authenticated;
    };

    const setUser = (user) => {
        state.user = user;
    };

    const attempt = async () => {
        try {
            let response = await axios.get("/api/user");
            setAuthenticated(true);
            setUser(response.data);
            // console.log(state);
            return response;
        } catch (error) {
            console.log(error);
            setAuthenticated(false);
            setUser({});
        }

        // console.log(response);
    };
    const login = async (credentials) => {
        await axios.get("/sanctum/csrf-cookie");
        await axios.post("/login", credentials);
        attempt();
    };

    return {
        login,
        attempt,
        getAuthenticated,
        getUser,
    };
}
