type ContainerProps = {
    children: React.ReactNode
}

export default function Container({ children }: ContainerProps): JSX.Element {
    return (
        <div className={"container"}>
            { children }
        </div>
    )
}