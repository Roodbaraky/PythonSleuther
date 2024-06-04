from flask import Flask, jsonify

app =Flask(__name__)

@app.route('/api/users', methods=['GET'])
def users():
    return jsonify({
        'users': [
            'john',
            'ashley',
            'sam'
        ]
    })
    
if __name__ == '__main__':
    app.run(debug=True, port=5000)