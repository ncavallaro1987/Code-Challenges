# for ints 1-100 
# print 'A' if divisible by 3, 
# 'B' if divisible by 5, 
# 'AB' if divisible by 3 and 5, 
# and just the int if none of the above. 
# Format as '1, 2, A, 4, B, A, 7, 8, A, B, 11, A, 13, 14, AB, 16, 17, ...'

# using a string concat
strMessage = ''
i = 1
while i < 101:

    # add a comma to everything after the first item.
    # this could also be accomplished by checking if (i > 1), 
    # but since we're manipulating the string strMessage 
    #  rather than the variable i, I thought it best to check the string
    if (len(strMessage) != 0) :
        strMessage = strMessage + ', '
    
    # assign variables to simplify match
    div3 = (i % 3 == 0)
    div5 = (i % 5 == 0)

    
    # use a match to avoid nested if statements
    match (div3, div5) :
        case (True, True):
            strMessage = strMessage + 'AB'
        case (False, True):
            strMessage = strMessage + 'B'
        case (True, False):
            strMessage = strMessage + 'A'
        case _:
            strMessage = strMessage + str(i)
            
    i += 1
# print the message
print('The output of print(strMessage) is:')
print(strMessage)

print('')
print('')

# using a collection
# initialize array
arrMessage = []
i = 1
while i < 101:
    
    # assign variables to simplify match
    div3 = (i % 3 == 0)
    div5 = (i % 5 == 0)

    # use a match to avoid nested if statements
    match (div3, div5) :
        case (True, True):
            arrMessage.append('AB')
        case (False, True):
            arrMessage.append('B')
        case (True, False):
            arrMessage.append('A')
        case _:
            arrMessage.append(str(i))
            
    i += 1

# print the message
print('The output of print(", ".join(arrMessage)) is:')
print(", ".join(arrMessage))
