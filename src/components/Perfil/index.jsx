import styles from './Perfil.module.css'

// const Perfil = () => {

// export default function() {
export default (props) => { 
    const { nomeUsuario } = props;
    return ( 
        <header className={styles.header}>
            <img  className={styles.avatar} src={`https://github.com/grimmbunny.png`} />
                <h1 className={styles.name}>{nomeUsuario}</h1>
        </header>
    )
}

// export default Perfil