/** Add your relevant code here for the issue to reproduce */
export default function Home() {
    return (
        <button
            type="button"
            onClick={() => {
                throw new Error("Frontend Error");
            }}
        >
            Throw error
        </button>
    )
}