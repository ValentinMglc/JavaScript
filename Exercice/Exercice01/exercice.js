function add(nb1, nb2) {
    let result = nb1 + nb2;
        return(result);
}

function sub(nb1, nb2) {
    let result = nb1 - nb2;
        return(result);
}

function multi(nb1, nb2) {
    let result = nb1 * nb2;
        return(result);
}

function div(nb1, nb2) {
    let result = nb1 / nb2;
        return(result);
}

function mod(nb1, nb2) {
    let result = nb1 % nb2;
        return(result);
}

function do_op(nb1, nb2, op) {

    if (op == '+')
        return (add(nb1, nb2));
    if (op == '-')
        return (sub(nb1, nb2));
    if (op == '*')
        return (multi(nb1, nb2));
    if (op == '/')
        return (div(nb1, nb2));
    if (op == '%')
        return (mod(nb1, nb2));
}
console.log(do_op(10, 5, '+'));
