var obj = JSON.parse($response.body);

obj= {
   "memberType":2   
};

$done({body: JSON.stringify(obj)});

// Descriptions
