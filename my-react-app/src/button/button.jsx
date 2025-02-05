/*import styles from './button.module.css';
function Button(){
    return(
        <button className={styles.button}>Click me</button>
    );
}*/
function Button(){
    const styles ={
        
            backgroundColor: "hsl(200, 100%, 50%)",
            color: "white",
            padding: "10px 20px",
            bordeRadius: "5px",
            border:"none",
            cursor: "pointer",
          
    }
    return(
        <button style={styles}>Click me</button>
    );
}
export default Button