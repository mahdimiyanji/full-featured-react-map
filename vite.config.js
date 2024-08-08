import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// https://vitejs.dev/config/
export default defineConfig({
    css: {
        modules: {
            localsConvention: 'camelCase',
        },
    },
    plugins: [react()],
    server: {
        host: true,
        port: 3000
    }
});
