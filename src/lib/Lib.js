class Library  {
    newGuid = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    typeWriter = (text, component, textFieldName, speed = 50, i = 0) => {
        if (i < text.length) {
            component.setState({
                [textFieldName] : component.state[textFieldName] += text.charAt(i)
            })
            i++;
            setTimeout(() => {this.typeWriter(text, component, textFieldName, speed, i)}, speed);
          }
    }
}

const lib = new Library();
export default lib;