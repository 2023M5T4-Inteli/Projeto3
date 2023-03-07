

type ButtonProps = {
    Link: string;
    Title: string;
    className: string;
  }

export const Button = ({ Link, Title, className}: ButtonProps) => {
    const classes = ['w-full text-center rounded-lg text-bold text-white text-[25px]', className];

    return (
        <a href={Link}>
        <div className={classes.join(' ')}>
        {Title}
    </div>
    </a>
    )
}

export default Button;