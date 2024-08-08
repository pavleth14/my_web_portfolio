const Skills = ({ item }) => {

    const [title, description] = item.split(/:(.+)/); // array destructuring, Regex

    return (
        <div className="skillsItem">
            <div style={{display: 'flex', alignItems: 'center', height: '72px'}}>
            <h2 >{title}:</h2> 
            </div>
            <p style={{padding: '10px'}}>{description.trim()}</p> 
        </div>
    );
}

export default Skills;