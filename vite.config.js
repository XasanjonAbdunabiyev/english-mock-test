import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import path from "path"

export default defineConfig({
    plugins: [react()],
    server: {
        watch: {
            usePolling: true,
        },
    },
    //** Adding import alias for dynamic  */
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@component": path.resolve(__dirname, "./src/components"),
            "@pages": path.resolve(__dirname, "./src/pages"),
            "@utils": path.resolve(__dirname, "./src/utils"),
            "@hooks": path.resolve(__dirname, "./src/hooks"),
        },
    },
})
